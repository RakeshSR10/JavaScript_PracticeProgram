const prompt = require('prompt-sync')();
var number = parseInt(prompt("Enter only Number (1, 10, 100, 1000, 10000, 100000) : "));

switch (number) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;  
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("1 Lakh");
        break;
    default:
        console.log("Invalid Option...!");          
} 