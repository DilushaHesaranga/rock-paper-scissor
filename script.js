// Function to generate a random choice for the computer
function computerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if ((user === 'rock' && computer === 'scissor') ||
               (user === 'paper' && computer === 'rock') ||
               (user === 'scissor' && computer === 'paper')) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Event listeners for the buttons
document.getElementById('rock').addEventListener('click', function () {
    const userChoice = 'rock';
    const compChoice = computerChoice();
    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('computer-choice').textContent = compChoice;
    const result = determineWinner(userChoice, compChoice);
    document.getElementById('result').textContent = result;
});

document.getElementById('paper').addEventListener('click', function () {
    const userChoice = 'paper';
    const compChoice = computerChoice();
    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('computer-choice').textContent = compChoice;
    const result = determineWinner(userChoice, compChoice);
    document.getElementById('result').textContent = result;
});

document.getElementById('scissor').addEventListener('click', function () {
    const userChoice = 'scissor';
    const compChoice = computerChoice();
    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('computer-choice').textContent = compChoice;
    const result = determineWinner(userChoice, compChoice);
    document.getElementById('result').textContent = result;
});