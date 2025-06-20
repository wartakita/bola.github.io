window.onload = function() {
    alert("Dilarang mengakses JavaScript!");
    // Pengalihan halaman sebagai bentuk pencegahan
    window.location.href = "https://example.com/dilarang";
};

let allMatchesData = null;

function getStatusCategory(matchStatus, isLive) {
    if (isLive) return "live";
    const statusLower = (matchStatus ?? "").toLowerCase();
    if (statusLower.includes("ft") || statusLower.includes("finished") || statusLower.includes("final")) {
        return "completed";
    }
    if (statusLower.includes("upcoming") || statusLower.includes("not started") || statusLower.includes("scheduled") || statusLower === "") {
        return "upcoming";
    }
    return "upcoming";
}

async function fetchLiveMatches(date = null) {
    const main = document.querySelector("main");
    const loading = document.getElementById("loading");

    try {
        const queryDate = date || new Date().toISOString().split("T")[0];

        const response = await fetch(`https://api2.asiasport.com/match/getMatchListv4?leagueIdList=&matchDate=${queryDate}&liveOnly=false&lang=en&timeZone=Asia%2FJakarta&token=AfyWw17488374000980ZzU5`);
        const data = await response.json();

        loading?.remove();
        if (data?.errorCode !== 0 || !data.result?.leagueMatchList || data.result.leagueMatchList.length === 0) {
            main.innerHTML = '<div style="text-align:center; padding:2rem; color:#ff5555; font-weight:bold;">No matches found.</div>';
            return;
        }

        allMatchesData = data.result.leagueMatchList;

        const currentLeague = document.getElementById("filter-league").value;
        populateLeagueFilter();
        document.getElementById("filter-league").value = currentLeague;
        applyFiltersAndSearch();
    } catch (error) {
        loading?.remove();
        main.innerHTML = '<div style="text-align:center; padding:2rem; color:#ff5555; font-weight:bold;">Failed to load matches. Please try again later.</div>';
    }
}

function populateLeagueFilter() {
    const leagueSelect = document.getElementById("filter-league");
    leagueSelect.innerHTML = '<option value="all">Semua Liga</option>';
    const leagues = allMatchesData.map(league => ({
        id: league.leagueId,
        name: league.leagueName
    }));
    const uniqueLeagues = leagues.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i);

    uniqueLeagues.forEach(league => {
        const option = document.createElement("option");
        option.value = league.id;
        option.textContent = league.name;
        leagueSelect.appendChild(option);
    });
}

function applyFiltersAndSearch() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const filterDate = document.getElementById("filter-date").value;
    const filterLeague = document.getElementById("filter-league").value;
    const filterStatus = document.getElementById("filter-status").value;
    const searchTeam = document.getElementById("search-team").value.toLowerCase();

    const filteredLeagues = filterLeague === "all" ?
        allMatchesData :
        allMatchesData.filter(league => league.leagueId.toString() === filterLeague);

    if (filteredLeagues.length === 0) {
        main.innerHTML = '<div style="text-align:center; padding:2rem; color:#ff5555; font-weight:bold;">No matches found for selected league.</div>';
        return;
    }

    let totalMatchesShown = 0;

    filteredLeagues.forEach(league => {
        const filteredMatches = league.matchList.filter(match => {
            const isLive = match.isLive;
            const statusCategory = getStatusCategory(match.matchStatus, isLive);

            if (filterStatus !== "all" && statusCategory !== filterStatus) return false;

            if (searchTeam) {
                const team1Name = match.opponents[0].name.toLowerCase();
                const team2Name = match.opponents[1].name.toLowerCase();
                return team1Name.includes(searchTeam) || team2Name.includes(searchTeam);
            }
            return true;
        });

        if (filteredMatches.length === 0) return;

        totalMatchesShown += filteredMatches.length;

        const section = document.createElement("section");
        section.className = "league";

        section.innerHTML = `
          <div class="league-header">
            <img class="league-logo" src="https://asset.asiasport.com/${league.logo}" alt="${league.leagueName}" />
            <div class="league-name">${league.leagueName}</div>
          </div>
          <div class="sub-league">${league.subLeagueName ?? league.roundEn ?? ""}</div>
          <div class="match-list"></div>
        `;

        const list = section.querySelector(".match-list");

        filteredMatches.forEach(match => {
            const [team1, team2] = match.opponents;
            const card = document.createElement("div");
            card.className = "match-card";
            const canWatch = match.containLiveStream;
            card.innerHTML = `
            <div class="team">
              <img class="team-logo" src="https://asset.asiasport.com/${team1.logo}" alt="${team1.name}" />
              <div class="team-name">${team1.name}</div>
            </div>
            <div class="team">
              <img class="team-logo" src="https://asset.asiasport.com/${team2.logo}" alt="${team2.name}" />
              <div class="team-name">${team2.name}</div>
            </div>
            <div class="score">${team1.score || "-"} - ${team2.score || "-"}</div>
            <div class="match-time-status">${match.matchStatus}</div>
            <div class="badge-live" style="display:${match.isLive ? 'block' : 'none'}">LIVE</div>
            ${canWatch ? `<button onclick=\"openVideoModal(${match.matchId})\" style=\"margin-top:0.5rem; background:#00ffc6; color:#000; border:none; padding:0.3rem 0.6rem; border-radius:6px; font-weight:bold; cursor:pointer;\">Tonton</button>` : ''}`;
            list.appendChild(card);
        });

        main.appendChild(section);
    });

    if (totalMatchesShown === 0) {
        main.innerHTML = '<div style="text-align:center; padding:2rem; color:#ff5555; font-weight:bold;">No matches found for selected filters.</div>';
    }
}

document.getElementById("filter-date").addEventListener("change", (e) => {
    const chosenDate = new Date(e.target.value);
    const isToday = chosenDate.toDateString() === new Date().toDateString();
    document.getElementById("current-date-display").textContent = isToday ?
        `Hari ini - ${chosenDate.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}` :
        chosenDate.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    const dateVal = e.target.value;
    const main = document.querySelector("main");
    main.innerHTML = '<div id="loading" style="text-align:center; padding:2rem; color:#00ffea; font-weight:bold;">Loading matches...</div>';
    fetchLiveMatches(dateVal);
});

["filter-league", "filter-status", "search-team"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => {
        applyFiltersAndSearch();
    });
});

const today = new Date();
document.getElementById("filter-date").value = today.toISOString().split("T")[0];
const isToday = today.toDateString() === new Date().toDateString();
document.getElementById("current-date-display").textContent = isToday ?
    `Hari ini - ${today.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}` :
    today.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

fetchLiveMatches(document.getElementById("filter-date").value);
// Realtime live update every 3 seconds
setInterval(() => {
    const currentDate = document.getElementById("filter-date").value;
    fetchLiveMatches(currentDate);
}, 3000);
