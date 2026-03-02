// Prime Number Check
// Check if a number is prime by testing divisibility up to its square root. Stop if a divisor is found. Hint: Use break when a number divides evenly.

const number = 29;
let isPrime = true;

for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(`${number} is ${isPrime ? "prime" : "not prime"}`);