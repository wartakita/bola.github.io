const form = document.getElementById('scheduleForm');
const posterLeague = document.getElementById('poster-league');
const posterDate = document.getElementById('poster-date');
const matchesContainer = document.getElementById('matchesContainer');

function formatDateIndo(dateStr) {
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', options);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const league = e.target.leagueInput.value.trim();
    const date = e.target.dateInput.value;
    const team1 = e.target.team1Input.value.trim();
    const logo1 = e.target.logo1Input.value.trim();
    const team2 = e.target.team2Input.value.trim();
    const logo2 = e.target.logo2Input.value.trim();
    const time = e.target.timeInput.value;
    const status = e.target.statusInput.value;

    if (!league || !date || !team1 || !team2 || !logo1 || !logo2 || !time || !status) {
        alert('Mohon lengkapi semua data!');
        return;
    }

    posterLeague.textContent = league.toUpperCase();
    posterDate.textContent = formatDateIndo(date);

    const card = document.createElement('article');
    card.classList.add('match-card');

    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Pertandingan antara ${team1} melawan ${team2} pada pukul ${time} WIB, disiarkan di ${status}`);

    const teamsRow = document.createElement('div');
    teamsRow.className = 'teams-row';
    const divider = document.createElement('div');
    // divider removed for clean grid layout

    const team1Block = document.createElement('div');
    team1Block.className = 'team-block';
    team1Block.style.display = 'flex';
    team1Block.style.flexDirection = 'column';
    team1Block.style.alignItems = 'flex-start';
    team1Block.style.textAlign = 'left';

    const timeElem = document.createElement('time');
    timeElem.className = 'match-time';
    timeElem.setAttribute('datetime', `${date}T${time}`);
    timeElem.textContent = `${time} WIB`;
    timeElem.style.alignSelf = 'center';

    const logo1Img = document.createElement('img');
    logo1Img.src = logo1;
    logo1Img.alt = `Logo ${team1}`;
    logo1Img.className = 'team-logo';
    logo1Img.crossOrigin = 'anonymous';
    logo1Img.onerror = () => {
        logo1Img.src = 'https://via.placeholder.com/42?text=?';
    };

    const team1Name = document.createElement('div');
    team1Name.className = 'team-name';
    team1Name.title = team1;
    team1Name.textContent = team1;



    const vsBox = document.createElement('div');
    vsBox.className = 'vs-box';
    vsBox.textContent = 'VS';
    vsBox.setAttribute('aria-hidden', 'true');

    const team2Block = document.createElement('div');
    team2Block.className = 'team-block';
    team2Block.style.display = 'flex';
    team2Block.style.flexDirection = 'column';
    team2Block.style.alignItems = 'flex-end';
    team2Block.style.textAlign = 'right';

    const team2Name = document.createElement('div');
    team2Name.className = 'team-name';
    team2Name.title = team2;
    team2Name.textContent = team2;

    const logo2Img = document.createElement('img');
    logo2Img.src = logo2;
    logo2Img.alt = `Logo ${team2}`;
    logo2Img.className = 'team-logo';
    logo2Img.crossOrigin = 'anonymous';
    logo2Img.onerror = () => {
        logo2Img.src = 'https://via.placeholder.com/42?text=?';
    };

    // Updated layout: align horizontally inside each block
    const team1Row = document.createElement('div');
    team1Row.style.display = 'flex';
    team1Row.style.alignItems = 'center';
    team1Row.style.gap = '10px';
    team1Row.style.padding = '8px 0';
    team1Row.appendChild(timeElem);
    team1Row.appendChild(logo1Img);
    team1Row.appendChild(team1Name);
    team1Block.innerHTML = '';
    team1Block.appendChild(team1Row);

    const team2Row = document.createElement('div');
    team2Row.style.display = 'flex';
    team2Row.style.alignItems = 'center';
    team2Row.style.gap = '10px';
    team2Row.style.padding = '8px 0';
    team2Row.appendChild(team2Name);
    team2Row.appendChild(logo2Img);

    if (status) {
        const liveBadge = document.createElement('span');
        liveBadge.className = 'live-badge';
        liveBadge.textContent = status;
        liveBadge.style.alignSelf = 'center';
        team2Row.appendChild(liveBadge);
    }

    team2Block.innerHTML = '';
    team2Block.appendChild(team2Row);

    teamsRow.append(team1Block, vsBox, team2Block);
    card.appendChild(teamsRow);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Hapus Jadwal';
    deleteBtn.className = 'delete-button';
    deleteBtn.addEventListener('click', () => {
        card.remove();
    });
    card.appendChild(deleteBtn);
    card.style.borderBottom = '1px solid rgba(255,255,255,0.15)';
    card.style.marginBottom = '10px';
    card.style.paddingBottom = '12px';

    // insert in correct position sorted by time
    const cards = Array.from(matchesContainer.children);
    const matchDateTime = new Date(`${date}T${time}`);

    let inserted = false;
    for (let i = 0; i < cards.length; i++) {
        const existingTime = cards[i].querySelector('time');
        if (existingTime) {
            const existingDateTime = new Date(existingTime.getAttribute('datetime'));
            if (matchDateTime < existingDateTime) {
                matchesContainer.insertBefore(card, cards[i]);
                inserted = true;
                break;
            }
        }
    }
    if (!inserted) matchesContainer.appendChild(card);
    matchesContainer.lastElementChild.scrollIntoView({
        behavior: 'smooth'
    });
    // form.reset(); // tidak reset agar input tetap ada
});

document.getElementById('downloadPosterBtn').addEventListener('click', () => {
    const buttons = document.querySelectorAll('.delete-button');
    buttons.forEach(btn => btn.style.display = 'none');

    html2canvas(document.querySelector('#poster'), {
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'jadwal-pertandingan.png';
        link.href = canvas.toDataURL();
        link.click();
        buttons.forEach(btn => btn.style.display = '');
    });
});
