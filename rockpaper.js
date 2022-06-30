const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
let gamePlay = true; 
//Chose for the computer 
const options = ['rock', 'paper', 'scissors'];
let compRandom = Math.floor(Math.random() * 3); 
let computerChoice = options[compRandom]; 
let winner;

while (gamePlay){


    //Asks player if they would like to play the game again 
    prompt("Let's play rock, paper, scissors! What will you pick?")
    let userChoice = readline.question().toLowerCase()
    
    // if(userChoice !='rock' || userChoice !='paper' || userChoice !='scissors' || userChoice !='bomb'){
    //   prompt("That's not a valid choice. Try again: rock, paper, scissors?")
    //   let userChoice = readline.question().toLocaleUpperCase()
    // }

   //Fun time

   //Game Logic 
   if(userChoice===computerChoice){
     prompt("It's a draw!")
     break

   } 
   else if(userChoice==='rock' &&computerChoice !=='paper'){
      winner = 'You'; 
    }else if(userChoice ==='paper' && computerChoice !=='scissors'){
      winner = 'You'
    }else if(userChoice ==='scissors' && computerChoice !=='rock'){
      winner = 'You'
    }else{
      winner = 'Computer'
    }

    //Play again? 
    prompt(`Computer chose ${computerChoice}.`)
    prompt(`You chose ${userChoice}`)
    console.log(' ')
    prompt(`${winner} won the game! Play again?  Yes or No?`); 
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
    if (answer[0] == 'n' ){
        gamePlay = false; 
    }

}