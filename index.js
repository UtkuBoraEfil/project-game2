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

far.textContent = count;
remain.textContent = 5 - count;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let value = input.value;
  guessList.push(value);
  count++;
  far.textContent = count;
  remain.textContent = 5 - count;

  guesses.textContent = guessList.join(" - ");
  input.value = "";

  if (n == value) {
    result.innerHTML = "Congratulations! You fucking got it right!";
    lastSection.style.display = "none";
    restart.style.display = "block";
  } else if (n != value) {
    if (n > value) {
      result.innerHTML = "Number is higher ";
    } else if (n < value) {
      result.innerHTML = "Number is lower";
    }
  }

  if (count === 5) {
    lastSection.style.display = "none";
    result.innerHTML = "GAME OVER! correct number was " + n;
    restart.style.display = "block";
  }
});
