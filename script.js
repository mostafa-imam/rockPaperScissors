const resultDiv = document.querySelector('.result');
const result1 = document.querySelector('.r1');
const result2 = document.querySelector('.r2');

result1.setAttribute('style', 'font-size: 2rem; font-weight: 400');
result2.setAttribute('style', 'font-size: 1.3rem; font-weight: 100');


const counterPlayer = document.querySelector('.counterPlayer');
const visualPlayer = document.querySelector(".visualPlayer");

const counterComputer = document.querySelector('.counterComputer');
const visualComputer = document.querySelector(".visualComputer");

const buttons = document.querySelectorAll('.btn');

let resultPlayer = 0;
let resultComputer = 0;

buttons.forEach( (button) => {

    button.addEventListener("click", () => {

        if (resultPlayer < 5 && resultComputer < 5) {
            
            const playerSelection = button.dataset.choice;
            const computerSelection = getComputerChoice();
            
            let result = playRound(playerSelection, computerSelection);
            
            if (result == 0) {
                result1.textContent = "A Tie";
                result2.textContent = " ";
                visualPlayer.setAttribute("src", `./media/${button.dataset.choice}.svg`);
                visualComputer.setAttribute("src", `./media/${computerSelection}.svg`);
            } else if (result == 1) {
                result1.textContent = "You Win!";
                result2.textContent = `${playerSelection} beats ${computerSelection}`;
                visualPlayer.setAttribute("src", `./media/${button.dataset.choice}.svg`);
                visualComputer.setAttribute("src", `./media/${computerSelection}.svg`);
                resultPlayer++;
            } else if (result == -1) {
                result1.textContent = "You Lose !";
                result2.textContent = `${playerSelection} beats ${computerSelection}`;
                visualPlayer.setAttribute("src", `./media/${button.dataset.choice}.svg`);
                visualComputer.setAttribute("src", `./media/${computerSelection}.svg`);
                resultComputer++;
            }
        }

        button.classList.add("enlarge");

        setTimeout( () => {
            button.classList.remove('enlarge');
        }, 100);

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
    counterPlayer.textContent = `Player: ${resultPlayer}`;
    counterComputer.textContent = `Computer: ${resultComputer}`;
};

function checkWinner() {
    if (resultPlayer == 5) {
        result1.textContent = "Congratulations! You Win the Game!";
        result2.textContent = "";
        addPlayAnotherGameButton();
        disableButtons();
    } else if (resultComputer == 5) {
        result1.textContent = "Computer Wins the Game!";
        result2.textContent = "";
        disableButtons();
        addPlayAnotherGameButton();
    }
};

function disableButtons() {
    buttons.forEach( (button) => {
        button.removeEventListener("click", () => {});
        button.style.pointerEvents = "none";
    });
};

function addPlayAnotherGameButton () {

    const resultContainer = document.querySelector(".resultContainer");
    const playAnotherGame = document.createElement('button');
    playAnotherGame.classList.add("rinseAndRepeat");
    playAnotherGame.textContent = "Play Another Game?";

    resultContainer.appendChild(playAnotherGame);

    playAnotherGame.addEventListener( "click", () => window.location.reload() );

};
