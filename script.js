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
console.log(playRound("paper"));
