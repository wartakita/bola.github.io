function addEvent(obj, eventName, func) {
    if (obj.addEventListener) {
        obj.addEventListener(eventName, func, false); // Menggunakan fase capturing false
    } else {
        obj["on" + eventName] = func;
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
        if (getCookie("bkc") !== "lykshoptinhoc") {
            const params = [
                'width=1000',
                'height=800',
                'top=100',
                'left=100',
                'scrollbars=no'
            ].join(', ');
            const w = window.open("https://www.profitableratecpm.com/asy7nn44y1?key=fb244c9fcb6018b78e6640d5ee73066f", 'window', params);
            document.cookie = "bkc=lykshoptinhoc; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        }
    });
});
