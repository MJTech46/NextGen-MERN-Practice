// calculator.js

// Addition function
export function add(a, b) {
    return a + b;
}

// Subtraction function
export function subtract(a, b) {
    return a - b;
}

// Multiplication function
export function multiply(a, b) {
    return a * b;
}

// Division function
export function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

