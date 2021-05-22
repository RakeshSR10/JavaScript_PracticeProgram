const prompt = require('prompt-sync')();
var number = parseInt(prompt("Enter Temperature in number : "));
let result = celsiusToFahren(number);
let result1 = FahrenToCels(number);

function celsiusToFahren(number) {
    let celsiusTemp =  number;
    let celsiusToFahrenheit = celsiusTemp * 9 / 5 + 32;
    let message = celsiusTemp +' C is = '+ celsiusToFahrenheit +' F';
    console.log(message);
}

function FahrenToCels(number) {
    let fahrenTemp =  number;
    let FahrenheitToCelsius = (fahrenTemp - 32) * 5 / 9;
    let message = fahrenTemp +' F is = '+ FahrenheitToCelsius +' C';
    console.log(message);
}
