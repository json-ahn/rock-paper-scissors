const rock = document.createElement('button');
rock.textContent = "ROCK";
document.body.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = "PAPER";
document.body.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = "SCISSORS";
document.body.appendChild(scissors);

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
    // let humanChoice = humanChoices.toLowerCase();
    // let computerChoice = computerChoices.toLowerCase();

    const div = document.createElement('div');
    const div2 = document.createElement('div');
    

    computerChoices = getComputerChoice();

    if(humanChoices == "rock" && computerChoices == "paper") {
        computerScore++;
        div.textContent = "You lose! Paper beats Rock";
        // console.log("You lose! Paper beats Rock");
    } else if(humanChoices == "rock" && computerChoices == "scissors") {
        humanScore++;
        div.textContent = "You win! Rock beats Scissors";
        // console.log("You win! Rock beats Scissors");
    } else if(humanChoices == "rock" && computerChoices == "rock") {
        // console.log("Tie! Play again");
        div.textContent = "Tie! Play again";
    } else if(humanChoices == "paper" && computerChoices == "paper") {
        // console.log("Tie! Play again");
        div.textContent = "Tie! Play again";
    } else if(humanChoices == "paper" && computerChoices == "scissors") {
        computerScore++;
        // console.log("You lose! Scissors beats Paper");
        div.textContent = "You lose! Scissors beats Paper";
    } else if(humanChoices == "paper" && computerChoices == "rock") {
        humanScore++;
        // console.log("You Win! Paper beats Rock");
        div.textContent = "You Win! Paper beats Rock";
    } else if(humanChoices == "scissors" && computerChoices == "paper") {
        humanScore++;
        // console.log("You win! Scissors beats Paper");
        div.textContent = "You win! Scissors beats Paper";
    } else if(humanChoices == "scissors" && computerChoices == "scissors") {
        // console.log("Tie! Play again");
        div.textContent = "Tie! Play again";
    } else if(humanChoices == "scissors" && computerChoices == "rock") {
        computerScore++;
        // console.log("You lose! Rock beats Scissors");
        div.textContent = "You lose! Rock beats Scissors";
    } else if(humanChoices == "scissors" && computerChoices == "paper") {
        humanScore++;
        // console.log("You Win! Scissors beats Paper");
        div.textContent = "You Win! Scissors beats Paper";
    } else {
        // console.log("Enter again");
        div.textContent = "Enter again";
    }

    div2.textContent = "Current score - Computer: " + computerScore + " Player: " + humanScore;

    
    const div3 = document.createElement('div');
    document.body.appendChild(div);
    document.body.appendChild(div2);
    

    if(humanScore == 5) {
        div3.textContent = "Human Won! Thanks for playing!";
        document.body.appendChild(div3);
        humanScore = 0;
        computerScore = 0;
    } else if(computerScore == 5) {
        div3.textContent = "Computer Won! Thanks for playing!";
        document.body.appendChild(div3);
        humanScore = 0;
        computerScore = 0;
    }
}


function playGame() {


    // for(let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
        
    //     playRound(humanSelection, computerSelection);

    //     console.log("Current score - Computer: " + computerScore + " Player: " + humanScore);
    // }



    rock.addEventListener('click', () => {
        playRound("rock", getComputerChoice);
    });

    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice);
    });

    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice);
    });


// paper.addEventListener("click", playRound("paper", getComputerChoice));

// scissors.addEventListener("click", playRound("scissors", getComputerChoice));


    
    // if(humanScore < computerScore) {
    //     console.log("Computer Wins");
    // } else {
    //     console.log("Human Wins");
    // }
}

playGame();