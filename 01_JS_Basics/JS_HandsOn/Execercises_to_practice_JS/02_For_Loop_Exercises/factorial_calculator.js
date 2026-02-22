// Factorial Calculator
// Write a program to calculate the factorial of a given number using a for loop. Hint: Multiply the loop counter with a running product.

const number = 10; 
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);