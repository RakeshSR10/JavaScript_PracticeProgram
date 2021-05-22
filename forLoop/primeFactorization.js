const prompt = require('prompt-sync')();
var userNumber = parseInt(prompt("Enter your number : "));
//for loop for prime factorization.
for (let i=2; i<userNumber * userNumber; i++) {
    while (userNumber %i ==0) {
        console.log(i);
        userNumber = userNumber / i;
    }
}