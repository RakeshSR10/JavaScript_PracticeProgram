function palindrome()
{
    let rev = 0;
    let rem = " ";
    let temp = number;
    while (number > 0 ){
        rem = ( number % 10 );
        rev = (rev * 10 + rem );
        number = parseInt( number / 10 );
    }
    if (temp === rev ){
        return "Palindrome";
    } else {
        return "Not palindrome number";
    }
}

const prompt = require('prompt-sync')();
var number = parseInt(prompt("Enter your number : "));
let result = palindrome(number);
console.log(result);