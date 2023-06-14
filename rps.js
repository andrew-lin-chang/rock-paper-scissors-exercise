const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

const updateScore = (playerWin, playerSelection, computerSelection) => {
    let result = "";

    if(playerWin === null) {
        result = "Draw";
    } else if(playerWin) {
        playerScore++;
        document.getElementById('player-score').innerHTML = playerScore;
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        document.getElementById('computer-score').innerHTML = computerScore;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}

const playRound = (playerSelection, computerSelection) => {

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    let playerWin = null;

    switch(computerSelection) {
        case "rock":
            if(playerSelection === "scissors") {
                playerWin = false;
            } else if(playerSelection === "paper") {
                playerWin = true;
            }
            break;
        case "paper":
            if(playerSelection === "rock") {
                playerWin = false;
            } else if(playerSelection=== "scissors") {
                playerWin = true;
            }
            break;
        case "scissors":
            if(playerSelection === "paper") {
                playerWin = false;
            } else if(playerSelection === "rock") {
                playerWin = true;
            }
            break;
    }

    return updateScore(playerWin, playerSelection, computerSelection);
}

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerSelection = choice.getAttribute('id');
        const computerSelection = getComputerChoice().toLowerCase();
        document.getElementById('result').innerHTML = playRound(playerSelection, computerSelection); //inner HTML not best practice
        document.getElementById('player').setAttribute('src', `images/${playerSelection}.png`); //must match case of file name
        document.getElementById('computer').setAttribute('src', `images/${computerSelection}.png`); //must match case of file 
    })
});
