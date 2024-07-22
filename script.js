const btnGrass = document.getElementById("grass");
const btnFire = document.getElementById("fire");
const btnWater = document.getElementById("water");
const displayHumanScore = document.getElementById("human-score");
const displayComputerScore = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const resultImageHuman = document.getElementById("human-choice-img");
const resultImageComputer = document.getElementById("computer-choice-img");

let humanScore = 0;
let computerScore = 0;

btnGrass.addEventListener("click", () => clickOption("Grass"));

btnFire.addEventListener("click", () => clickOption("Fire"));

btnWater.addEventListener("click", () => clickOption("Water"));

function clickOption(option) {
  resultImageHuman.classList.remove("winner");
  resultImageComputer.classList.remove("winner");
  const computerChoice = getComputerChoice();
  playRound(option, computerChoice);
  resultImageHuman.src = getImage(option);
  resultImageComputer.src = `${getImage(computerChoice)}`;
}

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

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    displayTie();
  } else if (
    (humanSelection === "Fire" && computerSelection === "Grass") ||
    (humanSelection === "Grass" && computerSelection === "Water") ||
    (humanSelection === "Water" && computerSelection === "Fire")
  ) {
    humanScore++;
    displayHumanScore.textContent = `Human: ${humanScore}`;
    displayResult(humanSelection, computerSelection, "human");
    resultImageHuman.classList.add("winner");
  } else {
    computerScore++;
    displayComputerScore.textContent = `Computer: ${computerScore}`;
    displayResult(humanSelection, computerSelection, "computer");
    resultImageComputer.classList.add("winner");
  }

  if (humanScore === 5) {
    printWinner("YOU WIN!");
  } else if (computerScore === 5) {
    printWinner("YOU LOSE!");
  }
}

function reset() {
  humanScore = 0;
  computerScore = 0;
  displayHumanScore.textContent = `Human: ${humanScore}`;
  displayComputerScore.textContent = `Computer: ${computerScore}`;
}

function displayResult(humanSelection, computerSelection, winner) {
  resultText.textContent = "";

  const humanColor = getColor(humanSelection);
  const computerColor = getColor(computerSelection);

  const humanChoice = document.createElement("span");
  humanChoice.textContent = humanSelection;
  humanChoice.classList.add(humanColor);

  const computerChoice = document.createElement("span");
  computerChoice.textContent = computerSelection;
  computerChoice.classList.add(computerColor);

  const resultMessage = document.createElement("div");

  const win = document.createElement("span");
  win.textContent = "You Win! ";
  win.classList.add("win-color");

  const lose = document.createElement("span");
  lose.textContent = "You Lose! ";
  lose.classList.add("lose-color");

  if (winner === "human") {
    resultMessage.appendChild(win);
    resultMessage.appendChild(humanChoice);
    resultMessage.appendChild(document.createTextNode(" beats "));
    resultMessage.appendChild(computerChoice);
  } else {
    resultMessage.appendChild(lose);
    resultMessage.appendChild(computerChoice);
    resultMessage.appendChild(document.createTextNode(" beats "));
    resultMessage.appendChild(humanChoice);
  }

  resultText.appendChild(resultMessage);
}

function displayTie() {
  resultText.textContent = "";
  const t = document.createElement("span");
  t.textContent = "T";
  t.classList.add("grass-color");
  const i = document.createElement("span");
  i.textContent = "I";
  i.classList.add("fire-color");
  const e = document.createElement("span");
  e.textContent = "E";
  e.classList.add("water-color");

  const resultMessage = document.createElement("div");
  resultMessage.appendChild(t);
  resultMessage.appendChild(i);
  resultMessage.appendChild(e);
  resultText.appendChild(resultMessage);
}

function getColor(option) {
  return `${option.toLowerCase()}-color`;
}

function getImage(computerSelection) {
  return `./images/${computerSelection.toLowerCase()}.jpg`;
}

function printWinner(message) {
  resultText.className = "";
  resultText.textContent = message;
  message === "YOU WIN!"
    ? resultText.classList.add("you-win")
    : resultText.classList.add("you-lose");
  reset();
}
