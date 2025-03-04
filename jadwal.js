const dataUrl = 'https://wartakita.github.io/bola.github.io/allmatches.json';
let scheduleData = [];
const streamLink = "https://bit.ly/zonasportlive";

async function loadSchedule() {
    try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
            throw new Error('Gagal mengambil data');
        }
        scheduleData = await response.json();
        populateLeagueFilter(scheduleData);
        displaySchedule(scheduleData);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

function populateLeagueFilter(data) {
    const leagueFilter = document.getElementById("leagueFilter");
    const leagues = [...new Set(data.map(match => match.league))];

    leagues.forEach(league => {
        const option = document.createElement("option");
        option.value = league;
        option.textContent = league;
        leagueFilter.appendChild(option);
    });
}

function displaySchedule(data) {
    const tableBody = document.getElementById('scheduleTable');
    const textFormatDiv = document.getElementById('textFormat');
    const jsonFormatDiv = document.getElementById('jsonFormat');

    tableBody.innerHTML = "";
    textFormatDiv.innerHTML = "";
    jsonFormatDiv.innerHTML = "";

    const jsonData = [];

    data.forEach((match, index) => {
        const row = `<tr>
                    <td>${match.date}</td>
                    <td>${match.time}</td>
                    <td>${match.teams}</td>
                    <td>${match.league}</td>
                </tr>`;
        tableBody.innerHTML += row;

        const textEntry = `${match.teams}
Kompetisi: ${match.league}
Tanggal: ${match.date}
Waktu: ${match.time}
Link: ${streamLink}
----------------------------------\n`;
        textFormatDiv.innerText += textEntry;

        jsonData.push({
            videoId: `${index + 1}`.padStart(5, '0'),
            m3u8Url: "",
            iframeURL: "",
            date: match.date,
            time: match.time,
            teams: match.teams,
            league: match.league
        });
    });

    jsonFormatDiv.innerText = JSON.stringify(jsonData, null, 2);
}

function filterSchedule() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const dateFilter = document.getElementById('dateFilter').value;
    const leagueFilter = document.getElementById('leagueFilter').value;
    const filteredData = scheduleData.filter(match => {
        const matchTeams = match.teams.toLowerCase();
        const matchLeague = match.league.toLowerCase();
        const matchDate = match.date;

        let searchMatch = matchTeams.includes(searchInput) || matchLeague.includes(searchInput);
        let dateMatch = dateFilter ? matchDate === dateFilter : true;
        let leagueMatch = leagueFilter ? matchLeague === leagueFilter.toLowerCase() : true;

        console.log(`Search Match: ${searchMatch}, Date Match: ${dateMatch}, League Match: ${leagueMatch}`);
        return searchMatch && dateMatch && leagueMatch;
    });

    console.log('Filtered Data:', filteredData);
    displaySchedule(filteredData);
}

function copyText(elementId) {
    const content = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(content).then(() => {
        alert("✅ Teks berhasil disalin!");
    }).catch(err => {
        console.error("Gagal menyalin teks:", err);
    });
}

window.onload = loadSchedule;
