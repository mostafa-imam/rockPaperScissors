const resultDiv = document.querySelector('.result');

const buttons = document.querySelectorAll('.btn');

let resultPlayer = 0;
let resultComputer = 0;

buttons.forEach( (button) => {

    button.addEventListener("click", () => {

        const playerSelection = button.dataset.choice;
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        if (result == 0) {
            resultDiv.textContent = "This Round is a Tie";
        } else if (result == 1) {
            resultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            resultPlayer++;
        } else if (result == -1) {
            resultDiv.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`;
            resultComputer++;
        }
    })
})

function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor( Math.random() * choices.length )];
};

function playRound (player, computer) {

    if (player == computer) {
        return 0;
    } else if ( (player == 'rock' && computer == 'scissors') ||
    (player == 'paper' && computer == 'rock') ||
    (player == 'scissors' && computer == 'paper') ) {
        return 1;
    } else {
        return -1;
    }
};