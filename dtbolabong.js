function updateMatchData(apiUrl) {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            if (data.code !== "0" || !data.data || !data.data.matchinfo) return;
            const match = data.data.matchinfo;
            const matchId = match.mid || match.id || 'N/A';
            const matchDiv = Array.from(document.querySelectorAll('.match-info')).find(div =>
                div.textContent.includes(`ID: ${matchId}`)
            );
            if (!matchDiv) return;
            const scoreEl = matchDiv.querySelector('.score');
            const statusEl = matchDiv.querySelector('.status-time');
            if (scoreEl) scoreEl.textContent = match.score;
            if (statusEl) {
                statusEl.innerHTML = `
            <div>${match.status_up_name || ''}</div>
            <div>${match.matchtime_en || match.matchtime}</div>
            <div>Time: ${match.time || ''}'</div>
            <div class="countdown"></div>
          `;
            }
        })
        .catch(console.error);
}

fetch('https://wartakita.github.io/bola.github.io/config.json')
    .then(res => res.json())
    .then(config => {
        const ids = Array.isArray(config) ? config : [config];
        ids.forEach(matchParams => {
            const apiUrl = `https://jzb123.zhubaicheng.com/prod-api/match/detail?mid=${matchParams.id}&type=${matchParams.type}&pid=3&langtype=${matchParams.langtype}&zoneId=${matchParams.zoneId}`;
            loadMatchData(apiUrl);
            setInterval(() => updateMatchData(apiUrl), 10000);
        });
    });

let playerInstance = null;

function replaceStreamUrl(url) {
    if (url.includes('https://play1nm.hnyongshun.cn/')) {
        return url.replace(
            'https://play1nm.hnyongshun.cn/',
            'https://2f67a699d818c9e5b640e2eed3bdfe54.v.smtcdns.net/play1nm.hnyongshun.cn/'
        );
    }
    return url;
}

async function loadMatchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('loading').style.display = 'none';
        if (data.code !== "0" || !data.data || !data.data.matchinfo) {
            throw new Error('Invalid API response');
        }
        const match = data.data.matchinfo;
        const container = document.getElementById('container');
        const matchId = match.mid || match.id || 'N/A';

        const wrapper = document.createElement('div');
        const matchTime = new Date(match.matchtime.replace(/-/g, '/'));
        const now = new Date();
        const isEnded = (match.status_up_name || '').toLowerCase().includes('end');
        const statusClass = isEnded ? 'fulltime' : now >= matchTime ? 'live' : 'upcoming';
        const statusLabel = isEnded ? 'FULL TIME' : now >= matchTime ? 'LIVE' : 'UPCOMING';

        wrapper.innerHTML = `
        <div class="match-info">
          <div style="position:absolute;top:10px;left:15px;font-size:0.85rem;color:#666;font-weight:bold;">ID: ${matchId}</div>
          <span class="badge ${statusClass}">${statusLabel}</span>
          <div class="league-name">${match.name_en || match.name}</div>
          <div class="team">
            <img src="${match.hteam_logo}" alt="${match.hteam_name} Logo" />
            <div class="team-name">${match.hteam_name}</div>
          </div>
          <div class="score">${match.score}</div>
          <div class="team">
            <img src="${match.ateam_logo}" alt="${match.ateam_name} Logo" />
            <div class="team-name">${match.ateam_name}</div>
          </div>
          <div class="status-time">
            <div>${match.status_up_name || ''}</div>
            <div>${match.matchtime_en || match.matchtime}</div>
            <div>Time: ${match.time || ''}'</div>
            <div class="countdown"></div>
          </div>
        </div>
        <div class="streams"></div>
      `;
        const streamsDiv = wrapper.querySelector('.streams');
        (match.live_urls || []).forEach(stream => {
            if (stream.status === 1 && stream.url) {
                const streamUrl = replaceStreamUrl(stream.url);
                const btn = document.createElement('button');
                btn.className = 'stream-btn';
                btn.textContent = stream.name || 'Stream';
                btn.addEventListener('click', () => openModal(streamUrl));
                streamsDiv.appendChild(btn);
            }
        });
        container.appendChild(wrapper);
    } catch (error) {
        console.error('Error loading match data:', error);
        document.getElementById('loading').textContent = 'Failed to load matches.';
    }
}

function openModal(streamUrl) {
    const modal = document.getElementById('video-modal');
    modal.style.display = 'flex';
    if (!playerInstance) {
        playerInstance = jwplayer('modal-jwplayer').setup({
            file: streamUrl,
            width: '100%',
            height: '100%',
            autostart: true,
            controls: true,
            aspectratio: '16:9',
            stretching: 'uniform'
        });
    } else {
        playerInstance.load([{
            file: streamUrl
        }]);
        playerInstance.play();
    }
}

function closeModal() {
    const modal = document.getElementById('video-modal');
    modal.style.display = 'none';
    if (playerInstance) {
        playerInstance.pause();
        playerInstance.remove();
        playerInstance = null;
    }
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('video-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
});

window.addEventListener('scroll', () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    scrollTopBtn.style.transform = window.scrollY > 200 ? 'scale(1)' : 'scale(0.5)';
});
