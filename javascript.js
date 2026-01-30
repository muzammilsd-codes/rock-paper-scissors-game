humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice)
    {
        console.log("its a tie")
    }
    else if ((humanChoice=="paper"&&computerChoice=="rock") || 
    (humanChoice=="rock"&&computerChoice=="scissors") || 
    (humanChoice=="scissors"&&computerChoice=="paper")){
        console.log("you win");
        humanScore+=1;
    }
    else {
        console.log("computer wins");
        computerScore+=1;
    }
    console.log(computerChoice)
    console.log("humanScore="+ humanScore+ ", computerScore="+ computerScore)
}
function getHumanChoice (){
    let choice = prompt("choose rock paper or scissors").toLowerCase();
    if(choice!="rock"&&choice!="scissors"&&choice!="paper"){
        getHumanChoice();
    } 
    return choice;
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


for(let i = 0; i<5; i++)
{
 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();
 playRound(humanSelection, computerSelection);
}

