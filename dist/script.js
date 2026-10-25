function myLineUp(event) {
    event.preventDefault();

    const status = document.querySelector('input[name="status"]:checked').value;
    const gameDate = document.getElementById("gameDate").value;
    const selectedPlayers = document.querySelectorAll('input[name="players"]:checked');

    let players = [];

    for (const player of selectedPlayers) {
        players.push(player.value);
    }

    console.log("Status:", status);
    console.log("Date:", gameDate);
    console.log("Players:", players);

    const lineup = "Status: " + status +
        " | Date: " + gameDate +
        " | Players: " + (players.length > 0 ? players.join(", ") : "None selected");

    document.getElementById("lineupResult").textContent = lineup;
}

document.getElementById("submitBtn").addEventListener("click", myLineUp);