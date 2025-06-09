const API_TOKEN = 'AfyWw17488374000980ZzU5';
    const BASE_API = 'https://api2.asiasport.com/match/getMatchListv4';
    const BASE_LOGO = 'https://asset.asiasport.com/';
    const filterDate = document.getElementById('filter-date');
    const filterLeague = document.getElementById('filter-league');
    const filterStatus = document.getElementById('filter-status');
    const searchTeam = document.getElementById('search-team');
    const matchesContainer = document.getElementById('matches-container');
    let leaguesData = [];
    let currentDate = new Date().toISOString().slice(0, 10);
    filterDate.value = currentDate;

    filterDate.addEventListener('change', e => {
      currentDate = e.target.value;
      fetchMatches(currentDate);
    });
    filterLeague.addEventListener('change', render);
    filterStatus.addEventListener('change', render);
    searchTeam.addEventListener('input', render);

    fetchMatches(currentDate);
    setInterval(() => fetchMatches(currentDate), 3000);

    async function fetchMatches(date) {
      const params = new URLSearchParams({
        matchDate: date,
        token: API_TOKEN,
        lang: 'en',
        timeZone: 'Asia/Jakarta',
      });
      const res = await fetch(`${BASE_API}?${params.toString()}`);
      const data = await res.json();
      if (data.errorCode === 0) {
        leaguesData = data.result.leagueMatchList || [];
        updateLeagueOptions();
        render();
      }
    }

    function updateLeagueOptions() {
      const selected = filterLeague.value;
      filterLeague.innerHTML = '<option value="">All Leagues</option>';
      leaguesData.forEach(lg => {
        const opt = document.createElement('option');
        opt.value = lg.leagueId;
        opt.textContent = lg.leagueName;
        filterLeague.appendChild(opt);
      });
      if ([...filterLeague.options].some(o => o.value === selected)) {
        filterLeague.value = selected;
      }
    }

    function render() {
      const leagueId = filterLeague.value;
      const status = filterStatus.value.toLowerCase();
      const search = searchTeam.value.toLowerCase().trim();
      const filteredLeagues = leaguesData.map(league => {
        const matchList = league.matchList
          .filter(match => {
            const matchStatus = match.matchStatus.toLowerCase();
            const isLive = match.isLive === true || matchStatus.includes('live');
            const isFinished = matchStatus.includes('pen') || matchStatus.includes('ft') || matchStatus.includes('finished');
            const isUpcoming = !isLive && !isFinished;

            let statusMatch = true;
            if (status === 'live') statusMatch = isLive;
            else if (status === 'finished') statusMatch = isFinished;
            else if (status === 'upcoming') statusMatch = isUpcoming;

            const teamMatch = !search || (match.opponents || []).some(t => t.name.toLowerCase().includes(search));
            return statusMatch && teamMatch;
          })
          .sort((a, b) => a.matchTime.localeCompare(b.matchTime));

        return { ...league, matchList };
      }).filter(league => league.matchList.length > 0 && (!leagueId || league.leagueId.toString() === leagueId));

      if (filteredLeagues.length === 0) {
        matchesContainer.innerHTML = '<p style="text-align:center; color:#aaa; padding:1rem">No matches found.</p>';
        return;
      }

      matchesContainer.innerHTML = filteredLeagues.map(league => {
        return league.matchList.map(match => {
          const isLive = match.isLive;
          const statusClass = isLive ? 'live' : /pen|ft|finished/.test(match.matchStatus.toLowerCase()) ? 'finished' : 'upcoming';
          const teams = match.opponents.map(team => `
            <div class="team">
              <img class="team-logo" src="${BASE_LOGO + team.logo}" alt="${team.name}" />
              <div class="team-name">${team.name}</div>
              <div class="score">${team.score ?? '-'}</div>
            </div>`);
          return `
            <article class="match-card ${statusClass}" tabindex="0" role="group" aria-label="Match details">
              <div class="league-info"><img src="${BASE_LOGO + league.logo}" /> ${league.leagueName}</div>
              <div class="match-header"><div>${match.matchName}</div><div>${match.matchTime}</div></div>
              <div class="teams">${teams[0]}<div class="vs">vs</div>${teams[1]}</div>
              <div class="status ${statusClass}">${match.matchStatus}</div>
${match.containLiveStream ? `<button data-watch="${match.matchId}" style="margin-top:0.5rem; background:var(--accent); color:#121217; padding:0.4rem 0.8rem; border:none; border-radius:6px; cursor:pointer; font-weight:600;">Watch</button>` : ''}
            </article>`;
        }).join('');
      }).join('');
    }
  </script>
<script src="https://content.jwplatform.com/libraries/KB5zFt7A.js"></script>
<script>
  async function fetchStream(matchId) {
    const url = `https://api2.asiasport.com/match/score?matchId=${matchId}&timeZone=Asia%2FJakarta&token=${API_TOKEN}&lang=en`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.errorCode === 0 && data.result.containLiveStream && data.result.liveStreamUrl?.length) {
      const stream = data.result.liveStreamUrl.find(v => v.url);
      if (stream) {
        document.getElementById('video-player-container').style.display = 'block';
        if (jwplayer("player").remove) jwplayer("player").remove();
        jwplayer("player").setup({
          file: stream.url,
          width: "100%",
          aspectratio: "16:9",
          autostart: true
        });
      }
    } else {
      document.getElementById('video-player-container').style.display = 'block';
        document.getElementById('player').innerHTML = '<p style="color:#ccc; text-align:center; font-size:1rem; padding:1rem;">Live stream not available for this match.</p>';
    }
  }

  document.addEventListener('click', function (e) {
    const watchBtn = e.target.closest('[data-watch]');
    if (watchBtn) {
      const matchId = watchBtn.getAttribute('data-watch');
      fetchStream(matchId);
    }
  });
function closePlayerModal() {
  if (jwplayer('player')?.remove) jwplayer('player').remove();
  document.getElementById('player').innerHTML = '';
  document.getElementById('video-player-container').style.display = 'none';
}

// Close on overlay click
const overlay = document.getElementById('video-player-container');
overlay?.addEventListener('click', e => {
  if (e.target === overlay) closePlayerModal();
});
