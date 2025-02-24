// Fungsi untuk memeriksa apakah halaman di-iframe dan redirect jika ya
function checkIframe() {
    if (window.self !== window.top) {
        window.location.href = 'https://google.com/';
    }
}

// Fungsi untuk memeriksa domain
function checkDomain() {
    const allowedDomain = 'https://zonasportlive.blogspot.com'; // Ganti dengan domain yang diizinkan
    const referrer = document.referrer;

    if (referrer && !referrer.startsWith(allowedDomain)) {
        alert('Akses dilarang. Anda tidak diizinkan untuk mengakses halaman ini dari domain ini.');
        window.location.href = allowedDomain; // Redirect ke domain yang diizinkan
    }
}

// Panggil fungsi checkIframe dan checkDomain saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    checkIframe();
    checkDomain();
});
