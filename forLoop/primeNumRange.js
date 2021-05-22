const prompt = require('prompt-sync')();
const startNumber = parseInt(prompt("Enter Biginning number: "));
const endNumber = parseInt(prompt("Enter Ending number: "));
console.log(`Prime Numbers between ${startNumber} to ${endNumber} :`);
//for loop
for (let i=startNumber; i<=endNumber; i++) {
    let flag = 0;
    for (let j=2; j<i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0){
        console.log(i);
    }
}