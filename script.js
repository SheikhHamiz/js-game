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
    console.log(computerPlay());
