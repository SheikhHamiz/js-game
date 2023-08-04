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
    // console.log(computerPlay());

function playRound(userInput) {
  computerInput = computerPlay();
  console.log(`computer chose ${computerInput}`);
  switch(computerInput.toLowerCase()) {
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
// console.log(playRound("paper"));
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Round " + (i + 1) + ": Enter 'Rock', 'Paper', or 'Scissors'").trim();
        while (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' &&
              playerSelection.toLowerCase() !== 'scissors') 
        {
                playerSelection = prompt("Round " + (i + 1) + ": Enter 'Rock', 'Paper', or 'Scissors'").trim();
        }
        console.log(`You chose ${playerSelection}`);
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection.toLowerCase(), computerSelection);
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
}
game();
