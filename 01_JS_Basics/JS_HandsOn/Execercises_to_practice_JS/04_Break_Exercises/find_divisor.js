// Find Divisor
// Find the smallest divisor of a number (other than 1) and stop once found. Hint: Use a for loop and break when a divisor is found.

const number = 29; 
let divisor = null;

for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        divisor = i;
        break;
    }
}

console.log("Smallest divisor:", divisor);