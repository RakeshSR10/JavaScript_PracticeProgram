//UC1 - write a program that reads 5 random 2 digit values and find their sum and average
let sum =0;
let average;

let randomNumber1 = Math.floor(10 + Math.random() * 90);
let randomNumber2 = Math.floor(10 + Math.random() * 90);
let randomNumber3 = Math.floor(10 + Math.random() * 90);
let randomNumber4 = Math.floor(10 + Math.random() * 90);
let randomNumber5 = Math.floor(10 + Math.random() * 90);

console.log(randomNumber1+", "+randomNumber2+", "+randomNumber3+", "+randomNumber4+", "+randomNumber5);
sum = randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4 + randomNumber5;
average = sum/5;
console.log("Sum of 5 random numbers = "+sum);
console.log("Average = "+average);