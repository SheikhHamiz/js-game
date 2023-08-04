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
  console.log(computerInput);
  switch(computerInput.toLowerCase()) {
    case 'rock':
      if(userInput === 'paper'){
        return 'you win';
      } else if(userInput === 'scissors') {
        return 'you lose';
      } else {
        return 'draw'
      }
    case 'paper':
      if(userInput === 'rock') {
        return 'you lose';
      } else if(userInput === 'scissors') {
        return 'you win';
      } else {
        return 'draw';
      }
    case 'scissors':
      if(userInput === 'rock') {
        return 'you win';
      } else if(userInput === 'paper') {
        return 'you lose';
      } else {
        return 'draw';
      }
  }
}
// console.log(playRound("paper"));
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Round " + (i + 1) + ": Enter 'Rock', 'Paper', or 'Scissors'").trim();
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);

        console.log(roundResult);

        if (roundResult.startsWith("You Win!")) {
            playerScore++;
        } else if (roundResult.startsWith("You Lose!")) {
            computerScore++;
        }
    }

    console.log("Game Over!");
    console.log(`Final Scores: You: ${playerScore} | Computer: ${computerScore}`);
}
game();
