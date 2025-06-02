const apiToken = 'AfyWw17488374000980ZzU5';
const apiBase = 'https://api2.asiasport.com/match/getMatchListv4';

const leagueFilter = document.getElementById('leagueFilter');
const statusFilter = document.getElementById('statusFilter');
const dateFilter = document.getElementById('dateFilter');
const searchInput = document.getElementById('searchInput');
const matchList = document.getElementById('matchList');
const loader = document.getElementById('loader');

const leagueLoading = document.createElement('span');
leagueLoading.innerHTML = `
    <svg class="loading-spinner" width="20" height="20" viewBox="0 0 50 50" style="vertical-align: middle; margin-left: 8px;">
      <circle cx="25" cy="25" r="20" fill="none" stroke="#fbbf24" stroke-width="5" stroke-linecap="round" stroke-dasharray="90,150" stroke-dashoffset="0">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 25 25;360 25 25" keyTimes="0;1"/>
      </circle>
    </svg>`;
leagueLoading.style.display = 'none';
leagueLoading.id = 'leagueLoading';
statusFilter.parentElement.insertBefore(leagueLoading, statusFilter);

function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

let leagues = [],
    matches = [],
    leagueOptionSet = new Set();

async function fetchMatches() {
    loader.style.display = 'block';
    leagueLoading.style.display = 'inline-block';
    matchList.innerHTML = '';
    const leagueIds = leagueFilter.value;
    const status = statusFilter.value;
    const date = dateFilter.value;
    const liveOnly = status === 'LIVE' ? 'true' : 'false';

    const url = `${apiBase}?leagueIdList=${leagueIds}&matchDate=${date}&liveOnly=${liveOnly}&lang=en&timeZone=Asia%2FJakarta&token=${apiToken}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.errorCode === 0) {
            leagues = data.result.leagueMatchList;
            matches = [];
            leagues.forEach(league => {
                if (!leagueOptionSet.has(league.leagueId)) {
                    const option = document.createElement('option');
                    option.value = league.leagueId;
                    option.textContent = league.leagueName;
                    leagueFilter.appendChild(option);
                    leagueOptionSet.add(league.leagueId);
                }
                league.matchList.forEach(match => {
                    matches.push({
                        ...match,
                        leagueName: league.leagueName
                    });
                });
            });
            renderMatches();
        } else {
            showToast('Error loading matches: ' + (data.message || 'Unknown error'));
            matchList.innerHTML = '<li>Error loading matches.</li>';
        }
    } catch (err) {
        showToast('Network error: failed to load match data');
        matchList.innerHTML = '<li>Failed to fetch data.</li>';
    } finally {
        loader.style.display = 'none';
        leagueLoading.style.display = 'none';
    }
}

function renderMatches() {
    const status = statusFilter.value;
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = matches.filter(match => {
        if (status && status !== 'LIVE' && match.matchStatus !== status) return false;
        if (searchTerm) {
            const teamNames = match.opponents.map(t => t.name.toLowerCase());
            const matchName = match.matchName.toLowerCase();
            if (!teamNames.some(name => name.includes(searchTerm)) && !matchName.includes(searchTerm)) return false;
        }
        return true;
    }).sort((a, b) => new Date(`${a.matchDate}T${a.matchTime}`) - new Date(`${b.matchDate}T${b.matchTime}`));

    if (!filtered.length) {
        matchList.innerHTML = '<li>No matches found.</li>';
        return;
    }

    matchList.innerHTML = '';
    const icons = {
        LIVE: '🔴',
        FT: '✅',
        NS: '🕓'
    };

    filtered.forEach(match => {
        const li = document.createElement('li');
        li.className = 'match-item';
        const icon = icons[match.matchStatus] || '';
        li.innerHTML = `
        <div class="match-header">${match.leagueName} - ${match.roundEn || ''}</div>
        <div class="teams">
          <div class="team">
            <img src="https://asset.asiasport.com/${match.opponents[0].logo}" alt="${match.opponents[0].name} logo" />
            <div class="team-name">${match.opponents[0].name}</div>
          </div>
          <div class="score">${match.opponents[0].score} - ${match.opponents[1].score}</div>
          <div class="team" style="justify-content: flex-end;">
            <div class="team-name">${match.opponents[1].name}</div>
            <img src="https://asset.asiasport.com/${match.opponents[1].logo}" alt="${match.opponents[1].name} logo" />
          </div>
        </div>
        <div class="status ${match.matchStatus}">${icon} ${match.matchStatus} | ${match.matchDate} ${match.matchTime}</div>
      `;
        li.addEventListener('click', () => handlePlay(match));
        matchList.appendChild(li);
    });
}

leagueFilter.addEventListener('change', renderMatches);
statusFilter.addEventListener('change', () => {
    dateFilter.disabled = statusFilter.value === 'LIVE';
    fetchMatches();
});
dateFilter.addEventListener('change', fetchMatches);
searchInput.addEventListener('input', renderMatches);
fetchMatches();
setInterval(fetchMatches, 60000);

async function handlePlay(match) {
    try {
        const res = await fetch(`https://api2.asiasport.com/match/score?matchId=${match.matchId}&timeZone=Asia%2FJakarta&token=${apiToken}`);
        const data = await res.json();
        if (data?.result?.liveStreamUrl) {
            jwplayer("jwplayer-container").setup({
                file: data.result.liveStreamUrl,
                width: "100%",
                aspectratio: "16:9",
                autostart: true
            });
            document.getElementById('playerModal').style.display = 'flex';
        } else {
            showToast("Live stream tidak tersedia untuk pertandingan ini.");
        }
    } catch {
        showToast("Gagal memuat live stream.");
    }
}
