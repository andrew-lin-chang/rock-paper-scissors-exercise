const choices = ["ROCK", "PAPER", "SCISSORS"];

const getComputerChoice = () => {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
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

window.addEventListener("DOMContentLoaded", (event) => {
    const btn = document.getElementById("play");

    btn.addEventListener("click", () => {
        const playerSelection = prompt("Please type rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        document.getElementById("result").innerHTML = playRound(playerSelection, computerSelection);
    });
});