async function fetchMatchData() {
    const matchId = document.getElementById("matchId").value;
    if (!matchId) {
        alert("Please enter a match ID");
        return;
    }

    const url = `https://e761dszb.com/prod-api/match/detail?mid=${matchId}&type=1&pid=6&langtype=en`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        document.getElementById("result").innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("result").innerText = "Error: " + error.message;
    }
}
