//Allows for user input
const readline = require('readline-sync');

console.log('Welcome to Calculator!');
// Ask the user for the first number.
console.log("What's the first number?");
let number1 = readline.question();

// Ask the user for the second number.
console.log("What's the second number?");
let number2 = readline.question();
console.log(`${number1} ${number2}`);

// Ask the user for an operation to perform.
console.log('What operation would you like to perform?\n1) Add (+) \n2) Subtract (-) \n3) Multiply (*) \n4) Divide(/)');
let operation = readline.question();
// Perform the operation on the two numbers.
let output;
let numStack = [number1, number2]; 
if (operation === '+') { // '+' represents addition
  output = Number(number1) + Number(number2);
}
else if (operation === '-'){ // '-' represents subtraction 
    output = Number(number1) - Number(number2);
}
else if (operation === '*'){ // '*' represents multiplication 
    output = Number(number1) * Number(number2);
}
else if (operation === '/'){ // '/' represents division 
    output = Number(number1) / Number(number2);
     
}
else{
    console.log('Error, try again.')
}
// Print the result to the terminal.
//This is for number outside the number regions
if(output === NaN){
    console.log('Note operation may not make sense.')
}
//wouldn't it be cool to do a reverse polish calculator for this project? God, Fullstack was dumb 
//Also dumb - Math does not have a built in round to degrees of specificity method 
console.log(`Reverse Polish Notation: ${number1} ${number2} ${operation}`); 
console.log(`Output: ${Math.round(output * 100) / 100}`); 

//Come back and try to do the Fullstack Polish Calculator thing 