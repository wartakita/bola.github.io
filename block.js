// Mendapatkan domain saat ini
var currentDomain = window.location.hostname;

// Daftar domain yang diizinkan
var allowedDomains = ["https://minton1.digitalgadgetku.com", "minton1.digitalgadgetku.com"];

// Memeriksa apakah domain saat ini ada dalam daftar domain yang diizinkan
if (allowedDomains.indexOf(currentDomain) === -1) {
    // Jika domain tidak diizinkan, arahkan pengguna ke domain utama
    window.location.href = "https://minton1.digitalgadgetku.com";
}
