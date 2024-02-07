// Array of choices for the game
const choices = ["rock", "paper", "scissors"];

// DOM elements for displaying game information
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// Initial scores
let playerScore = 0;
let computerScore = 0;

// Function to play the game
function playGame(playerChoice) {
    // Randomly select computer's choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // Variable to store the result message
    let result = "";

    // Determine the result of the game
    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You lose :(";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You lose :(";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You lose :(";
                break;
        }
    }

    // Update the display with choices and result
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Remove previous result styling
    resultDisplay.classList.remove("greenText", "redText");

    // Update scores and result styling based on the game result
    switch (result) {
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose :(":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}