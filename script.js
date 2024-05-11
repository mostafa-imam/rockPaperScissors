const resultDiv = document.querySelector('.result');
const counterPlayer = document.querySelector('.counterPlayer');
const counterComputer = document.querySelector('.counterComputer');
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

        updateResult();
        checkWinner();
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

function updateResult() {
    counterPlayer.textContent = resultPlayer;
    counterComputer.textContent = resultComputer;
};

function checkWinner() {
    if (resultPlayer == 5) {
        resultDiv.textContent = "Congratulations! You Win the Game!";
        disableButtons();
    } else if (resultComputer == 5) {
        resultDiv.textContent = "Hard Luck! Computer Wins the Game!";
        disableButtons();
    }
};

function disableButtons() {
    buttons.forEach( (button) => {
        button.disabled = true;
    });
};