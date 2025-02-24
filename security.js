// Fungsi untuk memeriksa apakah halaman sedang di-iframe dan redirect jika ya
function checkIfIframed() {
    if (window.self !== window.top) {
        window.location.href = 'https://google.com/';
    }
}

// Panggil fungsi checkIfIframed saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', checkIfIframed);
