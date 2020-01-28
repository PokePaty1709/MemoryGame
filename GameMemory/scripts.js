
const test =[
  {imgf:"../img1.png", altf: "Mouse", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img1.png", altf: "Mouse", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img2.png", altf: "Tiger", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img2.png", altf: "Tiger", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img3.png", altf: "Rabbit", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img3.png", altf: "Rabbit", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img4.png", altf: "Chick", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img4.png", altf: "Chick", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img5.png", altf: "Monkey", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img5.png", altf: "Monkey", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img6.png", altf: "Sheep", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img6.png", altf: "Sheep", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img7.png", altf: "Pig", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img7.png", altf: "Pig", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img8.png", altf: "Cow", imgb:"../logo.png", altb:"Meromy"},
  {imgf:"../img8.png", altf: "Cow", imgb:"../logo.png", altb:"Meromy"},
]
for (let i = 0; i < test.length; i++) {
  const element = test[i];
  document.querySelector(".memory-game").innerHTML += `<div class="memory-card" data-framework="${element.altf}">
  <img class="front-face" src=${element.imgf} alt=${element.altf} />
  <img class="back-face" src=${element.imgb} alt=${element.altb} />
</div>`
}


let second = 0, minute = 0, hour = 0;
let timer = document.querySelector('.timer');

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
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

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
