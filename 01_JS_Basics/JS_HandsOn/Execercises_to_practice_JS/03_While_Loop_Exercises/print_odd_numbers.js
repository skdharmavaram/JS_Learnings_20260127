// Print Odd Numbers
// Print all odd numbers from 1 to 20 using a while loop. Hint: Check if the counter is odd using modulo and increment by 1.

let i = 1;
while (i <= 20) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}