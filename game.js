function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random()*options.length);
    return options[index];
}
function playRound(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return("Tie");
    }
    else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection.toLowerCase() === "scissors"){
            return("Player");
        }
        else {
            return("Computer");
        }
    }
    else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection.toLowerCase() === "rock"){
            return("Player");
        }
        else {
            return("Computer");
        }
    }
    else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection.toLowerCase() === "paper"){
            return("Player");
        }
        else {
            return("Computer");
        }
    }
    else {
        return("Invalid choice!");
    }
}
function printResult(result,playerSelection,computerSelection) {
    if (result === "Player"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (result === "Computer"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        console.log("Its a Tie!");
    }
}
function game(){
    let compPoints = 0;
    let playerPoints = 0;
    for(let i = 0; i <5;i++){
        let playerSelection = prompt("Enter your choice: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        if (result === "Player"){
            playerPoints++;
        }
        else if (result === "Computer"){
            compPoints++;
        }
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
