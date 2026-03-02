// Sum of First N Numbers
// Create a program that calculates the sum of numbers from 1 to a user-defined number n. Hint: Use a variable to accumulate the sum inside the loop.

const n = 20;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first", n, "numbers:", sum);