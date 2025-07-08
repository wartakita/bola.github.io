// ==== Config ====
const allowedDomain = 'goalhubtv.blogspot.com'; // Ubah ke domain Anda yang valid, tanpa www
const apiBaseUrl = 'https://api2.asiasport.com/match/getMatchListv4';
const apiToken = 'Kkzu11751361966912ocUlX';
const assetBaseUrl = 'https://asset.asiasport.com/';
const adsUrl = 'https://www.profitableratecpm.com/asy7nn44y1?key=fb244c9fcb6018b78e6640d5ee73066f';
const jwplayerLibrary = 'https://content.jwplatform.com/libraries/KB5zFt7A.js';
let jwplayerInstance = null;

// ==== Elements ====
const domainModal = document.getElementById('domainModal');
const redirectCountdownEl = document.getElementById('redirectCountdown');
const filterDateEl = document.getElementById('filterDate');
const filterLeagueEl = document.getElementById('filterLeague');
const filterStatusEl = document.getElementById('filterStatus');
const matchListSection = document.getElementById('matchListSection');
const searchTeamInput = document.getElementById('searchTeam');
const btnShare = document.getElementById('btnShare');
const btnScrollTop = document.getElementById('btnScrollTop');
const playerModal = document.getElementById('playerModal');
const jwplayerContainer = document.getElementById('jwplayerContainer');
const closePlayerBtn = document.getElementById('closePlayerBtn');
const notificationToast = document.getElementById('notificationToast');

// State
let allData = [];
let leagues = new Map();
let filterTimeout = null;
let countdownInterval = null;

// ==== Domain protection ====
function checkDomain() {
    const hostname = window.location.hostname;
    if (hostname !== allowedDomain && hostname !== 'localhost' && hostname !== '127.0.0.1') {
        domainModal.classList.remove('hidden');
        let countdown = 10;
        redirectCountdownEl.textContent = countdown;
        countdownInterval = setInterval(() => {
            countdown--;
            redirectCountdownEl.textContent = countdown;
            if (countdown <= 0) {
                window.location.href = 'https://google.com';
            }
        }, 1000);
    }
}

// ==== Notification ====
function notify(msg, duration = 3000) {
    notificationToast.textContent = msg;
    notificationToast.style.opacity = 1;
    notificationToast.style.pointerEvents = 'auto';
    setTimeout(() => {
        notificationToast.style.opacity = 0;
        notificationToast.style.pointerEvents = 'none';
    }, duration);
}

