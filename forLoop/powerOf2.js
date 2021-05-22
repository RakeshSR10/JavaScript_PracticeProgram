const prompt = require('prompt-sync')();
const baseNumber = parseInt(prompt("Enter base number : "));
const exponensialNumber = parseInt(prompt("Enter exponensial Number : "));
//take temp variable to hold the base number
var temp = baseNumber;
//for loop
for (let i=1; i<exponensialNumber; i++) {
    temp = temp * temp;
}
console.log("Result of "+ baseNumber +" power "+exponensialNumber+" = "+temp);