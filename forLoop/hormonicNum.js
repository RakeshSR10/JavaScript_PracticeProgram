const prompt = require('prompt-sync')();
var userNumber = parseInt(prompt("Enter your number : "));
var sum = 0;
//for loop printing hormonic numbers.
for (let i = 1; i <= userNumber; i++) {
    console.log("1/"+ i +"+");
    //sum computation of hormonic number.
    sum = sum + i;
}
console.log("="+ sum.toFixed(2));