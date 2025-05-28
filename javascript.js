let humanScore = 0
let computerScore = 0

function getComputerChoice()
{
    num = Math.floor(Math.random() * 9)
    // Math.floor rounds down to an integer, i.e. 8.754 --> 8
    // 0 1 2 3 4 5 6 7 8
    if (num <= 2) {
        choice = "Scissors"
    }
    else if (num >= 3 && num <=5) {
        choice = "Paper"
    }
    else if (num >=6) {
        choice = "Rock"
    }
    return choice
}

let scoreText = document.querySelector(".score")
let playerText = document.querySelector(".playerChoice")
let computerText = document.querySelector(".computerChoice")
let titleText = document.querySelector(".title")
let gameisPlaying = true;

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')

rockButton.onclick = () => playRound("rock", getComputerChoice())
paperButton.onclick = () => playRound("paper", getComputerChoice())
scissorsButton.onclick = () => playRound("scissors", getComputerChoice())
//previously, you just called the function

function playRound(human, computer)
{
    if (gameisPlaying) {
        console.log("round played")
        var options = ["rock", "paper", "scissors"]
        var humanChoice = human.toLowerCase()
        var computerChoice = computer.toLowerCase()
        humanChoice = options.indexOf(humanChoice)
        computerChoice = options.indexOf(computerChoice)

        playerText.textContent = "Player choice: " + human.toLowerCase()
        computerText.textContent = "Computer choice: " + computer.toLowerCase()

        if ((humanChoice == 0 && computerChoice == 2) || (humanChoice == 1 && computerChoice == 0) || (humanChoice == 2 && computerChoice == 1))
        {
            humanScore++
            // alert("You won! Your choice was " + human.toLowerCase() + " and computer choice was " + computer.toLowerCase())
        }

        else if (humanChoice != computerChoice)
        {
            computerScore++;
            // alert("You lost! Your choice was " + human.toLowerCase() + " and computer choice was " + computer.toLowerCase())
        }

        else 
        {
            // alert("You tied! Your choice was " + human.toLowerCase() + " and computer choice was " + computer.toLowerCase())
        }

        scoreText.textContent = "Player: " + String(humanScore) + ", Computer: " + String(computerScore);

        if (humanScore == 5) {
            titleText.textContent = "Player wins!"
            gameisPlaying = false
        }

        else if (computerScore == 5) {
            titleText.textContent = "Computer wins!"
            gameisPlaying = false
        }
    }

}







