// Initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

// Finding or selecting element
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".result-text");
const remainingAttempt = cardBody.querySelector(".remainingAttempt");

const lostWonMessage = document.createElement("p");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    attempts++
    if (attempts>5) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }else {
        checkResult(guessingNumber.value);
        remainingAttempt.innerHTML = `Remaining Attempts: ${totalAttempts-attempts}`
    }

    guessingNumber.value = "";
});

function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);

    if (guessingNumber == randomNumber) {
        resultText.innerHTML = `you have won`;
        totalWons++;
    }else {
        resultText.innerHTML = `you have lost; random number was: ${randomNumber}`;
        totalLosts++;
    }
    
    lostWonMessage.innerHTML = `Won: ${totalWons}. Lost: ${totalLosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit) {
   return Math.floor(Math.random()*limit) + 1;
}