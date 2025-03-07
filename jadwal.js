let allMatches = [];
let selectedDate = '';

function fetchMatches() {
    const date = document.getElementById('datePicker').value;
    selectedDate = date; // Menyimpan tanggal yang dipilih
    const apiUrl = `https://api.90min.to/v1/match/list?date=${date}&timezone=Asia/Jakarta`;
    document.getElementById('loading').classList.add('active');
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            allMatches = data.result;
            populateCompetitionFilter();
            displayMatches(allMatches);
        })
        .catch(error => console.error('Error fetching data:', error))
        .finally(() => {
            document.getElementById('loading').classList.remove('active');
        });
}

function populateCompetitionFilter() {
    const competitionFilter = document.getElementById('competitionFilter');
    competitionFilter.innerHTML = '<option value="">Semua Kompetisi</option>';
    let competitions = new Set(allMatches.map(match => match.competition.name));
    competitions.forEach(competition => {
        const option = document.createElement('option');
        option.value = competition;
        option.textContent = competition;
        competitionFilter.appendChild(option);
    });
}

function displayMatches(matches) {
    const scheduleTable = document.getElementById('schedule').getElementsByTagName('tbody')[0];
    scheduleTable.innerHTML = '';

    matches.forEach(match => {
        const row = scheduleTable.insertRow();
        const timeCell = row.insertCell(0);
        const homeTeamCell = row.insertCell(1);
        const awayTeamCell = row.insertCell(2);
        const competitionCell = row.insertCell(3);

        const matchTime = new Date(match.match_time * 1000).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        });
        timeCell.textContent = matchTime;
        homeTeamCell.innerHTML = `<img src="${match.home_team.logo}" width="20" class="me-2"> ${match.home_team.name}`;
        awayTeamCell.innerHTML = `<img src="${match.away_team.logo}" width="20" class="me-2"> ${match.away_team.name}`;
        competitionCell.innerHTML = `<img src="${match.competition.logo}" width="20" class="me-2"> ${match.competition.name}`;
    });

    displayMatchInfo(matches);
}

function filterMatches() {
    const searchValue = document.getElementById('searchBox').value.toLowerCase();
    const selectedCompetition = document.getElementById('competitionFilter').value;

    const filteredMatches = allMatches.filter(match => {
        const homeTeam = match.home_team.name.toLowerCase();
        const awayTeam = match.away_team.name.toLowerCase();
        const competition = match.competition.name;

        const matchesSearch = homeTeam.includes(searchValue) || awayTeam.includes(searchValue) || competition.toLowerCase().includes(searchValue);
        const matchesCompetition = selectedCompetition === "" || competition === selectedCompetition;

        return matchesSearch && matchesCompetition;
    });

    displayMatches(filteredMatches);
}

function displayMatchInfo(matches) {
    const matchInfoContainer = document.getElementById('matchInfoContainer');
    matchInfoContainer.innerHTML = '';

    if (matches.length === 0) {
        matchInfoContainer.innerHTML = '<p>Tidak ada pertandingan yang cocok.</p>';
        return;
    }

    let allMatchInfo = [];
    let allMatchJson = [];

    matches.forEach(match => {
        const matchTime = new Date(match.match_time * 1000).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        });
        const matchDate = selectedDate; // Menggunakan tanggal yang dipilih
        const matchInfo = `
${match.home_team.name} vs ${match.away_team.name}
Kompetisi: ${match.competition.name}
Tanggal: ${matchDate}
Waktu: ${matchTime}
Link: https://bit.ly/zonasportlive
----------------------------------
`;
        allMatchInfo.push(matchInfo);

        const matchJson = {
            videoId: match.ts_id, // Menggunakan ts_id sebagai videoId
            m3u8Url: "", // Placeholder untuk m3u8Url
            iframeURL: "", // Placeholder untuk iframeURL
            date: matchDate,
            time: matchTime,
            teams: `${match.home_team.name} vs ${match.away_team.name}`,
            league: match.competition.name
        };
        allMatchJson.push(matchJson);

        const matchInfoDiv = document.createElement('div');
        matchInfoDiv.innerHTML = `
<p>${match.home_team.name} vs ${match.away_team.name}</p>
<p>Kompetisi: ${match.competition.name}</p>
<p>Tanggal: ${matchDate}</p>
<p>Waktu: ${matchTime}</p>
<p>Link: <a href="https://bit.ly/zonasportlive" target="_blank">https://bit.ly/zonasportlive</a></p>
<hr>
`;
        matchInfoContainer.appendChild(matchInfoDiv);
    });

    const jsonInfoDiv = document.createElement('div');
    jsonInfoDiv.innerHTML = `
<pre>${JSON.stringify(allMatchJson, null, 2)}</pre>
`;
    matchInfoContainer.appendChild(jsonInfoDiv);

    document.getElementById('copyTextButton').onclick = () => copyMatchInfo(allMatchInfo.join(''));
    document.getElementById('copyJsonButton').onclick = () => copyMatchInfo(JSON.stringify(allMatchJson, null, 2));
}

function copyMatchInfo(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Informasi telah disalin!');
    }).catch(err => {
        console.error('Tidak dapat menyalin teks: ', err);
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleScroll() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', fetchMatches);
window.addEventListener('scroll', handleScroll);
