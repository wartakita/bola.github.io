document.addEventListener("DOMContentLoaded", function() {
    const serverOptions = document.querySelectorAll(".DagPlayOpt");
    const iframe = document.querySelector("#pembed iframe");
    const playerLoad = document.querySelector(".playerload");

    // Function to get URL parameters
    function getParameterByName(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    // Decode Base64 encoded string
    function decodeBase64(encoded) {
        try {
            return atob(encoded);
        } catch (e) {
            console.error("Invalid Base64 string", e);
            return null;
        }
    }

    // Get the embed parameter and split into an array if available (Base64 encoded)
    const embedParam = getParameterByName('embed');
    let embedURLs = [];
    if (embedParam) {
        const decodedEmbed = decodeBase64(embedParam); // Decode the Base64
        if (decodedEmbed) {
            embedURLs = decodedEmbed.split(','); // Split by comma
        }
    }

    // Assign the decoded embed URLs to server options if available
    serverOptions.forEach((option, index) => {
        if (embedURLs[index]) {
            option.dataset.embed = embedURLs[index];
        }
    });

    // Add click event to each server option
    serverOptions.forEach(option => {
        option.addEventListener("click", function() {
            const embedURL = option.dataset.embed;
            if (!embedURL) {
                alert("URL video tidak tersedia.");
                return;
            }
            playerLoad.style.display = "block"; // Show loading animation
            iframe.src = embedURL;

            iframe.onload = function() {
                playerLoad.style.display = "none"; // Hide loading animation when iframe loads
            };

            serverOptions.forEach(opt => opt.classList.remove("on"));
            option.classList.add("on");
        });
    });

    // Trigger click on the first server option
    if (embedURLs.length > 0) {
        serverOptions[0].click();
    }
});
