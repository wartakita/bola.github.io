// Configurations
const apiToken = "Kkzu11751361966912ocUlX";
const apiBaseUrlMatches = "https://api2.asiasport.com/match/getMatchListv4";
const apiBaseUrlScore = "https://api2.asiasport.com/match/score";
const logoBaseUrl = "https://asset.asiasport.com/";
const adsUrl =
    "https://www.profitableratecpm.com/asy7nn44y1?key=fb244c9fcb6018b78e6640d5ee73066f";
const timeZone = "Asia/Jakarta";

// State
let matchesData = [];
let leaguesSet = new Set();
let filteredMatches = [];
let updateInterval = null;

// Player instance
let jwplayerInstance = null;

// Helper: Show notifications
function notify(message, duration = 3000) {
    const cont = document.getElementById("notificationContainer");
    const notif = document.createElement("div");
    notif.className =
        "fadeInUp bg-sky-600 text-white px-4 py-2 mb-2 rounded shadow-md select-none cursor-default";
    notif.textContent = message;
    cont.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, duration);
}

// Scroll to top button behavior
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
scrollTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Domain protection
function checkDomain() {
    const allowedDomain =
        "goalhubtv.blogspot.com"; // <-- Ganti dengan domain anda yang valid tanpa www dan https.
    if (
        window.location.hostname !== allowedDomain &&
        window.location.hostname !== "www." + allowedDomain
    ) {
        notify(
            "Domain not allowed. Redirecting to Google in 10 seconds...",
            10000
        );
        setTimeout(() => {
            window.location.href = "https://google.com";
        }, 10000);
        return false;
    }
    return true;
}

// Date helper for default filter date
function getTodayDateForInput() {
    const d = new Date();
    // Format yyyy-mm-dd
    return d.toISOString().split("T")[0];
}

// Fetch matches list from API
async function fetchMatches(date = "") {
    try {
        const url = new URL(apiBaseUrlMatches);
        url.searchParams.set("leagueIdList", "");
        url.searchParams.set("matchDate", date || getTodayDateForInput());
        url.searchParams.set("liveOnly", "false");
        url.searchParams.set("lang", "en");
        url.searchParams.set("timeZone", timeZone);
        url.searchParams.set("token", apiToken);

        const response = await fetch(url);
        const data = await response.json();

        if (data.errorCode !== 0) {
            notify("API Error: " + data.message);
            return;
        }

        matchesData = [];
        leaguesSet.clear();

        if (data.result && data.result.leagueMatchList) {
            for (const league of data.result.leagueMatchList) {
                leaguesSet.add(league.leagueName);
                for (const match of league.matchList) {
                    matchesData.push({
                        leagueId: league.leagueId,
                        leagueName: league.leagueName,
                        leagueLogo: league.logo ? logoBaseUrl + league.logo : null,
                        ...match,
                        country: league.country,
                        countryKey: league.countryKey,
                        leagueKey: league.leagueKey,
                    });
                }
            }
        }

        populateLeagueFilter();
        filterAndRenderMatches();
    } catch (error) {
        notify("Failed to fetch matches: " + error.message);
    }
}

// Populate league filter options from leaguesSet
function populateLeagueFilter() {
    const leagueFilter = document.getElementById("leagueFilter");
    leagueFilter.innerHTML = '<option value="">All Leagues</option>';
    Array.from(leaguesSet)
        .sort()
        .forEach((league) => {
            const option = document.createElement("option");
            option.value = league;
            option.innerText = league;
            leagueFilter.appendChild(option);
        });
}

// Filter matches based on inputs
function filterAndRenderMatches() {
    const dateVal = document.getElementById("dateFilter").value;
    const leagueVal = document.getElementById("leagueFilter").value;
    const searchVal = document.getElementById("teamSearch").value
        .toLowerCase()
        .trim();
    const statusVal = document.getElementById("statusFilter").value;

    filteredMatches = matchesData.filter((m) => {
        // Filter date
        if (dateVal && m.matchDate !== dateVal) return false;
        // Filter league
        if (leagueVal && m.leagueName !== leagueVal) return false;
        // Filter status
        if (statusVal) {
            if (statusVal === "LIVE" && !m.isLive) return false;
            if (statusVal === "FT" && m.matchStatus !== "FT") return false;
            if (
                statusVal === "NS" &&
                (m.matchStatus === "FT" || m.isLive)
            )
                return false;
        }
        // Filter team search
        if (
            searchVal &&
            !m.opponents.some((t) => t.name.toLowerCase().includes(searchVal))
        )
            return false;

        return true;
    });

    renderMatches(filteredMatches);
}

