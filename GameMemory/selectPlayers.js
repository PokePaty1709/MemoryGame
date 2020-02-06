if (localStorage.getItem('players')) {
    players = JSON.parse(localStorage.getItem('players'))
} else {
    players = []
}

let selectedOne
let selectedTwo
let list = document.getElementById("playerOne")
let listTwo = document.getElementById("playerTwo");

//função para selecionar o jogador1 da partida, e verificação se existem jogadores
function selectPlayerOne() {
    let arr = JSON.parse(localStorage.getItem('players'));
    if (arr === null) {
        alert("Deve criar os jogadores no menu inicial")
        document.querySelector("#play").disabled = true;
    } else {
        arr.forEach(function (obj) {

            let option = document.createElement("option");
            option.text = obj.name;
            list.add(option);

        })

    }

}

//função para selecionar o jogador2 da partida, e verificação se existem jogadores
function selectPlayerTwo() {
    let arr = JSON.parse(localStorage.getItem('players'));

    arr.forEach(function (obj) {

        let option = document.createElement("option");
        option.text = obj.name;
        listTwo.add(option);

    })

}

//botão para iniciar a partida e verificação se os jogadores são os mesmos, se forem não deixa iniciar.
//Cria também os cartões com as informações de cada jopgador, ao lado do tabuleiro de jogo
document.getElementById("confirm").onclick = function () {

    selectedOne = list.value

    for (let i = 0; i < players.length; i++) {
        const currentPlayer = players[i];

        if (selectedOne === currentPlayer.name) {

            localStorage.setItem("players", JSON.stringify(players))
            console.log(currentPlayer);

        }
        if (selectedOne === currentPlayer.name) {

            document.getElementById("playerOneName").innerHTML += `<p>Nome: ${currentPlayer.name}</p> `
            document.getElementById("statsOne").style.visibility = "hidden"
           
        }


    }


}



selectPlayerOne();
