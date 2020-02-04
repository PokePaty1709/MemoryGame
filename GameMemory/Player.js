let selectedOne
let list = document.getElementById("playerName")
let start = false

 function selectPlayerName() {
     let arr = JSON.parse(localStorage.getItem('players'));
     arr.forEach(function (obj) {
         //console.log(obj.name);


         let option = document.createElement("option");
         option.text = obj.name;
         list.add(option);

     })
  
 }


document.getElementById("play").onclick = function () {

   selectedOne=list.value
   console.log(selectedOne);
   start = true

}

 selectPlayerName();