let localData = JSON.parse(localStorage.getItem("playerScores"))

localData.sort(function(a, b) {
    return a.score - b.score;
}).reverse();

if (localData != undefined) {
    for (let i = 0; i < 10; i++) {
        if (localData[i]) document.getElementById`(txt${i + 1}Player).innerHTML = ${i + 1}º - ${localData[i].player} : <span class="text-danger">${localData[i].score} </span> Pontos`
    }
}