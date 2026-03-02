// Multiplication Table
// Write a program to print the multiplication table of a given number (e.g., 5) up to 10. Hint: Multiply the loop counter by the input number in each iteration.

const number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}