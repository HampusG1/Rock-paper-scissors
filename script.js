// Create a function for the computer to choose rock, paper or scissors
function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// Create a function for the human input of rock, paper or scissors
function getHumanChoice() {
  const humanChoice = ["rock", "paper", "scissors"];
  return prompt("Choose Rock, Paper or Scissors").toLowerCase();
}
// Create a function to play the game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Create a function to play a round of rock, paper, scissors
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return "You win!";
    } else {
      computerScore++;
      return "You lose!";
    }
  }


  // play 5 rounds of rock, paper, scissors and declare winner after 5 rounds
  console.log("Round 1:");
  const humanChoice1 = getHumanChoice();
  const computerChoice1 = getComputerChoice();
  console.log(playRound(humanChoice1, computerChoice1));

  console.log("Round 2:");
  const humanChoice2 = getHumanChoice();
  const computerChoice2 = getComputerChoice();
  console.log(playRound(humanChoice2, computerChoice2));

  console.log("Round 3:");
  const humanChoice3 = getHumanChoice();
  const computerChoice3 = getComputerChoice();
  console.log(playRound(humanChoice3, computerChoice3));

  console.log("Round 4:");
  const humanChoice4 = getHumanChoice();
  const computerChoice4 = getComputerChoice();
  console.log(playRound(humanChoice4, computerChoice4));

  console.log("Round 5:");
  const humanChoice5 = getHumanChoice();
  const computerChoice5 = getComputerChoice();
  console.log(playRound(humanChoice5, computerChoice5));

  // Show us the final score and declare the winner
  console.log(`Final Scores: Human: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, the computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}

// Initiate the game
playGame();
