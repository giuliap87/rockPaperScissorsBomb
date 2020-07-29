//Selecting nav bar elements

const startNewGame = document.getElementById("new-game");
const endGame = document.getElementById("end-game");
const gameInfo = document.getElementById("game-info");
const popUpContainer = document.querySelector(".popup-container");
const popUpText = document.querySelector(".popup-text");

// selecting rock, paper, scissors, bomb buttons and score

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const bomb = document.getElementById("bomb");

let results = document.querySelector(".final-results");
let botScore = document.getElementById("bot-score-points");
let userScore = document.getElementById("user-score-points");

// choice options

let userChoice = "";
let botChoice = "";
let choices = ["rock", "paper", "scissors"];

let userFinalScore = 0;
let botFinalScore = 0;

// select user and bot name

let userName = document.getElementById("user-name");
let botName = document.getElementById("bot-name");

// selecting all options btns

const pickBtn = document.querySelectorAll(".pick-btn");

//select game container
const gameContainer = document.querySelector(".game-container");
// select end session message box
const byeMessage = document.querySelector(".goodbye-message");
// select game name
const gameName = document.getElementById("game-name");

(function init() {
  showPopUp(startNewGame, popUpText, "Play a new game!", popUpContainer);
  showPopUp(
    gameInfo,
    popUpText,
    "Rock breaks scissors, scissors cuts paper, paper covers rock... Bomb might give you 4 points or bring you back to ZERO, while your competitor gets a point. The first player to get 5 points wins.",
    popUpContainer
  );
  showPopUp(endGame, popUpText, "End session", popUpContainer);

  // get user choice by get id of clicked btn, id corresponds to userchoice

  for (let i = 0; i < pickBtn.length; i++) {
    pickBtn[i].addEventListener("click", function () {
      userChoice = pickBtn[i].id;
      playGame();
    });
  }

  //restart game

  startNewGame.addEventListener("click", restartGame);

  endGame.addEventListener("click", endSession);
})()
