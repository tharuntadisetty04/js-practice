const form = document.querySelector("form");
const submitButton = document.querySelector("form button");
const guessField = document.getElementById("guessField");
const lowOrHighPara = document.querySelector(".lowOrHigh");
const prevGuesses = document.querySelector(".prev-guesses");
const remGuesses = document.querySelector(".rem-guesses");
const gameWonBlock = document.getElementById("game-won");
const gameLoseBlock = document.getElementById("game-lose");
const revealAns = document.getElementById("answer");
const replayButtons = document.querySelectorAll(".replay");

let randNumber;
let guessCount;
let prevGuessArr;

function newGame() {
  randNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 10;
  prevGuessArr = [];

  guessField.value = "";
  prevGuesses.textContent = "";
  remGuesses.textContent = guessCount;
  lowOrHighPara.textContent = "";

  guessField.disabled = false;
  submitButton.disabled = false;

  gameWonBlock.style.display = "none";
  gameLoseBlock.style.display = "none";
}

function checkGuess(e) {
  e.preventDefault();
  const guessedNum = parseInt(guessField.value);

  if (isNaN(guessedNum) || guessedNum < 1 || guessedNum > 100) {
    lowOrHighPara.textContent = "Please enter a valid number between 1 and 100";
    lowOrHighPara.style.color = "#ef4444";
    return;
  }

  prevGuessArr.push(guessedNum);
  prevGuesses.textContent = prevGuessArr.join(", ");
  remGuesses.textContent = --guessCount;

  if (guessedNum === randNumber) {
    lowOrHighPara.textContent = "";
    gameWonBlock.style.display = "block";
    guessField.disabled = true;
    submitButton.disabled = true;
  } else if (guessCount === 0) {
    lowOrHighPara.textContent = "";
    revealAns.textContent = randNumber;
    gameLoseBlock.style.display = "block";
    guessField.disabled = true;
    submitButton.disabled = true;
  } else {
    if (guessedNum < randNumber) {
      lowOrHighPara.textContent = "Last guess was too low!";
    } else {
      lowOrHighPara.textContent = "Last guess was too high!";
    }
    lowOrHighPara.style.color = "#fbbf24";
  }

  guessField.value = "";
  guessField.focus();
}

form.addEventListener("submit", checkGuess);

replayButtons.forEach((btn) => {
  btn.addEventListener("click", newGame);
});

window.onload = newGame;
