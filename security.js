// Fungsi untuk memeriksa domain
function checkDomain() {
    const allowedDomain = 'https://zonasportlive.blogspot.com'; // Ganti dengan domain yang diizinkan
    const referrer = document.referrer;

    if (referrer && !referrer.startsWith(allowedDomain)) {
        alert('Akses dilarang. Anda tidak diizinkan untuk mengakses halaman ini dari domain ini.');
        window.location.href = allowedDomain; // Redirect ke domain yang diizinkan
    }
}

// Panggil fungsi checkDomain saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', checkDomain);
