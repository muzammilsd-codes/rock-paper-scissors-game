humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = "";
    if (humanChoice == computerChoice)
    {
        result = "its a tie";
    }
    else if ((humanChoice=="paper"&&computerChoice=="rock") || 
    (humanChoice=="rock"&&computerChoice=="scissors") || 
    (humanChoice=="scissors"&&computerChoice=="paper")){
        result = "you win";
        humanScore+=1;
    }
    else {
        result = "computer wins";
        computerScore+=1;
    }
    
    
    const computerchoice = document.querySelector("#computerchoice");
    computerchoice.textContent = "Computer's choice: " + computerChoice;
    const displayresult = document.querySelector("#result");
    displayresult.textContent= "result: "+ result;
    const score = document.querySelector("#score");
    score.textContent = "your score: "+ humanScore + " computer's score: " + computerScore;
    
}
function getComputerChoice (){
    let remainder = Math.floor((Math.random()*100))%3;
    if (remainder == 0){
        return "rock";
    }
    else if (remainder == 1)
    {
        return "scissors";
    }
    else
    {
        return "paper";
    }
}
function play (choice) {
    const computerSelection = getComputerChoice();
    playRound(choice, computerSelection);
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => { 
    play("rock"); });
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    play("paper"); });
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    play("scissors"); });





