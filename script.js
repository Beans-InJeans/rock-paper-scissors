// Rock Paper Scissors

game();

/**
 * randomly returns rock, paper, or scissors for the computer's turn.
 * @return {string} computerChoice
 */
function getComputerChoice() {

    let choice = Math.floor(Math.random()*3) + 1;
    let computerChoice = 0;

    if (choice === 1) {
        computerChoice = 'rock'
        return computerChoice

    } else if (choice === 2) {
        computerChoice = 'paper'
        return computerChoice

    } else if (choice === 3) {
        computerChoice = 'scissors'
        return computerChoice
    }
}

/**
 * plays a single round of Rock Paper Scissors.
 * @param {string} playerSelection      'rock', 'paper', or 'scissors'
 * @param {string} computerSelection    'rock', 'paper', or 'scissors'
 * @return {num}   0: tie   1: you win  2: computer wins
 */
function playRound(playerSelection, computerSelection) {

    let winner = undefined;
    alert("You played " + playerSelection + "\nThe computer played " + computerSelection);

    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return winner = 0;
        } else if (computerSelection == 'paper') {
            return winner = 2;
        } else if (computerSelection == 'scissors') {
            return winner = 1;
        } else {
            alert("Problem, try again.")
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return winner = 1;
        } else if (computerSelection == 'paper') {
            return winner = 0;
        } else if (computerSelection == 'scissors') {
            return winner = 2;
        } else {
            alert("Problem, try again.")
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return winner = 2;
        } else if (computerSelection == 'paper') {
            return winner = 1;
        } else if (computerSelection == 'scissors') {
            return winner = 0
        }
    } else {
        alert("ERROR: You need to input rock, paper, or scissors!")
    }

}

/**
 * plays a 5 round game that keeps score and reports the winner/loser at the end.
 */
function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === 0) {
            alert("Tie!");
        } else if (result === 1) {
            playerScore++
            alert("You win the round!")
        } else {
            computerScore++
            alert("The computer wins the round.")
        }
    }

    alert("Your score: " + playerScore + "\nComputer score: " + computerScore);

    if (playerScore === computerScore) {
        alert("Tie game.")
    } else if (playerScore > computerScore) {
        alert("You won the game!")
    } else {
        alert("You lost the game!")
    }
}