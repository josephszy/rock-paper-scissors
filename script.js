let playerWin = 0;
let computerWin = 0;
let tiePoints = 0;

const gameText = document.querySelector('#game-text');
const playerScore = document.querySelector('#player-score')
const tieScore = document.querySelector('#tie-score')
const computerScore = document.querySelector('#computer-score')
const rock = document.querySelector ('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector ('#scissors')
const restartBtn = document.querySelector ('#restart-btn')
const buttons = document.querySelectorAll('.square-button')

/* Event Listeners */

rock.addEventListener('click', () => getPlayerChoice('rock'))
paper.addEventListener('click', () => getPlayerChoice('paper'))
scissors.addEventListener('click', () => getPlayerChoice('scissor'))
restartBtn.addEventListener('click', restartGame)

/* Functions for the game */

/* Function to help computer randomly get an option */

function getComputerChoice( ) {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)];
}

/* Function to get players choice */

function getPlayerChoice(playerSelection) {
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)
}

/* Function to player options once playerWins or computerWins reaches 5 first */

function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

/* Function for restart button */

function restartGame () {
  computerWin = 0;
  playerWin = 0;
  tiePoints = 0;
  computerScore.innerText = 0;
  playerScore.innerText = 0;
  tieScore.innerText = 0;
  gameText.innerText = "Begin..."
  restartBtn.style.visibility = 'hidden';
  buttons.forEach(elem => {
    elem.disabled = false; /* enables the player options when game restarts */
})
}

/* Function for the play round */

function playRound (playerSelection, computerSelection) {
  if ((playerSelection == 'rock' && computerSelection == 'paper') || 
      (playerSelection == 'paper' && computerSelection == 'scissors') || 
      (playerSelection == 'scissors' && computerSelection == 'rock')) {
    gameText.innerText = "Player picked " + playerSelection + ", " + "Computer picked " + computerSelection + ". You lose.";
    computerWin ++;
    computerScore.innerText = computerWin;

    if (computerWin == 5) {
        gameText.innerText = "Computer Wins, you lost. Try again!"
        disableButtons();
        restartBtn.style.visibility = 'visible';
    }
  } else if (playerSelection == computerSelection) {
    gameText.innerText = "Player picked " + playerSelection + ", " + "Computer picked " + computerSelection + ". Tied.";
    tiePoints++;
    tieScore.innerText = tiePoints;
  } else {
    gameText.innerText = "Player picked " + playerSelection + ", " + "Computer picked " + computerSelection + ". You Win!";
    playerWin++;
    playerScore.innerText = playerWin;

      if (playerWin == 5) {
        gameText.innerText = "Player Wins!"
        disableButtons();
        restartBtn.style.visibility = 'visible';
      }
  }
}
