let compPoints = 0;
let playerPoints = 0;
let playerSelection  = "";
let computerSelection  = "";
let body = document.querySelector(".results-container");
let resultsContainer = document.createElement('div');
resultsContainer.className = "results";
body.appendChild(resultsContainer);
let results = document.querySelector('.results');
let scoreContainer = document.querySelector('.scorecard');
let playerScore = document.createElement('div');
playerScore.className = "item";
scoreContainer.appendChild(playerScore);
let compScore = document.createElement('div');
compScore.className = "item";
scoreContainer.appendChild(compScore);
function getComputerChoice(){      //Funtion to get the choice of a computer
    let options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random()*options.length);
    return options[index];
}
function playRound(playerSelection,computerSelection) {  //Function that return who wins the round
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
function printResult(result,playerSelection,computerSelection) {     //Function that prints the result of a round
    if (result === "Player"){
        playerPoints += 1;
        
        let winMsg = document.createElement('div');
        winMsg.style.color = 'green';
        winMsg.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        results.appendChild(winMsg); 
        
    }
    else if (result === "Computer"){
        compPoints += 1;
        let loseMsg = document.createElement('div');
        loseMsg.style.color = 'red';
        loseMsg.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        results.appendChild(loseMsg); 
    }
    else {
        let tieMsg = document.createElement('div');
        tieMsg.style.color = 'grey';
        tieMsg.textContent = `Game Tied`;
        results.appendChild(tieMsg); 
    }
}
function checkResult(){         //function to check whether someone reaches 5 Points
    playerScore.textContent = `${playerPoints}`
    compScore.textContent = `${compPoints}`
    if (compPoints == 5 || playerPoints == 5){
        if (compPoints>playerPoints) {
            alert("You Lose! Better Luck Next TIme");
        }
        else if (playerPoints > compPoints){
            alert("Congrats! You Won!");
        }
        else{
            alert("Game Tied");
        }
        compPoints = 0;
        playerPoints = 0;
        results.innerHTML = '';
    }
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
rock.addEventListener('click',() =>  {
    playerSelection  = "rock";
    computerSelection  = getComputerChoice();
    let res = playRound(playerSelection, computerSelection);
    printResult(res,playerSelection,computerSelection);
    checkResult();
});
paper.addEventListener('click',() => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    let res = playRound(playerSelection, computerSelection);
    printResult(res,playerSelection,computerSelection);
    checkResult();
});
scissors.addEventListener('click',() => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    let res = playRound(playerSelection, computerSelection);
    printResult(res,playerSelection,computerSelection);
    checkResult();
});
