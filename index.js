let form = document.querySelector("form");
const input = document.querySelector("input");
const guesses = document.querySelector(".guesses");
let far = document.querySelector(".far");
let remain = document.querySelector(".remain");
let result = document.querySelector(".result");
const lastSection = document.querySelector(".mid");
const restart = document.querySelector(".restart");

let count = 0;
restart.style.display = "none";
let guessList = [];
let n = Math.floor(Math.random() * 100 + 1);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  count++;
  guessList.push(input.value);

  updateDisplay();
  console.log(`count: ${count}`);

  if (count === 5 && n !== Number(input.value)) {
    endGame(`GAME OVER! Correct number was ${n}`);
    return;
  }

  let value = Number(input.value);
  if (n === value) {
    endGame("Congratulations! You fucking got it right!");
  } else {
    if (n > value) {
      result.textContent = "Number is higher";
    } else if (n < value) {
      result.textContent = "Number is lower";
    }
  }
  input.value = "";
});

function updateDisplay() {
  far.textContent = count;
  remain.textContent = 5 - count;
  guesses.textContent = guessList.join(", ");
}

function endGame(message) {
  result.textContent = message;
  lastSection.style.display = "none";
  restart.style.display = "block";
}
