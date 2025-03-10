document.addEventListener("DOMContentLoaded", function() {
    let popunderUrl = "https://www.effectiveratecpm.com/asy7nn44y1?key=fb244c9fcb6018b78e6640d5ee73066f"; // Ganti dengan URL iklan Anda
    let opened = false;

    function openPopunder() {
        if (opened || localStorage.getItem('disablePopunder') === 'true') return;
        opened = true;

        setTimeout(function() {
            let popunder = window.open(popunderUrl, "_blank");
            if (popunder) {
                popunder.blur();
                window.focus();
            }
        }, 500); // Penundaan 500 ms
    }

    document.addEventListener("mouseleave", function(event) {
        if (event.clientY <= 0) {
            openPopunder();
        }
    });

    // Menambahkan tombol untuk menonaktifkan popunder
    let disableButton = document.createElement('button');
    disableButton.textContent = 'Nonaktifkan Popunder';
    disableButton.style.position = 'fixed';
    disableButton.style.bottom = '10px';
    disableButton.style.right = '10px';
    disableButton.style.zIndex = '1000';
    document.body.appendChild(disableButton);

    disableButton.addEventListener('click', function() {
        localStorage.setItem('disablePopunder', 'true');
        disableButton.remove();
    });
});
