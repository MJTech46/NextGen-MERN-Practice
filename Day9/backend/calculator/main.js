// main.js

import { add, subtract, multiply, divide } from './calculator.js';

// Get the command-line arguments
const args = process.argv.slice(2); // Slice to remove the first two elements (Node.js path and script path)

// Ensure that we have exactly two numbers
if (args.length !== 2) {
    console.log('Usage: node main.js <num1> <num2>');
    process.exit(1);
}

// Parse the numbers from the arguments
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Check if the numbers are valid
if (isNaN(num1) || isNaN(num2)) {
    console.log('Error: Please provide valid numbers.');
    process.exit(1);
}

// Perform all the operations
console.log(`Operations on ${num1} and ${num2}:`);
console.log(`Addition: ${add(num1, num2)}`);
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);
console.log(`Division: ${num2 !== 0 ? divide(num1, num2) : 'Cannot divide by zero'}`);

