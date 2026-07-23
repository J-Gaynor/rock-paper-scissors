let humanScore, computerScore
let round = 1;

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

// GET user input
const getHumanChoice = () => {
    do {
        choice = prompt(`Round ${round}: Choose rock paper or scissors: `).toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors")
    return choice;
}

// Play round function taking input params
// Calculate winner by comparing params
// increment score
const playRound = (humanChoice, computerChoice) => {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    }
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "scissors":
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                break;
            case "paper":
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                break;
        }
    }
    if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                break;
            case "scissors":
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                break;
        }
    }
    if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                break;
            case "paper":
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                break;
        }
    }
}

// Play game function
// Loop 5 times
// Call playround
// Log winner of each round
// Track score
// Log winner

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        round++;
    }

    if (humanScore === computerScore) {
        console.log("It's a tie!")
    } else if (humanScore > computerScore) {
        console.log("You win!")
    } else if (computerScore > humanScore) {
        console.log("You lose.")
    }
}

playGame()