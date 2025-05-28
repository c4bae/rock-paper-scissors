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

function getHumanChoice()
{
    choice = prompt("Rock, paper, or scissors?")
    return choice
}

function playRound(human, computer)
{
    var options = ["rock", "paper", "scissors"]
    var humanChoice = human.toLowerCase()
    var computerChoice = computer.toLowerCase()
    humanChoice = options.indexOf(humanChoice)
    computerChoice = options.indexOf(computerChoice)

    if ((humanChoice == 0 && computerChoice == 2) || (humanChoice == 1 && computerChoice == 0) || (humanChoice == 2 && computerChoice == 1))
    {
        humanScore++
        alert("You won! Your choice was " + human.toLowerCase() + " and computer choice was " + computer.toLowerCase())
    }

    else if (humanChoice != computerChoice)
    {
        computerScore++;
        alert("You lost! Your choice was " + human.toLowerCase() + " and computer choice was " + computer.toLowerCase())
    }

    else 
    {
        alert("You tied! Your choice was " + human.toLowerCase() + " and computer choice was " + computer.toLowerCase())
    }

}

function playGame()
{
    for(i=0; i<5; i++)
    {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        alert("The current score is You: " + humanScore + " Computer: " + computerScore)

        if (i == 4)
        {
            alert("Final score is You: " + humanScore + " Computer: " + computerScore)
        }
    }
}

playGame()
