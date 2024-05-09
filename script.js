console.log("Welcome!");
console.log("-------------");

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
    } else if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        console.log("-------------");
        return 1;
    } else if ( (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "rock" && playerSelection === "scissors") ) {
        console.log("You Lose! Paper beats Rock");
        console.log("-------------");
        return -1;
    }else {
        console.log("Error: Please type: rock, paper or scissors.");
    }

}
