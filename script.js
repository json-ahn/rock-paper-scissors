
// GOOD
let humanScore = 0;
let computerScore = 0;


// GOOD
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if(randomNum == 1) {
        return "rock";
    } else if(randomNum == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// GOOD
function getHumanChoice() {
    let choice = prompt("Rock Paper Scissors");

    let choiceLower = choice.toLowerCase();

    if(choiceLower == "rock") {
        return "rock";
    } else if(choiceLower == "paper") {
        return "paper";
    } else if(choiceLower == "scissors") {
        return "scissors";
    } else {
        "Invalid Choice. Please try again.";
        getHumanChoice();
    }
}

function playRound(humanChoices, computerChoices) {
    let humanChoice = humanChoices.toLowerCase();
    let computerChoice = computerChoices.toLowerCase();

    if(humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors");
    } else if(humanChoice == "rock" && computerChoice == "rock") {
        console.log("Tie! Play again");
    } else if(humanChoice == "paper" && computerChoice == "paper") {
        console.log("Tie! Play again");
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats Paper");
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You Win! Paper beats Rock");
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper");
    } else if(humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Tie! Play again");
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissors");
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You Win! Scissors beats Paper");
    } else {
        console.log("Enter again");
    }
    
}


function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);

        console.log("Current score - Computer: " + computerScore + " Player: " + humanScore);
    }

    if(humanScore < computerScore) {
        console.log("Computer Wins");
    } else {
        console.log("Human Wins");
    }
}

playGame();