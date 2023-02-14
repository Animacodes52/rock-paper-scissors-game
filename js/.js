const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');

const random = require('random');

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

rockButton.addEventListener('click', () => {
  const result = playRound('rock', getComputerChoice());
  resultDiv.textContent = result;
});

paperButton.addEventListener('click', () => {
  const result = playRound('paper', getComputerChoice());
  resultDiv.textContent = result;
});

scissorsButton.addEventListener('click', () => {
  const result = playRound('scissors', getComputerChoice());
  resultDiv.textContent = result;
});



