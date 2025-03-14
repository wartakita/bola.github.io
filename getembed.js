var url = window.location.search.slice(5);

// Fungsi untuk memeriksa apakah URL memiliki ekstensi .m3u8
function isHLS(url) {
    return url.toLowerCase().endsWith('.m3u8');
}

// Inisialisasi pemutar video
if (isHLS(url)) {
    let player = new window.Player({
        id: 'mse',
        isLive: true,
        playsinline: true,
        url: url,
        autoplay: true,
        height: window.innerHeight,
        width: window.innerWidth,
        plugins: [window.HlsPlayer]
    });
} else {
    let player = new window.Player({
        id: 'mse',
        isLive: true,
        playsinline: true,
        url: url,
        autoplay: true,
        height: window.innerHeight,
        width: window.innerWidth,
        plugins: [window.FlvPlayer]
    });
}
