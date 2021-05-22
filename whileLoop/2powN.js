const prompt = require('prompt-sync')();
const number = parseInt(prompt("Enter Number : "));
const power = parseInt(prompt("Enter The Power : "));
let counter = 0;
let result = 1;
//while loop for 2 power N
while (power >= counter) {
    result = result * number;
    counter = counter + 1;
}
console.log("The Power of "+ number +" = "+result);