const prompt = require('prompt-sync')();
var number = parseInt(prompt("Enter only Number (1 to 7) view day in words : "));

switch (number) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;  
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("FiThursdayve");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Option...!");          
} 