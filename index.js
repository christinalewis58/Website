document.addEventListener("DOMContentLoaded", function () {
  //RESPONSIVE NAVIGATION
  function myFunction() {
    var x = document.getElementById("myNavigation");
    if (x.className === "navigation") {
      x.className += "responsive";
    } else {
      x.className = "navigation";
    }
  }

  // //RANDOM NUMBER GENERATOR

  // // Identify the button and paragraph tags with IDs for reference later
  // const randomButton = document.getElementById("randomButton");
  // const numberResult = document.getElementById("numberResult");
  // let randomNumber = 0;
  // // Generate and show a random integer from 1-15
  // function generateRandomNumber(randomNumber) {

  // randomNumber = Math.floor(Math.random() * 15) + 1;

  //   // Show the number in the paragraph tag
  //   numberResult.innerHTML = randomNumber;
  // }

  // // Adds event listener to the button click
  // randomButton.addEventListener("click", generateRandomNumber);

  //RANDOM DOG FACTS

  //function getRandomDogFact() {
  // fetch("https://dukengn.github.io/Dog-facts-API/api/dog-facts.json")
  //   .then(response => response.json())
  //   .then(data => {
  //       var dogFacts = data;
  //       var randomFact = dogFacts[Math.floor(Math.random() * dogFacts.length)];
  //       document.getElementById("factText").innerText = randomFact;
  //    })
  //    .catch(error => {
  //        console.log("An error occurred:", error);
  //   });
  //}

  //Get button element for generating a color and save to variable

  const colorButton = document.getElementById("colorButton");
  function generateRandomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return [r, g, b];
  }
  //create the function that fires when you click the button - function had the fetch request in it.
  function generateColor() {
    var url = "http://colormind.io/api/";
    var data = {
      model: "default",
      input: [generateRandomRGB(), generateRandomRGB(), "N", "N", "N"],
    };
    var paletteContainer = document.getElementById("palette-container");
    while (paletteContainer.firstChild) {
      paletteContainer.removeChild(paletteContainer.firstChild);
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then(function (data) {
        var palette = data.result;
        //var paletteContainer = document.getElementById("palette-container");

        // Iterate over each color in the palette
        palette.forEach(function (color) {
          // Create a color box element
          var colorBox = document.createElement("div");
          colorBox.classList.add("color-box");
          colorBox.style.backgroundColor = "rgb(" + color.join(",") + ")";

          // Append the color box to the palette container
          paletteContainer.appendChild(colorBox);
        });
      });
  }

  //add an event listener (click event)
  colorButton.addEventListener("click", generateColor);

  //TypeError: null is not an object (evaluating 'randomButton.addEventListener')
});

// //Fetch blog posts from mockable.io

// const response = await fetch("http://demo3933962.mockable.io/posts", { method: "GET" });
// const posts = await response.json()
// console.log(posts)

// //Show blog post content 
// posts.forEach((post)=>{
//   document.querySelector(".blog").innerHTML += `
//   <article>
//   <h2>${post.title}</h2>
//   <p>${post.author}</p>
//   <p>${post.date}</p>
//   <p>${post.msg}</p>
//   </article>`
// })

