/* Create getComputerChoice() to return a random rock-paper-scissors value */

function getComputerChoice() {

    let randomChoice = Math.floor( Math.random() * 3 );

    switch (randomChoice) {
        case 0:
            return 'rock';
        break;
        case 1:
            return 'paper';
        break;
        case 2:
            return 'scissors';
        break;
    }
}

/* create playRound() to play one round of rock, paper, scissors */

function playRound(playerSelection, computerSelection) {

    if ( playerSelection === computerSelection ) {
        console.log("This round is a tie!");
        console.log("-------------");
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        console.log("-------------");
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        console.log("-------------");
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beats Paper");
        console.log("-------------");
        return 1;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You Lose! Paper beats Rock");
        console.log("-------------");
        return -1;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You Lose! Scissors beats Paper");
        console.log("-------------");
        return -1;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You Lose! Rock beats Scissors");
        console.log("-------------");
        return -1;
    } else {
        console.log("Error: Please type: rock, paper or scissors.");
    }

}

/* create playGame() to play a 5-round rock-paper-scissors game */

function playGame(round1, round2, round3, round4, round5) {

    if (round1 + round2 + round3 + round4 + round5 == 0) {
        alert("It's a tie!");
        console.log("It's a tie!");
    } else if (round1 + round2 + round3 + round4 + round5 > 0) {
        alert("You Win The Game");
        console.log("You Win The Game");
    } else if (round1 + round2 + round3 + round4 + round5 < 0) {
        alert("Game Over! You Suck!!");
        console.log("Game Over! You suck!!");
    }  else {
        console.log("Come Back When You Want to Get Serious!");
    }

}

/* create 5 playerSelection constants for each round  */

const playerSelection1 = prompt("rock, paper or scissors?").toLowerCase();
const playerSelection2 = prompt("rock, paper or scissors?").toLowerCase();
const playerSelection3 = prompt("rock, paper or scissors?").toLowerCase();
const playerSelection4 = prompt("rock, paper or scissors?").toLowerCase();
const playerSelection5 = prompt("rock, paper or scissors?").toLowerCase();

/* create 5 computerSelection constants for each round */

const computerSelection1 = getComputerChoice();
const computerSelection2 = getComputerChoice();
const computerSelection3 = getComputerChoice();
const computerSelection4 = getComputerChoice();
const computerSelection5 = getComputerChoice();

/* create 5 rounds to be used as parameters in playGame() */

const round1 = playRound(playerSelection1, computerSelection1);
const round2 = playRound(playerSelection2, computerSelection2);
const round3 = playRound(playerSelection3, computerSelection3);
const round4 = playRound(playerSelection4, computerSelection4);
const round5 = playRound(playerSelection5, computerSelection5);