function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const humanChoice = ["rock", "paper", "scissors"];
  return prompt("Choose Rock, Paper or Scissors").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

console.log(playRound("rock", "scissors"));
