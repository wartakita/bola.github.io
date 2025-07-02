const adUrl = "https://www.profitableratecpm.com/f179q8tyuw?key=7e0494d1d510a43c5f27629f7570405a";

const baseLogo = 'https://asset.asiasport.com/';
const footballBase = 'https://api2.asiasport.com/match/getMatchListv4?leagueIdList=&liveOnly=false&lang=en&timeZone=Asia%2FJakarta&token=AfyWw17488374000980ZzU5&matchDate=';
const basketballBase = 'https://api2.asiasport.com/basketball/match/getMatchList?leagueIdList=&liveOnly=false&lang=en&timeZone=Asia%2FJakarta&token=AfyWw17488374000980ZzU5&matchDate=';

document.getElementById('filter-date').value = new Date().toISOString().split('T')[0];
document.getElementById('filter-date').addEventListener('change', refreshAllMatches);
document.getElementById('search-team').addEventListener('input', refreshAllMatches);
document.getElementById('filter-status').addEventListener('change', refreshAllMatches);

function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.container').forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
    });
    document.querySelector(`.tab[onclick*='${tabId}']`).classList.add('active');
    const selected = document.getElementById(tabId);
    selected.style.display = 'block';
    setTimeout(() => selected.classList.add('active'), 10);
}

function showNoMatch(container) {
    const empty = document.createElement('div');
    empty.className = 'no-match';
    empty.innerHTML = `
    <img src="https://cdn-icons-png.freepik.com/512/6261/6261498.png" alt="No matches" class="no-match-icon">
    <div class="no-match-text">No match found</div>
  `;
    container.appendChild(empty);
}

function matchFilter(match, teamQuery, statusFilter) {
    const teams = match.opponents.map(t => t.name.toLowerCase());
    const matchStatus = match.matchStatus || '';
    const isLive = match.isLive;
    let statusPass = true;
    if (statusFilter === 'LIVE') statusPass = isLive === true;
    else if (statusFilter === 'NS') statusPass = matchStatus === 'NS' || /^[0-9]{1,2}:[0-9]{2}$/.test(matchStatus);
    else if (statusFilter) statusPass = matchStatus === statusFilter;
    return (!teamQuery || teams.some(n => n.includes(teamQuery))) && statusPass;
}

function refreshAllMatches() {
    fetchAndRenderMatches('Football', footballBase, 'football');
    fetchAndRenderMatches('Basketball', basketballBase, 'basketball');
}

async function fetchAndRenderMatches(sport, apiBase, containerId) {
    const date = document.getElementById('filter-date').value;
    const teamQuery = document.getElementById('search-team').value.toLowerCase();
    const statusFilter = document.getElementById('filter-status').value;
    const apiUrl = `${apiBase}${date}`;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        if (!data.result || !Array.isArray(data.result.leagueMatchList)) return showNoMatch(container);
        let hasMatches = false;

        data.result.leagueMatchList.forEach(league => {
            const filtered = league.matchList.filter(m => matchFilter(m, teamQuery, statusFilter));
            if (!filtered.length) return;
            hasMatches = true;
            const leagueEl = document.createElement('div');
            leagueEl.className = 'league';
            leagueEl.innerHTML = `
        <div class="league-header">
          <img src="${baseLogo + league.logo}" alt="${league.leagueName}" />
          <strong>${league.leagueName}</strong>
        </div>`;

            filtered.forEach(match => {
                const team1 = match.opponents[0],
                    team2 = match.opponents[1];
                const score1 = team1.score ?? team1.totalScore ?? "-";
                const score2 = team2.score ?? team2.totalScore ?? "-";
                const status = match.isLive ? '<span style="color:red;font-weight:bold">LIVE</span>' : match.matchStatus;

                const matchEl = document.createElement('div');
                matchEl.className = 'match';
                matchEl.innerHTML = `
          <div class="teams">
            <div class="team">
              <img src="${baseLogo + team1.logo}" alt="${team1.name}" />
              <span>${team1.name}</span>
            </div>
            <div class="score">${score1} : ${score2}</div>
            <div class="team">
              <span>${team2.name}</span>
              <img src="${baseLogo + team2.logo}" alt="${team2.name}" />
            </div>
          </div>
          <div class="match-time">${match.matchDate} ${match.matchTime} | ${status}</div>`;

                if (match.containLiveStream) matchEl.appendChild(createWatchButton(match.matchId));
                leagueEl.appendChild(matchEl);
            });

            container.appendChild(leagueEl);
        });

        if (!hasMatches) showNoMatch(container);
    } catch (e) {
        console.error("Failed to load " + sport + " matches", e);
    }
}

refreshAllMatches();
setInterval(refreshAllMatches, 10000);

