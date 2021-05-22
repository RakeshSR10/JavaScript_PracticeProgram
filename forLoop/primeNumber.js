const prompt = require('prompt-sync')();
const userNumber = parseInt(prompt("Enter your number : "));
let flag = true;
//for loop for checking given number is primr or not
for (let i=2; i< userNumber-1; i++) {
    if (userNumber % i == 0) {
        flag = false;
        break;
    }
    //if condition for checking given number is prime or not
    if (flag == true) {
         console.log("Given "+ userNumber+ " is Prime.");
        } else {
            console.log("Given "+ userNumber+ " is Not Prime.");
    }    
}