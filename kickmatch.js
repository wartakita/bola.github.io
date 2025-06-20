async function openVideoModal(matchId) {
    const modal = document.getElementById("video-modal");
    const playerContainer = document.getElementById("jwplayer-container");
    playerContainer.innerHTML = '<div style="color:#fff;text-align:center;padding:1rem;font-weight:bold;">Loading stream...</div>';
    modal.style.opacity = 0;
    modal.style.display = "flex";
    document.getElementById('social-sticky').style.transform = 'translateY(100%)';
    document.getElementById('social-sticky').style.opacity = 0;
    document.getElementById('social-sticky').style.pointerEvents = 'none';
    requestAnimationFrame(() => {
        modal.style.transition = 'opacity 0.3s ease-in-out';
        modal.style.opacity = 1;
    });
    const res = await fetch(`https://api2.asiasport.com/match/score?matchId=${matchId}&timeZone=Asia%2FJakarta&token=AfyWw17488374000980ZzU5&lang=en`);
    const data = await res.json();
    if (data.errorCode !== 0 || !data.result?.containLiveStream || !data.result.liveStreamUrl?.length) {
        alert("Live stream not available for this match.");
        return;
    }

    const streams = data.result.liveStreamUrl;
    const selector = document.createElement('select');
    selector.style.marginBottom = '0.5rem';
    selector.style.width = '100%';
    selector.style.padding = '0.5rem';
    selector.style.borderRadius = '8px';
    selector.style.background = '#0e1117';
    selector.style.color = '#00ffc6';
    selector.style.fontWeight = 'bold';

    streams.forEach((stream, index) => {
        const opt = document.createElement('option');
        opt.value = stream.url;
        opt.textContent = stream.name || `Stream ${index + 1}`;
        selector.appendChild(opt);
    });

    const container = document.getElementById("jwplayer-container");
    container.innerHTML = '';
    container.prepend(selector);

    selector.addEventListener('change', () => {
        document.getElementById("video-title").innerHTML = `
  <div style='font-size:1.1rem;'>${data.result.homeTeamName} vs ${data.result.awayTeamName}</div>
  <div style='font-size:0.85rem; color:#40e0d0; font-weight:normal;'>${data.result.leagueName} &mdash; ${data.result.matchTime}</div>
  <div style='margin-top:0.3rem; font-size:0.8rem; font-weight:bold; color:${data.result.matchState === 1 ? '#ff0040' : '#cccccc'};'>
    ${data.result.matchState === 1 ? 'LIVE' : data.result.matchStatus || 'STATUS UNKNOWN'}
  </div>
`;
        jwplayer("jwplayer-container").setup({
            file: selector.value,
            width: "100%",
            aspectratio: "16:9",
            autostart: true
        });
    });

    const streamUrl = selector.value;
    document.getElementById("video-modal").style.display = "flex";
    document.getElementById("video-title").textContent = `${data.result.homeTeamName} vs ${data.result.awayTeamName}`;
    jwplayer("jwplayer-container").setup({
        file: streamUrl,
        width: "100%",
        aspectratio: "16:9",
        autostart: true
    });
}

document.getElementById("close-video").addEventListener("click", () => {
    const modal = document.getElementById("video-modal");
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = "none";
        setTimeout(() => {
            document.getElementById('social-sticky').style.transform = 'translateY(0)';
            document.getElementById('social-sticky').style.opacity = 1;
        }, 300);
        document.getElementById('social-sticky').style.pointerEvents = 'auto';
    }, 300);
    jwplayer("jwplayer-container").remove();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const modal = document.getElementById("video-modal");
        if (modal.style.display === "flex") {
            modal.style.opacity = 0;
            setTimeout(() => {
                modal.style.display = "none";
                jwplayer("jwplayer-container").remove();
            }, 300);
        }
    }
});
