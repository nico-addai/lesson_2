//Refactor - Walk-through: Calculator
//Allows for user input
const readline = require('readline-sync');
function prompt(message) {
    console.log(`=> ${message}`);
  }
function invalidNumber(number) {
    return number.trimStart() === '' || Number.isNaN(Number(number));
  }

console.log('Welcome to Calculator!');
// Ask the user for the first number.
prompt("What's the first number?")

let number1 = readline.question();
//Validate number input 
while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

// Ask the user for the second number.
prompt(`What's the second number?`);
let number2 = readline.question();
//console.log(`${number1} ${number2}`);
//Valid number input 
while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }
// Ask the user for an operation to perform.
console.log('What operation would you like to perform?\n1) Add (+) \n2) Subtract (-) \n3) Multiply (*) \n4) Divide(/)');
let operation = readline.question();
// Perform the operation on the two numbers.
let output;

switch (operation) {
  case '+':
    output = Number(number1) + Number(number2);
    break;
  case '-':
    output = Number(number1) - Number(number2);
    break;
  case '*':
    output = Number(number1) * Number(number2);
    break;
  case '/':
    output = Number(number1) / Number(number2);
    break;
  default:
    console.log(`Sorry, cannot parse ${operation}. Try again with '-', '+', '*', or '/'`);
    operation = readline.question();
}
// Print the result to the terminal.
//Also dumb - Math does not have a built in round to degrees of specificity method 
console.log(`Reverse Polish Notation: ${number1} ${number2} ${operation}`); 
console.log(`Output: ${Math.round(output * 100) / 100}`); 

//Come back and try to do the Fullstack Polish Calculator thing 