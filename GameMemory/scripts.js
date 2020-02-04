const EASY_MODE_TIME = 50
const MATCH_CARD_LIMIT = 8

//array das cartas
const test = [
  { imgf: "../img1.png", altf: "Mouse", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img1.png", altf: "Mouse", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img2.png", altf: "Tiger", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img2.png", altf: "Tiger", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img3.png", altf: "Rabbit", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img3.png", altf: "Rabbit", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img4.png", altf: "Chick", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img4.png", altf: "Chick", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img5.png", altf: "Monkey", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img5.png", altf: "Monkey", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img6.png", altf: "Sheep", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img6.png", altf: "Sheep", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img7.png", altf: "Pig", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img7.png", altf: "Pig", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img8.png", altf: "Cow", imgb: "../logo.png", altb: "Meromy" },
  { imgf: "../img8.png", altf: "Cow", imgb: "../logo.png", altb: "Meromy" },
]
for (let i = 0; i < test.length; i++) {
  const element = test[i];
  document.querySelector(".memory-game").innerHTML += `<div class="memory-card" data-framework="${element.altf}">
  <img class="front-face" src=${element.imgf} alt=${element.altf} />
  <img class="back-face" src=${element.imgb} alt=${element.altb} />
</div>`
}


const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let timer
let matches = 0
let init = 0


// função para virar as cartas  
function flipCard() {

  if (init == 0) {
    startTimer(EASY_MODE_TIME, document.querySelector('#time'));
  }

  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {

    // primeiro clique
    hasFlippedCard = true;
    firstCard = this;
    return;
  }


  // segundo click
  secondCard = this;

  checkForMatch();
}


// ver se as cartas dão "match"
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}


// desativar as cartas
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();

  matches++
  if(matches == MATCH_CARD_LIMIT) {
    alert("you win")
  }

}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//cartas aleatorias 
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


//função do timer
function startTimer(duration, display) {
  let minutes = 0
  let seconds = 0
  let count = duration
  console.log("ww");

  timer = setInterval( () => {
    console.log(count);

    minutes = parseInt(count / 60, 10);
    seconds = parseInt(count % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;

    if (count === 0) {
      alert("Game Over!")
      clearInterval(timer)

    }
    count--
  }, 1000);
}

window.onload = function () {

};

