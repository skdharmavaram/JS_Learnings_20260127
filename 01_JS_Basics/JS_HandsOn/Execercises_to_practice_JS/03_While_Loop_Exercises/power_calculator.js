// Power Calculator
// Calculate the power of a number (e.g., 2^5) using a while loop. Hint: Multiply the base by itself in each iteration until the exponent is reached.

const base = 2;
const exponent = 5;
let result = 1;
let count = 0;
while (count < exponent) {
    result *= base;
    count++;
}
console.log(`${base} raised to the power of ${exponent} is ${result}`);