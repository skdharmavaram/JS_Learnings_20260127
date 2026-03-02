// Skip Multiples of 3
// Print numbers from 1 to 20, skipping multiples of 3. Hint: Use continue with the modulo operator.

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}