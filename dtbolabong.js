const apiToken = 'AfyWw17488374000980ZzU5';
const apiBase = 'https://api2.asiasport.com/match/getMatchListv4';

const leagueFilter = document.getElementById('leagueFilter');
const statusFilter = document.getElementById('statusFilter');
const dateFilter = document.getElementById('dateFilter');
const today = new Date().toISOString().split('T')[0];
dateFilter.value = today;
const searchInput = document.getElementById('searchInput');
const matchList = document.getElementById('matchList');
const loader = document.getElementById('loader');

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
        matchList.innerHTML = '';
        searchInput.classList.add('shake');
        setTimeout(() => searchInput.classList.remove('shake'), 500);
        showToast('⚠️ Tidak ada pertandingan yang cocok dengan pencarian Anda.');
        return;
    }

    matchList.innerHTML = '';
    const icons = {
        LIVE: '🔴',
        FT: '✅',
        NS: '🕓'
    };

    function renderMatchItem(match) {
        const li = document.createElement('li');
        li.className = 'match-item';
        li.setAttribute('tabindex', '0');
        li.style.position = 'relative';
        const icon = icons[match.matchStatus] || '';
        const countdown = match.matchStatus === 'NS' ? (() => {
            const msDiff = new Date(match.matchDate + ' ' + match.matchTime) - new Date();
            const min = Math.floor(msDiff / 60000);
            const sec = Math.floor((msDiff % 60000) / 1000);
            return ` | <span style='color:#facc15;'>Kick-off in ${min}m${min < 5 ? ` ${sec}s` : ''}</span>`;
        })() : '';
        li.innerHTML = `
      <div class="match-header">${match.leagueName} - ${match.roundEn || ''}</div>
      <div class="teams">
        <div class="team">
          <img loading="lazy" src="https://asset.asiasport.com/${match.opponents[0].logo}" alt="${match.opponents[0].name} logo" />
          <div class="team-name">${match.opponents[0].name}</div>
        </div>
        <div class="score">${match.opponents[0].score} - ${match.opponents[1].score}</div>
        <div class="team" style="justify-content: flex-end;">
          <div class="team-name">${match.opponents[1].name}</div>
          <img loading="lazy" src="https://asset.asiasport.com/${match.opponents[1].logo}" alt="${match.opponents[1].name} logo" />
        </div>
      </div>
      <div class="status ${match.matchStatus}">${icon} ${match.matchStatus} | ${match.matchDate} ${match.matchTime}${countdown}</div>
      ${match.containLiveStream ? `<div class="live-badge">🔴 LIVE</div>` : ''}
    `;
        li.dataset.id = match.matchId;
        li.addEventListener('click', () => handlePlay(match));
        return li;
    }

    filtered.forEach(match => {
        const existing = document.querySelector(`[data-id="${match.matchId}"]`);
        if (existing) {
            existing.querySelector('.score').textContent = `${match.opponents[0].score} - ${match.opponents[1].score}`;
            existing.querySelector('.status').textContent = `${match.matchStatus} | ${match.matchDate} ${match.matchTime}`;
        } else {
            matchList.appendChild(renderMatchItem(match));
        }
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
setInterval(fetchMatches, 3000);

async function handlePlay(match) {
    try {
        const res = await fetch(`https://api2.asiasport.com/match/score?matchId=${match.matchId}&timeZone=Asia%2FJakarta&token=${apiToken}`);
        const data = await res.json();
        if (data?.result?.liveStreamUrl) {
            const streams = Array.isArray(data.result.liveStreamUrl) ? data.result.liveStreamUrl : [{
                name: 'Default',
                url: data.result.liveStreamUrl
            }];
            const playlist = streams.map(s => ({
                file: s.url,
                label: s.name
            }));

            jwplayer("jwplayer-container").setup({
                playlist,
                width: "100%",
                aspectratio: "16:9",
                autostart: true
            });

            if (streams.length > 1) {
                const selector = document.createElement('select');
                selector.style.position = 'absolute';
                selector.style.top = '20px';
                selector.style.left = '20px';
                selector.style.padding = '6px';
                selector.style.borderRadius = '6px';
                selector.style.zIndex = 100001;

                streams.forEach((s, i) => {
                    const opt = document.createElement('option');
                    opt.value = s.url;
                    opt.textContent = s.name;
                    if (i === 0) opt.selected = true;
                    selector.appendChild(opt);
                });

                selector.onchange = e => {
                    jwplayer().load([{
                        file: e.target.value
                    }]);
                    jwplayer().play(true);
                };

                document.getElementById('playerModal').appendChild(selector);
            }
            document.getElementById('playerModal').style.display = 'flex';
        } else {
            showToast("Live stream tidak tersedia untuk pertandingan ini.");
        }
    } catch {
        showToast("Gagal memuat live stream.");
    }
}
