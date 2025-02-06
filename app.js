//Importing the math module
const math = require('./math');

//using the functions from the module
const num1 = 10;
const num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${math.add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${math.subtract(num1, num2)}`);