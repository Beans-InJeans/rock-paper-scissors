const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame() {
    winners = [];
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.ties'). textContent = 'Ties: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.reset').style.display = "none";
}

function startGame() {
    // play until someone wins 5 times
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => 
        img.addEventListener('click', () => {
            if (img.id) {
                playRound(img.id);
            }
        })
    );
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >=5) {
        return
    }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        // display end results
        // change the button to visible
        // change the text to display winner
        displayEnd();
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == 'Player').length;

    if (playerWins == 5) {
        document.querySelector('.winner').textContent = "You won 5 games!";
    } else {
        document.querySelector('.winner'). textContent = "The computer won 5 games.";
    }
    document.querySelector('.reset').style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You chose: 
    ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;

    document.querySelector('.computerChoice').textContent = `The computer chose: 
    ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;

    document.querySelector('.winner').textcontent = `Round winner" ${winner}`;
}

function displayRoundWinner(winner) {
    if (winner == 'Player') {
        document.querySelector('.winner').textContent = 'You won the round!'
    } else if (winner == 'Computer') {
        document.querySelector('.winner').textContent = 'The Computer won the round.'
    } else {
        document.querySelector(".winner").textContent = 'The round was a tie.'
    }
}

function computerSelect() {
    //todo - update dom
    return choices[Math.floor(Math.random() * choices.length)];
}

function tallyWins() {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function checkWins() {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount);
}

function checkWinner(choice1, choice2) {
    if (choice1 === choice2) {
        return "Tie";
    } else if (
        (choice1 === "rock" && choice2 === "scissors") ||
        (choice1 === "paper" && choice2 === "rock") ||
        (choice1 === "scissors" && choice2 === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}    

function setWins() {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length
}

startGame();