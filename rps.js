const options = ["ROCK", "PAPER", "SCISSORS"];

const getComputerChoice = () => {
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

const playRound = (playerSelection, computerSelection) => {

    playerSelection = playerSelection.toUpperCase();
    let result = "";
    let playerWin = null;

    switch(computerSelection) {
        case "ROCK":
            if(playerSelection === "SCISSORS") {
                playerWin = false;
            } else if(playerSelection === "PAPER") {
                playerWin = true;
            }
            break;
        case "PAPER":
            if(playerSelection === "ROCK") {
                playerWin = false;
            } else if(playerSelection=== "SCISSORS") {
                playerWin = true;
            }
            break;
        case "SCISSORS":
            if(playerSelection === "PAPER") {
                playerWin = false;
            } else if(playerSelection === "ROCK") {
                playerWin = true;
            }
            break;
    }

    if(playerWin === null) {
        result = "Draw";
    } else if(playerWin) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerSelection = choice.getAttribute('id');
        const computerSelection = getComputerChoice();
        document.getElementById('result').innerHTML = playRound(playerSelection, computerSelection); //inner HTML not best practice
        document.getElementById('computer').setAttribute('src', `images/${computerSelection}.png`)
    })
});
