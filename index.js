//Responsive Navigation
function myFunction() {
  var x = document.getElementById("myNavigation");
  if (x.className === "navigation") {
    x.className += "responsive";
  } else {
    x.className = "navigation";
  }
}

// Identify the button and paragraph tags with IDs for reference later
const randomButton = document.getElementById("randomButton");
const number = document.getElementById("result");

// Generate and show a random integer from 1-15
function generateRandomNumber() {

  const randomNumber = Math.floor(Math.random() * 15) + 1;
  
  // Show the number in the paragraph tag
  numberResult.innerHTML = randomNumber;
}

// Adds event listener to the button click
randomButton.addEventListener("click", generateRandomNumber);