function createWatchButton(matchId) {
    const btn = document.createElement('button');
    btn.textContent = 'Tonton';
    btn.className = 'watch-btn';

    btn.onmouseenter = () => btn.style.opacity = '0.85';
    btn.onmouseleave = () => btn.style.opacity = '1';

    btn.onclick = async () => {
        const adWindow = window.open(adUrl, '_blank', 'noopener,noreferrer');
        const originalHTML = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '⏳ Loading...';

        const tryLoadStream = async () => {
            try {
                const res = await fetch(`https://api2.asiasport.com/match/score?matchId=${matchId}&timeZone=Asia%2FJakarta&token=Kkzu11751361966912ocUlX&lang=en`);
                const data = await res.json();
                const url = data?.result?.liveStreamUrl?.[0]?.url;
                if (!url) {
                    const notify = document.createElement('div');
                    notify.textContent = '⚠️ Link streaming tidak tersedia';
                    notify.style = 'opacity:0;transition:opacity 0.5s ease, transform 0.5s ease;transform:translateY(-20px);position:fixed;top:1rem;left:50%;transform:translateX(-50%);background:#fef3c7;color:#92400e;padding:0.75rem 1.5rem;border-radius:0.5rem;font-weight:600;z-index:10000;box-shadow:0 2px 4px rgba(0,0,0,0.1)';
                    document.body.appendChild(notify);
                    requestAnimationFrame(() => {
                        notify.style.opacity = '1';
                        notify.style.transform = 'translateX(-50%) translateY(0)';
                    });
                    setTimeout(() => {
                        notify.style.opacity = '0';
                        notify.style.transform = 'translateX(-50%) translateY(-20px)';
                        setTimeout(() => notify.remove(), 500);
                    }, 3000);
                    return;
                }

                const overlay = document.createElement('div');
                overlay.style = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9999';
                overlay.innerHTML = `
          <div id="overlay-backdrop" style="position:absolute;top:0;left:0;width:100%;height:100%;"></div>
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%; max-width: 640px; aspect-ratio: 16/9;">
            <div style="text-align:center;color:white;padding-bottom:0.5rem;font-weight:600;">
              ${data.result.homeTeamName} vs ${data.result.awayTeamName}
            </div>
            <div id="player" style="width:100%;height:100%;"></div>
          </div>
          <button onclick="this.parentNode.remove()" style="position:absolute;top:1rem;right:1rem;background:#ef4444;color:#fff;border:none;padding:0.5rem 1rem;border-radius:0.5rem;">Tutup</button>
        `;
                overlay.querySelector('#overlay-backdrop').addEventListener('click', () => overlay.remove());
                document.body.appendChild(overlay);

                jwplayer("player").setup({
                    file: url,
                    width: "100%",
                    height: "100%",
                    autostart: true
                });

                // Tambahkan kontrol remote panah kanan/kiri untuk fullscreen
                if (!window._playerKeyHandlerAttached) {
                    window.addEventListener('keydown', (e) => {
                        const playerEl = document.getElementById("player");
                        if (!playerEl) return;
                        if (e.key === 'ArrowUp' || e.key === 'Enter') {
                            if (playerEl.requestFullscreen) playerEl.requestFullscreen();
                            else if (playerEl.webkitRequestFullscreen) playerEl.webkitRequestFullscreen();
                            else if (playerEl.msRequestFullscreen) playerEl.msRequestFullscreen();
                        } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'Escape') {
                            const overlay = playerEl.closest('div[style*="position:fixed"]');
                            if (overlay) overlay.remove();
                        }
                    });
                    window._playerKeyHandlerAttached = true;
                }

                const fullscreenBtn = document.createElement('button');
                fullscreenBtn.textContent = 'Full Screen';
                fullscreenBtn.style = 'margin-top:1rem;background:#10b981;color:#fff;border:none;padding:0.5rem 1rem;border-radius:0.5rem;cursor:pointer;font-weight:600;display:block;margin-left:auto;margin-right:auto';
                fullscreenBtn.onclick = () => {
                    const playerEl = document.getElementById("player");
                    if (playerEl.requestFullscreen) playerEl.requestFullscreen();
                    else if (playerEl.webkitRequestFullscreen) playerEl.webkitRequestFullscreen();
                    else if (playerEl.msRequestFullscreen) playerEl.msRequestFullscreen();
                };
                document.querySelector("#player").parentElement.appendChild(fullscreenBtn);
            } catch (err) {
                alert('Gagal memuat streaming');
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalHTML;
            }
        };

        const loadingNotice = document.createElement('div');
        loadingNotice.textContent = 'Memuat streaming...';
        loadingNotice.style = 'position:fixed;bottom:1rem;left:50%;transform:translateX(-50%);background:#1e3a8a;color:#fff;padding:0.75rem 1.5rem;border-radius:0.5rem;font-weight:600;z-index:10000';
        document.body.appendChild(loadingNotice);

        setTimeout(() => {
            loadingNotice.remove();
            tryLoadStream();
        }, 1000);
    };

    return btn;
}
