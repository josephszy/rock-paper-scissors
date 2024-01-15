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

/* Event Listeners */
rock.addEventListener('click', () => getPlayerChoice('rock'))
paper.addEventListener('click', () => getPlayerChoice('paper'))
scissors.addEventListener('click', () => getPlayerChoice('scissor'))

/* Functions for the game */

/* Function to help computer randomly get an option */

function getComputerChoice( ) {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(playerSelection) {
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection)
}

/* Function for the play round */

function playRound (playerSelection, computerSelection) {
  if ((playerSelection == 'rock' && computerSelection == 'paper') || 
      (playerSelection == 'paper' && computerSelection == 'scissors') || 
      (playerSelection == 'scissors' && computerSelection == 'rock')) {
    gameText.innerText = "Player picked " + playerSelection + ", " + "Computer picked " + computerSelection + ". You lose.";
    computerWin ++;
    computerScore.innerText = computerWin;
    if (computerWin == 5 ) {
      gameText.innerText = "Computer Wins!"
    }
  } else if (playerSelection == computerSelection) {
    gameText.innerText = "Player picked " + playerSelection + ", " + "Computer picked " + computerSelection + ". Tied.";
    tiePoints++;
    tieScore.innerText = tiePoints;
  } else {
    gameText.innerText = "Player picked " + playerSelection + ", " + "Computer picked " + computerSelection + ". You Win!";
    playerWin++;
    playerScore.innerText = playerWin;

    if (playerWin == 5){
      gameText.innerText = "Player Wins!"
    }
  }
}