// Render match cards
function renderMatches(matches) {
    const container = document.getElementById("matchesSection");
    container.innerHTML = "";

    if (!matches.length) {
        container.innerHTML =
            '<p class="text-center text-gray-400 col-span-full py-10">No matches found.</p>';
        return;
    }

    for (const match of matches) {
        const card = document.createElement("article");
        card.className =
            "bg-gray-800 rounded-md p-4 shadow-md flex flex-col hover:shadow-lg transition-shadow cursor-pointer";

        // League header
        const leagueLogo = match.leagueLogo ?
            `<img src="${match.leagueLogo}" alt="Logo ${match.leagueName}" class="w-10 h-10 object-contain rounded-sm" loading="lazy" />` :
            "";

        // Time status
        const statusColor = match.matchStatus === "FT" ?
            "text-green-400" :
            match.isLive ?
            "text-red-400" :
            "text-gray-400";

        const opponentsHtml = match.opponents
            .map(
                (team) => `
          <div class="flex items-center gap-3">
            <img src="${logoBaseUrl + team.logo}" alt="Logo ${team.name}" class="w-8 h-8 rounded-sm object-contain" loading="lazy" />
            <span class="truncate">${team.name}</span>
            <span class="font-bold text-lg ml-auto">${team.score !== null ? team.score : "-"}</span>
          </div>
        `
            )
            .join("");

        card.innerHTML = `
        <header class="flex items-center gap-3 mb-3 border-b border-gray-700 pb-2">
          ${leagueLogo}
          <h2 class="font-semibold text-lg truncate">${match.leagueName}</h2>
          <time class="ml-auto text-sm font-mono ${statusColor}" datetime="${match.matchDate}T${match.matchTime}">
            ${match.matchStatus}
          </time>
        </header>

        <section class="flex flex-col gap-4 mb-4">${opponentsHtml}</section>

        <button class="btn-watch bg-sky-500 hover:bg-sky-600 rounded-md py-2 font-bold text-white transition-colors" data-match-id="${match.matchId}">
          ▶️ Nonton
        </button>
      `;

        // Open popup player on watch button click with ad tab
        card.querySelector(".btn-watch").onclick = () => onWatchClick(match.matchId);

        container.appendChild(card);
    }
}

// Handle watch button click: open ad tab, then popup player, then on close popup open ad tab again
async function onWatchClick(matchId) {
    // Open ad in new tab
    const adTab = window.open(adsUrl, "_blank");

    // Wait a bit for user interaction with ad (simulate 5 secs)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Fetch streaming URL and play in popup
    const streamUrl = await fetchStreamUrl(matchId);
    if (!streamUrl) {
        notify("No live stream available for this match.");
        if (adTab) adTab.close();
        return;
    }

    if (adTab) adTab.focus();

    openPlayerPopup(streamUrl, matchId);
}

// Fetch stream URL from API for matchId
async function fetchStreamUrl(matchId) {
    try {
        const url = new URL(apiBaseUrlScore);
        url.searchParams.set("matchId", matchId);
        url.searchParams.set("timeZone", timeZone);
        url.searchParams.set("token", apiToken);
        url.searchParams.set("lang", "en");

        const res = await fetch(url);
        const json = await res.json();

        if (json.errorCode !== 0 || !json.result) return null;

        if (!json.result.containLiveStream || !json.result.liveStreamUrl?.length)
            return null;

        // Return first available stream url with state 2 (stream ready)
        const stream = json.result.liveStreamUrl.find((s) => s.state === 2);
        return stream ? stream.url : null;
    } catch (e) {
        return null;
    }
}

// Open popup player with JWPlayer
function openPlayerPopup(streamUrl, matchId) {
    const modal = document.getElementById("playerModal");
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");

    if (jwplayerInstance) {
        jwplayerInstance.remove();
        jwplayerInstance = null;
    }

    jwplayerInstance = jwplayer("jwplayerContainer");
    jwplayerInstance.setup({
        file: streamUrl,
        width: "100%",
        height: "100%",
        autostart: true,
        controls: true,
        aspectratio: "16:9",
        mute: false,
    });

    // Close button behavior
    const closeBtn = document.getElementById("closePlayerBtn");
    closeBtn.onclick = () => {
        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");

        jwplayerInstance.remove();
        jwplayerInstance = null;

        // Open ad tab again on close
        window.open(adsUrl, "_blank");
    };
}

// Initialize page and set filters
function initApp() {
    // Check domain protection first
    if (!checkDomain()) {
        // Stop app initialization if domain not allowed
        return;
    }

    // Initialize filters
    const dateFilter = document.getElementById("dateFilter");
    dateFilter.value = getTodayDateForInput();
    dateFilter.min = getTodayDateForInput();
    dateFilter.addEventListener("change", () => {
        fetchMatches(dateFilter.value);
    });

    document.getElementById("leagueFilter").addEventListener("change", filterAndRenderMatches);
    document.getElementById("teamSearch").addEventListener("input", filterAndRenderMatches);
    document.getElementById("statusFilter").addEventListener("change", filterAndRenderMatches);

    // Initial fetch of matches for today
    fetchMatches();

    // Set interval to update matches every 30 seconds (polling)
    updateInterval = setInterval(() => {
        fetchMatches(dateFilter.value);
    }, 30000);

    // Midnight check for daily refresh
    checkMidnightRefresh();
}

// Check midnight 00:00 WIB to refresh page data automatically
function checkMidnightRefresh() {
    const now = new Date();
    const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0
    );
    const timeoutMs = nextMidnight.getTime() - now.getTime();

    setTimeout(() => {
        // Reload data forcibly after midnight
        fetchMatches(document.getElementById("dateFilter").value);
        // Reset midnight check for next day
        checkMidnightRefresh();
    }, timeoutMs);
}

// Social media sharing function
function shareSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out live football scores & streaming on GoalHub!");
    let shareUrl = "";

    switch (platform) {
        case "twitter":
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
        case "whatsapp":
            shareUrl = `https://wa.me/?text=${text}%20${url}`;
            break;
        case "telegram":
            shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
            break;
        case "facebook":
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        default:
            return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
}

// Initialize app on DOM ready
document.addEventListener("DOMContentLoaded", initApp);
