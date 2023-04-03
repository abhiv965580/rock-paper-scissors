let compPoints = 0;
let playerPoints = 0;
let options = ["Rock", "Paper", "Scissors"];

getComputerChoice = () => options[Math.floor(Math.random() * options.length)]

playRound = (playerSelection,computerSelection) => {
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            switch(computerSelection.toLowerCase()) {
                case 'paper':
                    return("Computer");
                case 'scissors':
                    return("Player");
                default:
                    return("Tie");
            }
        case 'paper':
            switch(computerSelection.toLowerCase()) {
                case 'scissors':
                    return("Computer");
                case 'rock':
                    return("Player");
                default:
                    return("Tie");
            }
        case 'scissors':
            switch(computerSelection.toLowerCase()) {
                case 'rock':
                    return("Computer");
                case 'paper':
                    return("Player");
                default:
                    return("Tie");
            }
        default:
            return("Invalid Choice");
    }
}

printResult = (result,playerSelection,computerSelection) => {
    switch(result) {
        case "Player":
            playerPoints += 1;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            break;
        case "Computer":
            compPoints += 1;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            break;
        case "Tie":
            console.log("Its a Tie!");
            break;
        default:
            console.log("Invalid Choice");
    }
}

game = () => {
    for(let i = 0; i <5;i++){
        let playerSelection = prompt("Enter your choice: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        printResult(result,playerSelection,computerSelection);
    }
    if (playerPoints > compPoints){
        alert("Player is the Winner!");
    }
    else if (playerPoints < compPoints){
        alert("Computer is the Winner!");
    }
    else {
        alert("It's a Tie!");
    }
}

game();
