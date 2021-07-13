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

window.onload = () => {
  let randomSym = symbols[Math.floor(Math.random() * symbols.length)];
  let upSuit = document.getElementById("upSuit");
  let downSuit = document.getElementById("downSuit");
  upSuit.innerHTML = randomSym;
  document.getElementById("number").innerHTML = generateRandomNumber();
  downSuit.innerHTML = randomSym;

  if (randomSym == "&hearts;" || randomSym == "&diams") {
    upSuit.style.color = "red";
    downSuit.style.color = "red";
  } else {
    upSuit.style.color = "black";
    downSuit.style.color = "black";
  }
};

function generateRandomNumber() {
  let randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  return randomNum;
}
