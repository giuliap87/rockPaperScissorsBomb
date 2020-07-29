// Showing popup messaging when hovering over navigation bar's icons

function showPopUp(el, popup, msg, popContainer) {
  el.addEventListener("mouseenter", function () {
    popup.textContent = msg;
    popContainer.style.display = "block";
  });
  el.addEventListener("mouseleave", function () {
    popContainer.style.display = "none";
  });
}

// Determine bot's choice

function botPick() {
  botChoice = choices[Math.floor(Math.random() * choices.length)];
}

// game functionality

function playGame() {
  botPick();
  if (userChoice === botChoice) {
    results.textContent = "It's a tie.";
  } else if (
    (userChoice === "rock" && botChoice === "paper") ||
    (userChoice === "scissors" && botChoice === "rock") ||
    (userChoice === "paper" && botChoice === "scissors")
  ) {
    results.textContent = "Bot wins!";
    botFinalScore += 1;
    botScore.textContent = botFinalScore;
  } else if (userChoice === "bomb") {
    let random = Math.floor(Math.random() * 4) + 1;
    if (random === 1) {
      userFinalScore += 4;
      userScore.textContent = userFinalScore;
      results.textContent = "Jackpot ;)";
    } else {
      userFinalScore = 0;
      userScore.textContent = userFinalScore;
      botFinalScore += 1;
      botScore.textContent = botFinalScore;
      results.textContent = "...bad luck!";
    }
  } else {
    results.textContent = "User wins!";
    userFinalScore += 1;
    userScore.textContent = userFinalScore;
  }
  winner();
}

// Determine winner, disable btns and display animation

function winner() {
  if (userFinalScore >= 5) {
    userName.classList.add("winner");
    userName.textContent = "Winner";
    for (let i = 0; i < pickBtn.length; i++) {
      pickBtn[i].disabled = true;
    }
    results.textContent = "";
  } else if (botFinalScore >= 5) {
    botName.classList.add("winner");
    botName.textContent = "Winner";
    for (let i = 0; i < pickBtn.length; i++) {
      pickBtn[i].disabled = true;
    }
    results.textContent = "";
  }
}

//restart game

function restartGame() {
  {
    botName.textContent = "Bot";
    userName.textContent = "User";
    userName.classList.remove("winner");
    botName.classList.remove("winner");
    botFinalScore = 0;
    userFinalScore = 0;
    userScore.textContent = 0;
    botScore.textContent = 0;
    gameName.style.display = "block";
    gameContainer.style.display = "block";
    byeMessage.style.display = "none";
    results.textContent = "";

    for (let i = 0; i < pickBtn.length; i++) {
      pickBtn[i].disabled = false;
    }
  }
}

//end game

function endSession(){
  gameContainer.style.display = "none";
  gameName.style.display = "none";
  popUpContainer.style.display = "none";
  byeMessage.style.display = "block";

}
