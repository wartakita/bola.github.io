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

document.addEventListener('click', function(e) {
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