// ==== Fetch matches from API ====
async function fetchMatches(date) {
    try {
        let dateStr = date ? date : new Date().toISOString().substring(0, 10);
        const url = `${apiBaseUrl}?leagueIdList=&matchDate=${dateStr}&liveOnly=false&lang=en&timeZone=Asia/Jakarta&token=${apiToken}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.errorCode === 0 && data.result && data.result.leagueMatchList) {
            allData = data.result.leagueMatchList;
            extractLeagues(allData);
            renderFilterLeagues();
            filterAndRenderMatches();
            notify('Matches loaded successfully');
        }
    } catch (err) {
        notify('Failed to load matches');
        console.error(err);
    }
}

// ==== Extract leagues from data ====
function extractLeagues(data) {
    leagues.clear();
    data.forEach(league => {
        leagues.set(league.leagueId, league.leagueName);
        // also add filter option if missing
        if (![...filterLeagueEl.options].some(o => o.value === String(league.leagueId))) {
            const option = document.createElement('option');
            option.value = league.leagueId;
            option.textContent = league.leagueName;
            filterLeagueEl.appendChild(option);
        }
    });
}

// ==== Render League filter options ====
function renderFilterLeagues() {
    // Already appended on extract, so no need to re-render now
}

// ==== Filter and render matches ====
function filterAndRenderMatches() {
    const dateFilter = filterDateEl.value;
    const leagueFilter = filterLeagueEl.value;
    const statusFilter = filterStatusEl.value;
    const searchTerm = searchTeamInput.value.toLowerCase();

    matchListSection.innerHTML = '';

    // Filter matches by criteria
    allData.forEach(league => {
        if (leagueFilter && league.leagueId != leagueFilter) return;

        league.matchList.forEach(match => {
            // Filter by date if selected
            if (dateFilter && match.matchDate !== dateFilter) return;

            // Filter by status
            let statusText = '';
            if (match.matchStatus === 'FT' || match.matchStatus === 'Finished') statusText = 'FT';
            else if (match.matchStatus === 'Live' || match.isLive) statusText = 'Live';
            else statusText = 'Upcoming';

            if (statusFilter && statusText !== statusFilter) return;

            // Filter by search team
            const teams = match.opponents.map(o => o.name.toLowerCase());
            if (searchTerm && !teams.some(t => t.includes(searchTerm))) return;

            renderMatchCard(match, league);
        });
    });

    if (!matchListSection.innerHTML) {
        matchListSection.innerHTML = '<p class="text-center col-span-full text-gray-400">No matches found.</p>';
    }
}

// ==== Render each match card ====
function renderMatchCard(match, league) {
    // Teams info
    const home = match.opponents[0];
    const away = match.opponents[1];
    const matchTime = new Date(`${match.matchDate}T${match.matchTime.padStart(5, '0')}:00+07:00`);

    // Status badge color
    let statusColor = 'bg-gray-500';
    if (match.matchStatus === 'FT') statusColor = 'bg-green-500';
    else if (match.isLive) statusColor = 'bg-red-500';
    else if (match.matchStatus === 'Upcoming') statusColor = 'bg-yellow-500';

    const card = document.createElement('article');
    card.className = "bg-gray-800 rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-yellow-400 transition flex flex-col";

    card.innerHTML = `
        <div class="flex justify-between items-center p-3 border-b border-yellow-400">
          <div class="text-sm font-semibold text-yellow-400 truncate" title="${league.leagueName}">${league.leagueName}</div>
          <div class="px-2 py-0.5 rounded text-xs text-white ${statusColor} select-none">${match.matchStatus}</div>
        </div>
        <div class="p-3 flex flex-col space-y-2 flex-grow">
          <div class="flex items-center space-x-2">
            <img src="${assetBaseUrl}${home.logo}" alt="${home.name} logo" class="w-10 h-10 object-contain rounded" />
            <div class="flex-grow">
              <h4 class="font-bold text-yellow-400 truncate">${home.name}</h4>
              <p class="text-gray-300 text-sm">Score: ${home.score ?? '0'}</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <img src="${assetBaseUrl}${away.logo}" alt="${away.name} logo" class="w-10 h-10 object-contain rounded" />
            <div class="flex-grow">
              <h4 class="font-bold text-yellow-400 truncate">${away.name}</h4>
              <p class="text-gray-300 text-sm">Score: ${away.score ?? '0'}</p>
            </div>
          </div>
          <p class="text-sm text-gray-400 mt-auto">${new Date(match.matchDate).toLocaleDateString()} ${match.matchTime} WIB</p>

          <button data-matchid="${match.matchId}" class="btnWatch mt-2 px-3 py-1 text-sm rounded bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition self-start">
            Nonton
          </button>
        </div>
      `;

    matchListSection.appendChild(card);
}

// ==== Open Ads tab then show player ====
function openAdsThenPlayer(matchId) {
    // Open Ads tab
    const adsTab = window.open(adsUrl, '_blank');
    notify('Ads tab opened. Close ads to start watching');

    // Poll until adsTab is closed:
    const timer = setInterval(() => {
        if (adsTab.closed) {
            clearInterval(timer);
            openPlayerModal(matchId);
        }
    }, 1000);
}

// ==== Open Player Modal with JWPlayer ====
async function openPlayerModal(matchId) {
    // Fetch streaming URL from API nonton
    const apiNonton = `https://api2.asiasport.com/match/score?matchId=${matchId}&timeZone=Asia/Jakarta&token=${apiToken}&lang=en`;
    try {
        const response = await fetch(apiNonton);
        const data = await response.json();
        if (data.errorCode === 0 && data.result && data.result.liveStreamUrl && data.result.liveStreamUrl.length > 0) {
            const streamUrl = data.result.liveStreamUrl[0].url;

            playerModal.classList.remove('hidden');

            // Initialize JWPlayer
            if (!jwplayerInstance) {
                jwplayerInstance = jwplayer('jwplayerContainer');
            }
            jwplayerInstance.setup({
                file: streamUrl,
                width: '100%',
                aspectratio: '16:9',
                autostart: true,
                controls: true,
                repeat: false,
                mute: false,
            });
        } else {
            notify('Stream not available for this match.');
        }
    } catch (err) {
        notify('Failed to load stream from API.');
        console.error(err);
    }
}

// ==== Close player modal ====
function closePlayer() {
    if (jwplayerInstance) {
        jwplayerInstance.remove();
        jwplayerInstance = null;
    }
    playerModal.classList.add('hidden');
    // Open ads tab again after player close
    window.open(adsUrl, '_blank');
}

// ==== Init ====
function init() {
    checkDomain();

    // Initialize date filter with today
    const todayStr = new Date().toISOString().substring(0, 10);
    filterDateEl.value = todayStr;

    fetchMatches(todayStr);

    // Filter event handlers
    filterDateEl.addEventListener('change', () => fetchMatches(filterDateEl.value));
    filterLeagueEl.addEventListener('change', filterAndRenderMatches);
    filterStatusEl.addEventListener('change', filterAndRenderMatches);
    searchTeamInput.addEventListener('input', () => {
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(filterAndRenderMatches, 300);
    });

    // Watch buttons event (event delegation)
    matchListSection.addEventListener('click', (e) => {
        if (e.target.classList.contains('btnWatch')) {
            const matchId = e.target.getAttribute('data-matchid');
            openAdsThenPlayer(matchId);
        }
    });

    // Close Player modal
    closePlayerBtn.addEventListener('click', closePlayer);

    // Scroll to top button logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) btnScrollTop.classList.remove('hidden');
        else btnScrollTop.classList.add('hidden');
    });
    btnScrollTop.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }));

    // Share button opens share dialog
    btnShare.addEventListener('click', () => {
        const shareData = {
            title: 'GoalHub - Football Live Scores & Streams',
            text: 'Check out GoalHub for the latest football match scores and live streams!',
            url: window.location.href,
        };
        if (navigator.share) {
            navigator.share(shareData).catch(console.error);
        } else {
            alert('Your browser does not support share API.');
        }
    });

    // Auto update every 30 seconds (re-fetch API if data changed)
    setInterval(async () => {
        try {
            const dateStr = filterDateEl.value;
            const url = `${apiBaseUrl}?leagueIdList=&matchDate=${dateStr}&liveOnly=false&lang=en&timeZone=Asia/Jakarta&token=${apiToken}`;
            const response = await fetch(url);
            const newData = await response.json();
            if (JSON.stringify(newData.result) !== JSON.stringify(allData)) {
                allData = newData.result.leagueMatchList;
                extractLeagues(allData);
                filterAndRenderMatches();
                notify('Data updated');
            }
        } catch {
            console.warn('Auto update failed');
        }
    }, 30000);

    // Auto update at midnight (00:00 Asia/Jakarta time)
    setTimeout(function midnightUpdate() {
        const now = new Date();
        const nextMidnight = new Date();
        nextMidnight.setHours(24, 0, 5, 0);
        const timeout = nextMidnight - now;
        setTimeout(() => {
            fetchMatches(filterDateEl.value);
            notify('Date changed - data refreshed');
            midnightUpdate();
        }, timeout);
    }, 1000);
}

window.onload = init;
