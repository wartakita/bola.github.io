document.getElementById("logoLigaOption").addEventListener("change", function() {
    if (this.value === "url") {
        document.getElementById("logoLigaInput").style.display = "block";
        document.getElementById("logoLigaFile").style.display = "none";
    } else {
        document.getElementById("logoLigaInput").style.display = "none";
        document.getElementById("logoLigaFile").style.display = "block";
    }
});

document.getElementById("logoTimAOption").addEventListener("change", function() {
    if (this.value === "url") {
        document.getElementById("logoTimAInput").style.display = "block";
        document.getElementById("logoTimAFile").style.display = "none";
    } else {
        document.getElementById("logoTimAInput").style.display = "none";
        document.getElementById("logoTimAFile").style.display = "block";
    }
});

document.getElementById("logoTimBOption").addEventListener("change", function() {
    if (this.value === "url") {
        document.getElementById("logoTimBInput").style.display = "block";
        document.getElementById("logoTimBFile").style.display = "none";
    } else {
        document.getElementById("logoTimBInput").style.display = "none";
        document.getElementById("logoTimBFile").style.display = "block";
    }
});

document.getElementById("bgOption").addEventListener("change", function() {
    if (this.value === "custom") {
        document.getElementById("bgInput").style.display = "block";
    } else {
        document.getElementById("bgInput").style.display = "none";
    }
});

function updateThumbnail() {
    document.getElementById("namaLiga").innerText = document.getElementById("namaLigaInput").value || "Nama Liga";
    document.getElementById("namaA").innerText = document.getElementById("namaTimA").value || "Tim A";
    document.getElementById("namaB").innerText = document.getElementById("namaTimB").value || "Tim B";

    const tanggalInput = document.getElementById("tanggalInput").value;
    if (tanggalInput) {
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        const formattedDate = new Date(tanggalInput).toLocaleDateString('id-ID', options);
        document.getElementById("tanggalPertandingan").innerText = formattedDate;
    } else {
        document.getElementById("tanggalPertandingan").innerText = "20 Maret 2025";
    }

    document.getElementById("waktuKickoff").innerText = document.getElementById("waktuInput").value || "19:00";

    let bgUrl = document.getElementById("bgInput").value;
    if (document.getElementById("bgOption").value === "custom" && bgUrl) {
        document.getElementById("thumbnail").style.backgroundImage = `url('${bgUrl}')`;
    } else {
        document.getElementById("thumbnail").style.backgroundImage = "url('https://i.imgur.com/dltikbe.jpeg')";
    }

    // Update warna teks
    document.getElementById("namaLiga").style.color = document.getElementById("textColor").value;
    document.getElementById("namaA").style.color = document.getElementById("textColor").value;
    document.getElementById("namaB").style.color = document.getElementById("textColor").value;
    document.getElementById("tanggalPertandingan").style.color = document.getElementById("textColor").value;
    document.getElementById("waktuKickoff").style.color = document.getElementById("textColor").value;

    // Update warna latar belakang
    document.getElementById("thumbnail").style.backgroundColor = document.getElementById("bgColor").value;

    // Update font
    const font = document.getElementById("font").value;
    document.getElementById("namaLiga").style.fontFamily = font;
    document.getElementById("namaA").style.fontFamily = font;
    document.getElementById("namaB").style.fontFamily = font;
    document.getElementById("tanggalPertandingan").style.fontFamily = font;
    document.getElementById("waktuKickoff").style.fontFamily = font;

    // Update bold font
    const boldFont = document.getElementById("boldFont").checked;
    document.getElementById("namaLiga").style.fontWeight = boldFont ? 'bold' : 'normal';
    document.getElementById("namaA").style.fontWeight = boldFont ? 'bold' : 'normal';
    document.getElementById("namaB").style.fontWeight = boldFont ? 'bold' : 'normal';
    document.getElementById("tanggalPertandingan").style.fontWeight = boldFont ? 'bold' : 'normal';
    document.getElementById("waktuKickoff").style.fontWeight = boldFont ? 'bold' : 'normal';

    // Update ukuran logo liga
    const logoLigaSize = document.getElementById("logoLigaSize").value;
    document.getElementById("logoLiga").style.width = `${logoLigaSize}px`;
    document.getElementById("logoLiga").style.height = `${logoLigaSize}px`;

    // Update ukuran thumbnail
    const thumbnailWidth = document.getElementById("thumbnailWidth").value;
    const thumbnailHeight = document.getElementById("thumbnailHeight").value;
    document.getElementById("thumbnail").style.width = `${thumbnailWidth}px`;
    document.getElementById("thumbnail").style.height = `${thumbnailHeight}px`;

    // Update logo liga
    const logoLigaOption = document.getElementById("logoLigaOption").value;
    if (logoLigaOption === "url") {
        document.getElementById("logoLiga").src = document.getElementById("logoLigaInput").value || "https://via.placeholder.com/100";
    } else {
        const logoLigaFile = document.getElementById("logoLigaFile").files[0];
        if (logoLigaFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("logoLiga").src = e.target.result;
            };
            reader.readAsDataURL(logoLigaFile);
        } else {
            document.getElementById("logoLiga").src = "https://via.placeholder.com/100";
        }
    }

    // Update logo tim A
    const logoTimAOption = document.getElementById("logoTimAOption").value;
    if (logoTimAOption === "url") {
        document.getElementById("logoTimA").src = document.getElementById("logoTimAInput").value || "https://via.placeholder.com/150";
    } else {
        const logoTimAFile = document.getElementById("logoTimAFile").files[0];
        if (logoTimAFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("logoTimA").src = e.target.result;
            };
            reader.readAsDataURL(logoTimAFile);
        } else {
            document.getElementById("logoTimA").src = "https://via.placeholder.com/150";
        }
    }

    // Update logo tim B
    const logoTimBOption = document.getElementById("logoTimBOption").value;
    if (logoTimBOption === "url") {
        document.getElementById("logoTimB").src = document.getElementById("logoTimBInput").value || "https://via.placeholder.com/150";
    } else {
        const logoTimBFile = document.getElementById("logoTimBFile").files[0];
        if (logoTimBFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("logoTimB").src = e.target.result;
            };
            reader.readAsDataURL(logoTimBFile);
        } else {
            document.getElementById("logoTimB").src = "https://via.placeholder.com/150";
        }
    }
}

function downloadThumbnail() {
    const thumbnail = document.querySelector("#thumbnail");
    const thumbnailWidth = parseInt(document.getElementById("thumbnailWidth").value);
    const thumbnailHeight = parseInt(document.getElementById("thumbnailHeight").value);

    html2canvas(thumbnail, {
        useCORS: true,
        backgroundColor: null,
        scale: 2,
        width: thumbnailWidth,
        height: thumbnailHeight
    }).then(canvas => {
        let link = document.createElement("a");
        const namaTimA = document.getElementById("namaTimA").value || "TimA";
        link.href = canvas.toDataURL("image/png");
        link.download = `${namaTimA}.png`;
        link.click();
    }).catch(error => {
        console.error("Error generating thumbnail:", error);
        alert("Gagal mengunduh thumbnail. Pastikan gambar latar belakang memiliki header CORS yang benar atau gunakan gambar lokal.");
    });
}
