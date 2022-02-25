/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const symbols = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
function generateRandomNumber() {
  let randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  return randomNum;
}
window.onload = () => {
  let randomSym = symbols[Math.floor(Math.random() * symbols.length)];
  let upSuit = document.getElementById("upSuit");
  let downSuit = document.getElementById("downSuit");
  let num = document.getElementById("number");
  upSuit.innerHTML = randomSym;
  num.innerHTML = generateRandomNumber();
  downSuit.innerHTML = randomSym;

  if (randomSym == "&hearts;" || randomSym == "&diams;") {
    upSuit.style.color = "red";
    downSuit.style.color = "red";
    num.style.color = "red";
  } else {
    upSuit.style.color = "black";
    downSuit.style.color = "black";
    num.style.color = "black";
  }
};

const element = document.getElementById("button");
element.addEventListener("click", window.onload);
