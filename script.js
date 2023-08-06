function computerPlay() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return 'Rock';
  } else if (randomNumber < 0.66) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(userInput, computerInput) {
  switch(computerInput) {
    case 'rock':
      if(userInput === 'paper'){
        return 'You Win!';
      } else if(userInput === 'scissors') {
        return 'You Lose!';
      } else {
        return 'draw'
      }
    case 'paper':
      if(userInput === 'rock') {
        return 'You Lose!';
      } else if(userInput === 'scissors') {
        return 'You Win!';
      } else {
        return 'draw';
      }
    case 'scissors':
      if(userInput === 'rock') {
        return 'You Win!';
      } else if(userInput === 'paper') {
        return 'You Lose!';
      } else {
        return 'draw';
      }
  }
  }
function game() {
  let playAgain = true;

  while (playAgain) {
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Round " + (i + 1) + ": Enter 'Rock', 'Paper', or 'Scissors'").trim().toLowerCase();
      if (playerSelection == null) {
        return null;
      }
      while (playerSelection !== "" && playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') 
      {
              alert("please input only rock, paper or scissors");
              playerSelection = prompt("Round " + (i + 1) + ": Enter 'Rock', 'Paper', or 'Scissors'").toLowerCase().trim();
      }
      const computerInput = computerPlay().toLowerCase();
      console.log(`You chose ${playerSelection} || computer chose ${computerInput}`);
      const roundResult = playRound(playerSelection, computerInput);
      console.log(roundResult);

      if (roundResult.startsWith("You Win!")) {
          playerScore++;
      } else if (roundResult.startsWith("You Lose!")) {
          computerScore++;
      } else {
        draw++;
      }
  }

    console.log("Game Over!");
    console.log(`Final Scores: You: ${playerScore} | Computer: ${computerScore} | Draw: ${draw}`);

    // Ask the user if they want to play again
    const playAgainInput = prompt("Do you want to play again? (yes/no)").trim().toLowerCase();
    playAgain = playAgainInput === "yes";
  }
}
game();
