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