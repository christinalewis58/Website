//RANDOM NUMBER GENERATOR

// Identify the button and paragraph tags with IDs for reference later
const randomButton = document.getElementById("randomButton");
const numberResult = document.getElementById("numberResult");
let randomNumber = 0;
// Generate and show a random integer from 1-15
function generateRandomNumber(randomNumber) {

randomNumber = Math.floor(Math.random() * 15) + 1;
  
  // Show the number in the paragraph tag
  numberResult.innerHTML = randomNumber;
}

// Adds event listener to the button click
randomButton.addEventListener("click", generateRandomNumber);