let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber > 1) {
    return "Fire";
  } else if (randomNumber == 1) {
    return "Water";
  } else {
    return "Grass";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt('Fire, Water or Grass ?')
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
  while (playerChoice !== 'Fire' && playerChoice !== 'Water' && playerChoice !== 'Grass'){

    playerChoice = prompt('Invalid choice try again: Fire, Water or Grass ?')
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
  }
    return playerChoice
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log('Tie!')
  } else if (
    (humanSelection === 'Fire' && computerSelection === 'Grass') ||
    (humanSelection === 'Grass' && computerSelection === 'Water') ||
    (humanSelection === 'Water' && computerSelection === 'Fire')
  ) {
    humanScore ++
    console.log(`You Win, ${humanSelection} beats ${computerSelection}`)
  } else {
    computerScore ++
    console.log(`You Lose, ${computerSelection} beats ${humanSelection}`)
  }
}

function playGame() {
  reset()
  let count = 0
  while (count !== 5) {
    playRound(getPlayerChoice(), getComputerChoice())
    count ++
  }

  if (humanScore === computerScore) {
    console.log(`Game Result:  ${humanScore} - ${computerScore} TIE!`)
  }else{
    humanScore > computerScore ?
    console.log(`Game Result: ${humanScore} - ${computerScore} YOU WIN!`):
    console.log(`Game Result: ${humanScore} - ${computerScore} YOU LOSE!`)
  }
  console.log('Type playGame() to Play Again')
}

function reset() {
  humanScore = 0
  computerScore = 0
}

playGame()