function getComputerChoice (){
    let randomNumber = Math.floor((Math.random() * 3) + 0);
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];

}
console.log(getComputerChoice());