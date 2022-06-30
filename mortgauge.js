//Accept user input
const readline = require('readline-sync');

//Initalizing variables to be numbers 
let loanAmount; // loan amount
let interestRate; // monthly interest rate
let loanDuration; // loan duration in months

function prompt(message) {
    console.log(`=> ${message}`);
  }

//Check to make sure input is correct 
function isInvalidNumber(number) {
    return number.trim() === '' ||
           Number(number) < 0   ||
           Number.isNaN(Number(number));
  }

//Asking for input while true, or the 'n' hasn't been typed 
//
while (true){
prompt('---<='); 
prompt("Congratulations on thinking about buying a house!");
prompt("WARNING: Type ONLY numbers. All calculations are in USD.");
prompt('---<='); 

prompt("How much are you comfortable borrowing?");
loanAmount = readline.question();
while (isInvalidNumber(loanAmount)) {
    prompt('Must enter a positive number');
    amount = readline.question();
  }

console.log("What is the current national interest rate?"); 
interestRate = readline.question();

console.log(`How long would you like for your mortgage to last in months? 
NOTE: 15 yrs is 180 months
30 yrs is 360 months. `) 
// I thought this would be an easier ask than thinking of a mortgauge in months 
loanDuration = readline.question();
while (isInvalidNumber(loanDuration)) {
    prompt('Must enter a positive number');
    amount = readline.question();
  }

//monthly payment needs to go after you ask the needed questions 
let monthlyPayment = Number(loanAmount) * ((Number(interestRate)/100) 
                    / (1 - Math.pow((1 + Number(interestRate)/100), (-Number(loanDuration))))); 
//remember, Interest Rate needs to be divided by 100. 
monthlyPayment = Math.round(monthlyPayment); 

console.log(`Loan Amount: $ ${loanAmount}
\n Interest Rate: ${interestRate}% 
\n Loan Duration: ${loanDuration} months 
\n Monthly Payment: $ ${monthlyPayment.toFixed(2)}`)

prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;

}
/*
**
*/ 
