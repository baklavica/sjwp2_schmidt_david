let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 random
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

let naslov = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  naslov.textContent = "Player 1 has WON!";
} else if (randomNumber1 < randomNumber2) {
  naslov.textContent = "Player 2 has WON!";
} else {
  naslov.textContent = "Same numbers!";
}
