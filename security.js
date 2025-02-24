// Fungsi untuk memeriksa domain
function checkDomain() {
    const allowedDomain = 'https://zonasportlive.blogspot.com/'; // Ganti dengan domain yang diizinkan
    const referrer = document.referrer;

    if (referrer && !referrer.startsWith(allowedDomain)) {
        alert('Akses dilarang. Anda tidak diizinkan untuk mengakses halaman ini dari domain ini.');
        window.location.href = allowedDomain; // Redirect ke domain yang diizinkan
    }
}

// Fungsi untuk mencegah embedding dalam iframe
function preventEmbed() {
    if (window.top !== window.self) {
        alert('Akses dilarang. Halaman ini tidak dapat di-embed atau di-iframe.');
        window.top.location = window.self.location;
    }
}

// Fungsi untuk memeriksa apakah halaman sedang di-iframe dan redirect jika ya
function checkIfIframed() {
    if (window.self !== window.top) {
        window.location.href = 'https://google.com/';
    }
}

// Panggil fungsi checkDomain dan preventEmbed saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    checkDomain();
    preventEmbed();
});
