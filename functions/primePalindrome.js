const prompt = require('prompt-sync')();
var number = parseInt(prompt("Enter your number : "));
let result = palindrome(number);
let result1 = prime(number);
console.log("Given number is : "+result);
console.log("Given number is : "+result1);
//check given number is palindrome or not.
function prime(number) {
    let flag=0
    for (let i=2; i<number; i++ ) {
        if ( number % i == 0 ) {
            flag=1
            break;
        }
        if (flag == 0 ) {
            return "Prime";
        } else {
            return "Not Prime number";
        } 
    }       
}

function palindrome(number) {
    let rev = 0;
    let rem =" ";
    let temp = number;

    while (number > 0) {
        rem = number % 10 ;
        rev = rev * 10 + rem ;
        number = parseInt(number / 10);
    }
    if (temp === rev) {
        return "Palindrome";
        } else {
            return "Not palindrome number";
    }
}    
