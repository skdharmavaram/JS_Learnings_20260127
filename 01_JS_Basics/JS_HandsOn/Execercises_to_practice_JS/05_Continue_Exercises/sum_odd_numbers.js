// Sum Odd Numbers
// Calculate the sum of odd numbers from 1 to 20, skipping even numbers. Hint: Use continue to skip even numbers in a for loop.

let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    sum += i;
}
console.log("Sum of odd numbers:", sum);