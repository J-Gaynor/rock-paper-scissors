let humanScore = 0;
let computerScore = 0;
let round = 1;
let buttons = document.querySelectorAll("button");
let result = document.querySelector("#result");
let humanScoreElement = document.getElementById("human-score");
let computerScoreElement = document.getElementById("computer-score");
let winner = document.querySelector(".winner");


// GENERATE random selection for computer
const getComputerChoice = () => {
    // GENERATE random number between 1 and 100
    const choice = Math.floor(Math.random() * 100);
    // Assign <= 33 = rock 33-66=paper 67>=scissors
    console.log(choice);
    if (choice <= 33) {
        return "rock";
    } else if (choice > 33 && choice <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
    // Return assigned action
}

// Play round function taking input params
// Calculate winner by comparing params
// increment score
const playRound = (e) => {
    const humanChoice = e.target.value.toLowerCase();
    const computerChoice = getComputerChoice();

    if (humanScore === 5) {
        winner.textContent = "You win!";
        buttons.forEach((button) => {
            button.remove();
        })
    } else if (computerScore === 5) {
        winner.textContent = "Computer wins!";
        buttons.forEach((button) => {
            button.remove();
        })
    } else {
        if (humanChoice === computerChoice) {
            result.textContent = "It's a tie!";
        }

        if (humanChoice === "rock") {
            switch (computerChoice) {
                case "scissors":
                    humanScore++;
                    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                    humanScoreElement.textContent = humanScore;
                    break;
                case "paper":
                    computerScore++;
                    result.textContent = `You lose. ${computerChoice} beats ${humanChoice}`;
                    computerScoreElement.textContent = computerScore;
                    break;
            }
        }

        if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                    humanScoreElement.textContent = humanScore;
                    computerScoreElement.textContent = computerScore;
                    break;
                case "scissors":
                    computerScore++;
                    result.textContent = `You lose. ${computerChoice} beats ${humanChoice}`;
                    computerScoreElement.textContent = computerScore;
                    break;
            }
        }

        if (humanChoice === "scissors") {
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                    humanScoreElement.textContent = humanScore;
                    break;
                case "paper":
                    humanScore++;
                    result.textContent = `You lose. ${computerChoice} beats ${humanChoice}`;
                    break;
            }
        }
    }
}

const playGame = () => {
    buttons.forEach(button => {
        button.addEventListener("click", playRound);
    })
}

playGame()