'requires'; 'random'

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return random.sample(choices, 1)[0];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Declare the possible outcomes
  const outcomes = {
    'rock': {
      'scissors': 'You Win! Rock beats Scissors',
      'paper': 'You Lose! Paper beats Rock'
    },
    'paper': {
      'rock': 'You Win! Paper beats Rock',
      'scissors': 'You Lose! Scissors beats Paper'
    },
    'scissors': {
      'paper': 'You Win! Scissors beats Paper',
      'rock': 'You Lose! Rock beats Scissors'
    }
  };

  // Check if playerSelection and computerSelection are valid choices
  if (!outcomes[playerSelection] || !outcomes[playerSelection][computerSelection]) {
    return 'Invalid choice';
  }

  // Return the result of the round
  return outcomes[playerSelection][computerSelection];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // Get the player's and computer's choices
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    // Play a round and get the result
    const result = playRound(playerSelection, computerSelection);

    // Update the scores based on the result
    if (result.startsWith('You Win!')) {
      playerScore++;
    } else if (result.startsWith('You Lose!')) {
      computerScore++;
    }

    console.log(`Round ${i + 1}: ${result}`);
  }

  // Declare the winner or loser
  if (playerScore > computerScore) {
    console.log('You Win the Game!');
  } else if (playerScore < computerScore) {
    console.log('You Lose the Game!');
  } else {
    console.log('The Game is a Tie!');
  }
}


