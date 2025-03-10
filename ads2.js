document.addEventListener("DOMContentLoaded", function() {
    let popunderUrl = "https://www.effectiveratecpm.com/asy7nn44y1?key=fb244c9fcb6018b78e6640d5ee73066f"; // Ganti dengan URL iklan Anda
    let opened = false;

    function openPopunder() {
        if (opened) return;
        opened = true;

        let popunder = window.open(popunderUrl, "_blank");
        if (popunder) {
            popunder.blur();
            window.focus();
        }
    }

    document.addEventListener("click", openPopunder, {
        once: true
    });
    document.addEventListener("touchstart", openPopunder, {
        once: true
    });
});
