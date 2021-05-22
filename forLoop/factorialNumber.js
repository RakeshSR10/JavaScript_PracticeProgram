const prompt = require('prompt-sync')();
const userNumber = parseInt(prompt("Enter your number : "));
var total = 1;
//for loop
for (let i=0; i < userNumber; i++) {
    total = total * (userNumber - i);
}
//print all Factorial of given number
console.log("Factorial of given "+userNumber+"! number = "+ total);