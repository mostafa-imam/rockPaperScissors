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

