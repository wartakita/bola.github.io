(() => {
      const allowedDomain = 'goalhubtv.blogspot.com'; // Set your domain here for protection
      // Domain protection & redirect
      function domainProtection() {
        if (window.location.hostname !== allowedDomain) {
          showNotification("This website is only accessible via domain <strong>" + allowedDomain + "</strong>. Redirecting to Google in 10 seconds...");
          setTimeout(() => window.location.href = 'https://google.com', 10000);
          throw 'Domain not allowed';
        }
      }

      // Notification functions
      const notificationEl = document.getElementById('notification');
      const notificationBody = document.getElementById('notificationBody');
      let notificationTimeout;

      function showNotification(msg) {
        if (notificationTimeout) clearTimeout(notificationTimeout);
        notificationBody.innerHTML = msg;
        notificationEl.style.display = 'flex';
        notificationEl.classList.add('show');
        notificationTimeout = setTimeout(() => {
          hideNotification();
        }, 6000);
      }

      function hideNotification() {
        notificationEl.classList.remove('show');
        notificationEl.style.display = 'none';
      }

      // Scroll to top button
      const scrollTopBtn = document.getElementById('scrollTopBtn');
      window.onscroll = () => {
        if (document.documentElement.scrollTop > 300) {
          scrollTopBtn.style.display = 'flex';
        } else {
          scrollTopBtn.style.display = 'none';
        }
      };
      scrollTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      // API URLs and tokens
      const baseLogoUrl = "https://asset.asiasport.com/";
      const matchListApiBase = "https://api2.asiasport.com/match/getMatchListv4";
      const liveScoreApiBase = "https://api2.asiasport.com/match/score";
      const token = "Kkzu11751361966912ocUlX";
      const adRedirectUrl = "https://www.profitableratecpm.com/asy7nn44y1?key=fb244c9fcb6018b78e6640d5ee73066f";

      // UI Elements
      const filterDateEl = document.getElementById('filterDate');
      const filterLeagueEl = document.getElementById('filterLeague');
      const filterTeamEl = document.getElementById('filterTeam');
      const filterStatusEl = document.getElementById('filterStatus');
      const matchesContainer = document.getElementById('matches');

      // State variables
      let leagueList = new Map(); // leagueId -> leagueName
      let allMatches = []; // all fetched matches

      // Set initial filterDate to today (Asia/Jakarta timezone)
      function getTodayJakarta() {
        const nowUTC = new Date();
        const jakartaOffset = 7 * 60; // +7 hours in minutes
        const utcMinutes = nowUTC.getUTCMinutes() + nowUTC.getUTCHours() * 60;
        const jakartaMinutes = utcMinutes + jakartaOffset;
        const jakartaDate = new Date(nowUTC.getTime() + (jakartaOffset + nowUTC.getTimezoneOffset()) * 60000);
        return jakartaDate.toISOString().slice(0, 10);
      }
      filterDateEl.value = getTodayJakarta();

      // Fetch match list with filters applied
      async function fetchMatchList() {
        let date = filterDateEl.value || getTodayJakarta();
        let url = new URL(matchListApiBase);
        url.searchParams.set('leagueIdList', '');
        url.searchParams.set('matchDate', date);
        url.searchParams.set('liveOnly', 'false');
        url.searchParams.set('lang', 'en');
        url.searchParams.set('timeZone', 'Asia/Jakarta');
        url.searchParams.set('token', token);

        try {
          const res = await fetch(url.toString());
          const data = await res.json();
          if (data.errorCode === 0) {
            allMatches = [];
            leagueList.clear();
            if (data.result.leagueMatchList && data.result.leagueMatchList.length > 0) {
              data.result.leagueMatchList.forEach(league => {
                leagueList.set(league.leagueId, league.leagueName);
                league.matchList.forEach(match => {
                  allMatches.push({
                    ...match,
                    leagueName: league.leagueName,
                    leagueId: league.leagueId,
                    leagueLogo: league.logo
                  });
                });
              });
            }
            populateLeagueFilter();
            renderMatches();
          } else {
            showNotification("Failed to fetch matches: " + data.message);
          }
        } catch (e) {
          showNotification("Error fetching matches: " + e.message);
        }
      }

      // Populate leagues in filter dropdown
      function populateLeagueFilter() {
        filterLeagueEl.innerHTML = '<option value="">All Leagues</option>';
        leagueList.forEach((name, id) => {
          const option = document.createElement('option');
          option.value = id;
          option.textContent = name;
          filterLeagueEl.appendChild(option);
        });
      }

      // Filter and render matches
      function renderMatches() {
        const dateFilter = filterDateEl.value;
        const leagueFilter = filterLeagueEl.value;
        const teamSearch = filterTeamEl.value.trim().toLowerCase();
        const statusFilter = filterStatusEl.value;

        let filteredMatches = allMatches.filter(m => {
          let pass = true;

          // Filter by league
          if (leagueFilter && m.leagueId.toString() !== leagueFilter) pass = false;

          // Filter by team name search
          if (teamSearch) {
            const homeName = m.opponents[0]?.name.toLowerCase() || "";
            const awayName = m.opponents[1]?.name.toLowerCase() || "";
            if (!homeName.includes(teamSearch) && !awayName.includes(teamSearch)) pass = false;
          }

          // Filter by status
          if (statusFilter) {
            // status values: live = matchState=1, finished = matchState<0, upcoming = matchState=0
            if (statusFilter === 'live' && m.matchState !== 1) pass = false;
            else if (statusFilter === 'finished' && m.matchState >= 0) pass = false;
            else if (statusFilter === 'upcoming' && m.matchState !== 0) pass = false;
          }

          // Filter by date exact match
          if (dateFilter && m.matchDate !== dateFilter) pass = false;

          return pass;
        });

        // Clear container
        matchesContainer.innerHTML = '';

        if (filteredMatches.length === 0) {
          matchesContainer.innerHTML = `<div class="col-12 text-center py-4 text-muted">No matches found.</div>`;
          return;
        }

        // Create match cards
        filteredMatches.forEach(match => {
          const home = match.opponents[0] || {};
          const away = match.opponents[1] || {};
          const liveStreamAvail = match.containLiveStream === true;

          // Status text and badge
          let statusBadge = '';
          let statusText = match.matchStatus || '';
          if (match.matchState === 1) statusBadge = `<span class="badge bg-success">Live</span>`;
          else if (match.matchState === 0) statusBadge = `<span class="badge bg-warning text-dark">Upcoming</span>`;
          else statusBadge = `<span class="badge bg-secondary">Finished</span>`;

          // Build card
          const card = document.createElement('div');
          card.className = 'col-12 col-md-6 col-lg-4';

          card.innerHTML = `
            <div class="card match-card shadow-sm">
              <div class="card-header d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="${baseLogoUrl}${match.leagueLogo}" alt="${match.leagueName} Logo" class="me-2" style="width:30px; height:30px; object-fit:contain; border-radius:3px;" />
                  <strong title="${match.leagueName}">${match.leagueName}</strong>
                </div>
                <div>${statusBadge}</div>
              </div>
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <img src="${baseLogoUrl}${home.logo}" alt="${home.name}" class="team-logo me-2" />
                    <span>${home.name}</span>
                  </div>
                  <div class="fs-5 fw-bold">${home.score ?? '-'}</div>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                  <div class="d-flex align-items-center">
                    <img src="${baseLogoUrl}${away.logo}" alt="${away.name}" class="team-logo me-2" />
                    <span>${away.name}</span>
                  </div>
                  <div class="fs-5 fw-bold">${away.score ?? '-'}</div>
                </div>
                <div class="text-muted small mb-1">${match.matchTime}</div>
                ${
                  liveStreamAvail
                    ? `<button class="btn btn-primary btn-sm btn-watch w-100" data-matchid="${match.matchId}">Nonton</button>`
                    : `<button class="btn btn-secondary btn-sm w-100" disabled>Not Available</button>`
                }
              </div>
            </div>
          `;
          matchesContainer.appendChild(card);
        });

        // Attach event listeners for watch buttons
        document.querySelectorAll('.btn-watch').forEach(btn => {
          btn.onclick = (e) => {
            const matchId = e.currentTarget.getAttribute('data-matchid');
            openAdThenPlayer(matchId);
          };
        });
      }

      // Open ad tab and then show JWPlayer popup
      function openAdThenPlayer(matchId) {
        // Open ad tab
        const adTab = window.open(adRedirectUrl, '_blank');
        setTimeout(() => {
          if (adTab) adTab.focus();
        }, 500);

        // Fetch streaming URL and open popup after short delay
        fetchLiveStreamUrl(matchId).then(url => {
          if (url) openPlayerPopup(url);
          else showNotification("Live stream URL not available.");
        });
      }

      // Fetch live stream URL from API
      async function fetchLiveStreamUrl(matchId) {
        try {
          const url = new URL(liveScoreApiBase);
          url.searchParams.set('matchId', matchId);
          url.searchParams.set('timeZone', 'Asia/Jakarta');
          url.searchParams.set('token', token);
          url.searchParams.set('lang', 'en');

          const res = await fetch(url.toString());
          const data = await res.json();
          if (data.errorCode === 0 && data.result && data.result.containLiveStream) {
            let streams = data.result.liveStreamUrl || [];
            // Try to find a stream with state 2 (available) or fallback first stream
            let stream = streams.find(s => s.state === 2) || streams[0];
            return stream ? stream.url : null;
          }
          return null;
        } catch (e) {
          showNotification("Error fetching livestream: " + e.message);
          return null;
        }
      }

      // JWPlayer instance and controls
      let jwplayerInstance = null;

      // Open player popup with JWPlayer
      function openPlayerPopup(streamUrl) {
        if (!streamUrl) return;
        const popup = document.getElementById('playerPopup');
        popup.style.display = 'flex';

        if (jwplayerInstance) {
          jwplayerInstance.remove();
          jwplayerInstance = null;
        }
        jwplayerInstance = jwplayer('jwplayerContainer').setup({
          file: streamUrl,
          width: '100%',
          aspectratio: '16:9',
          autostart: true
        });

        // Close popup button
        popup.querySelector('.popup-close').onclick = () => {
          popup.style.display = 'none';
          if (jwplayerInstance) {
            jwplayerInstance.remove();
            jwplayerInstance = null;
          }
          // Open ad tab on close
          window.open(adRedirectUrl, '_blank');
        };
      }

      // Auto refresh every 30 seconds if data changes
      let lastDataRaw = null;
      async function autoRefresh() {
        try {
          let date = filterDateEl.value || getTodayJakarta();
          let url = new URL(matchListApiBase);
          url.searchParams.set('leagueIdList', '');
          url.searchParams.set('matchDate', date);
          url.searchParams.set('liveOnly', 'false');
          url.searchParams.set('lang', 'en');
          url.searchParams.set('timeZone', 'Asia/Jakarta');
          url.searchParams.set('token', token);

          const res = await fetch(url.toString());
          const data = await res.json();
          let currentRaw = JSON.stringify(data);
          if (currentRaw !== lastDataRaw && data.errorCode === 0) {
            lastDataRaw = currentRaw;
            // Update the matches and filters
            allMatches = [];
            leagueList.clear();
            if (data.result.leagueMatchList && data.result.leagueMatchList.length > 0) {
              data.result.leagueMatchList.forEach(league => {
                leagueList.set(league.leagueId, league.leagueName);
                league.matchList.forEach(match => {
                  allMatches.push({
                    ...match,
                    leagueName: league.leagueName,
                    leagueId: league.leagueId,
                    leagueLogo: league.logo
                  });
                });
              });
            }
            populateLeagueFilter();
            renderMatches();
          }
        } catch (e) {
          console.error('Auto refresh error:', e);
        }
      }

      // Refresh data at midnight WIB (07:00 UTC)
      function scheduleMidnightRefresh() {
        const now = new Date();
        const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        // WIB = UTC+7
        const wibMidnightUTC = new Date(Date.UTC(utcNow.getUTCFullYear(), utcNow.getUTCMonth(), utcNow.getUTCDate() + 1, 17, 0, 0)); 
        // The next midnight in WIB is 17:00 UTC (previous day + 1, 17:00 UTC)
        const msToMidnight = wibMidnightUTC - utcNow;
        setTimeout(() => {
          fetchMatchList();
          scheduleMidnightRefresh();
        }, msToMidnight);
      }

      // Event listeners for filters
      filterDateEl.addEventListener('change', fetchMatchList);
      filterLeagueEl.addEventListener('change', renderMatches);
      filterTeamEl.addEventListener('input', renderMatches);
      filterStatusEl.addEventListener('change', renderMatches);

      // Initialize
      async function init() {
        domainProtection();
        await fetchMatchList();
        scheduleMidnightRefresh();
        // Auto refresh every 30 seconds:
        setInterval(autoRefresh, 30000);
      }

      init();

      // Expose notification hide function globally
      window.hideNotification = hideNotification;
    })();
