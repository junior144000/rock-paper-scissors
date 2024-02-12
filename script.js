
let humanChoice = prompt('chose rock paper or scissors');
let savedComputerChoice =getComputerChoice();
let playersChoice = humanChoice + ',' + savedComputerChoice;

function getComputerChoice (){
    let randomNumber = Math.floor((Math.random() * 3) + 0);
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];

}


function playRound(){
   

}

function checkWinner(){
    if(humanChoice==savedComputerChoice){
        return('DRAW');
    }
     else if (humanChoice=='rock'){
        return(savedComputerChoice=='scissors')? 'you win rock beets scissors':'you lose '+ 
                                                  savedComputerChoice+" beets rock";
    }
    else if(humanChoice=='paper'){
        return(savedComputerChoice== 'rock')? 'you win paper beets rock':'you lose '+ 
                                               savedComputerChoice+" beets paper";
    }
    else if(humanChoice=='scissors'){
        return(savedComputerChoice=='paper')? 'you win scissors beets paper':'you lose '+ 
                                               savedComputerChoice+" beets scissors";
    }
    
}

console.log(checkWinner());
console.log(playersChoice);