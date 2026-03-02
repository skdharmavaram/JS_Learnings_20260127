// Skip Multiples of 5
// Print numbers from 1 to 50, skipping multiples of 5. Hint: Use continue with the modulo operator.

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        continue;
    }
    console.log(i);
}