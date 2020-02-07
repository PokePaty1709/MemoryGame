let startModal = document.getElementById("startModal");
let txtPlayer

function chooseName() {
    txtPlayer = document.getElementById("player1").value
    if (txtPlayer != "") {
        document.getElementById("playerName").innerHTML = 'Nome : ' + txtPlayer
        startModal.style.display = "none";
    }
}

let playerScores
if (JSON.parse(localStorage.getItem("playerScores")) != undefined) {
    playerScores = JSON.parse(localStorage.getItem("playerScores"))
} else playerScores = []
console.log(playerScores);

function saveWinnerData() {
    obj = { player: txtPlayer, score: score }
    playerScores.push(obj)
    localStorage.setItem("playerScores", JSON.stringify(playerScores))
}