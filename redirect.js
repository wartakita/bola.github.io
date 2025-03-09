async function getFinalUrl(url) {
    try {
        // Mengirim permintaan fetch dengan redirect: 'follow'
        const response = await fetch(url, {
            redirect: 'follow'
        });

        // URL akhir setelah semua redirect
        const finalUrl = response.url;
        return finalUrl;
    } catch (error) {
        return `Terjadi kesalahan: ${error.message}`;
    }
}

// Contoh penggunaan
const url = 'https://geo.digitalgadgetku.com/'; // Ganti dengan URL yang ingin Anda cek
getFinalUrl(url).then(finalUrl => {
    console.log("URL Akhir:", finalUrl);
});
