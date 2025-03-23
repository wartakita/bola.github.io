// Fungsi untuk memeriksa apakah URL ada dalam daftar URL yang diblokir
function isBlockedUrl(referrer, blockedUrls) {
    for (var i = 0; i < blockedUrls.length; i++) {
        if (referrer.indexOf(blockedUrls[i]) !== -1) {
            return true;
        }
    }
    return false;
}

// Fungsi untuk mengarahkan pengguna ke URL baru
function redirectToUrl(url) {
    console.log('Redirecting to: ' + url);
    window.location.href = url;
}

// Daftar URL yang diblokir
var blockedUrls = [
    'https://goldgen2021.blogspot.com',
    'https://allengland2025.blogspot.com'
];

// URL tujuan jika pengunjung datang dari URL yang diblokir
var forwardingUrl = 'https://pecintaminton.blogspot.com';

// URL yang ingin diblokir secara spesifik (opsional)
var specificBlockedUrl = '';

// Periksa apakah pengunjung datang dari URL yang diblokir secara spesifik
if (document.referrer === specificBlockedUrl) {
    redirectToUrl(forwardingUrl);
}

// Periksa apakah pengunjung datang dari salah satu URL yang diblokir dalam daftar
if (isBlockedUrl(document.referrer, blockedUrls)) {
    redirectToUrl('https://pecintaminton.blogspot.com/');
}
