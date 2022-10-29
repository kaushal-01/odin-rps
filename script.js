getComputerChoice = () => {
  let threeRPS = ["rock", "paper", "scissor"];

  output = threeRPS[Math.floor(Math.random() * threeRPS.length)];
  return output;
};

playSingleRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return ["It's a draw", 0];
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return ["You loose, paper beats rock", -1];
    } else {
      return ["You win, rock beats sicssor", 1];
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return ["You win, paper beats rock", 1];
    } else {
      return ["You loose, scissor beats paper", -1];
    }
  } else if (playerSelection == "scissor") {
    if (computerSelection == "rock") {
      return ["You loose, rock beats sicssor", -1];
    } else {
      return ["You win, paper beats rock", 1];
    }
  }
};

game = () => {
  let finalscore = 0;
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("what is your choice: ").toLowerCase();
    const computerSelection = getComputerChoice();
    let result = playSingleRound(playerSelection, computerSelection);
    let score = result[1];
    score += score;
    finalscore = score;
    console.log(result[0]);
  }
  console.log("Your final score is: ", finalscore);

  if (finalscore == 0) {
    console.log("It's a draw in the end. Play again");
  } else if (finalscore > 0) {
    console.log("It's your win in the end");
  } else {
    console.log("You loose in the end. Play again");
  }
};

game();
