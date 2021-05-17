//UC2 - write a program that reads 5 random 2 digit values and find their sum and average
let randomNumber1 = Math.floor(100 + Math.random() * 900);
let randomNumber2 = Math.floor(100 + Math.random() * 900);
let randomNumber3 = Math.floor(100 + Math.random() * 900);
let randomNumber4 = Math.floor(100 + Math.random() * 900);
let randomNumber5 = Math.floor(100 + Math.random() * 900);

console.log(randomNumber1+", "+randomNumber2+", "+randomNumber3+", "+randomNumber4+", "+randomNumber5);

let maximum = Math.max(randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5);
let minimum = Math.min(randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5);

console.log("Maximum of 5 random numbers = "+ maximum);
console.log("Minimum of 5 random numbers = "+ minimum);