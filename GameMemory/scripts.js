const EASY_MODE_TIME = 180
const MEDIUM_MODE_TIME = 120
const HARD_MODE_TIME = 60
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
let matches = 0
let init = 0
let timerStart
let score = 0
let moves = 0
let regra

// função para virar as cartas  
function flipCard() {

  if (init == 0) {
    clearInterval(timerStart)
    startTimer(EASY_MODE_TIME, document.querySelector('#time'));
  }

  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // primeiro clique 
    
    hasFlippedCard = true;
    firstCard = this;
    
    moves++
    document.getElementById("mouv").innerHTML = `Movements: ${moves}`
    return;
    
  }


  // segundo click
  secondCard = this;
  moves++
  document.getElementById("mouv").innerHTML = `Movements: ${moves}`
  checkForMatch();
}


// ver se as cartas dão "match"
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
  isMatch ? disableCards() : unflipCards();
  
  if (isMatch) {
    score = score + 10
    
    
    document.getElementById("score").innerHTML = `Score: ${score}`
    
    
  }else 
  score = score - 2
  
  
  document.getElementById("score").innerHTML = `Score: ${score}`
  
  
  
}


// desativar as cartas
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  resetBoard();
  
  matches++
  if (matches == MATCH_CARD_LIMIT) {
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
  let timer = duration, minutes, seconds;
  init = 1
  
  timerStart = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    
    if (--timer < 0) {
      clearInterval(timerStart)
      alert('GAME OVER')
      timer = duration;
    }
    
  }, 1000);
}
      