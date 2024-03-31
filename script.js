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

