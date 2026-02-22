// Skip Even Numbers
// Print numbers from 1 to 10, skipping even numbers. Hint: Use continue when the counter is divisible by 2.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}