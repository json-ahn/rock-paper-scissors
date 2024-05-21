console.log('hello world');

let humanScore = 0;
let computerScore = 0;


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

function getHumanChoice() {
    const choice = prompt("Rock Paper Scissors");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame() {
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);

    if(humanScore < computerScore) {
        return "Computer Wins";
    } else {
        return "Human Wins";
    }
}

playGame();