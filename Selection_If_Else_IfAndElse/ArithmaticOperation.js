//UC3 - Ability to perform Arithmatic Operation find max and min 
let a = 8;
let b = 5;
let c = 10;

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

let maximum = Math.max(result1, result2, result3, result4);
let minimum = Math.min(result1, result2, result3, result4);

console.log("Maximum = "+maximum);
console.log("Minimum = "+minimum);

//Find maximum of 4 numbers
if(result1 > result2)
{
    if(result1 > result3)
    {
        if(result1 > result4)
        {
            console.log("Maximum of 4 numbers = "+result1);
        }
        else
        {
            console.log("Maximum of 4 numbers = "+result4);
        }
    }
}
else if(result2 > result3)
{
    if(result2 > result4)
    {
        console.log("Maximum of 4 numbers = "+result2);
    }
    else
    {
        console.log("Maximum of 4 numbers = "+result4);
    }
}
else if(result3 > result4)
{
    console.log("Maximum of 4 numbers = "+result3);
}
else
{
    console.log("Maximum of 4 numbers = "+result4);
}

//Find Minimum of 4 numbers
if(result1 < result2)
{
    if(result1 < result3)
    {
        if(result1 < result4)
        {
            console.log("Minimum of 4 numbers = "+result1);
        }
        else
        {
            console.log("Minimum of 4 numbers = "+result4);
        }
    }
}
else if(result2 < result3)
{
    if(result2 < result4)
    {
        console.log("Minimum of 4 numbers = "+result2);
    }
    else
    {
        console.log("Minimum of 4 numbers = "+result4);
    }
}
else if(result3 < result4)
{
    console.log("Minimum of 4 numbers = "+result3);
}
else
{
    console.log("Minimum of 4 numbers = "+result4);
}