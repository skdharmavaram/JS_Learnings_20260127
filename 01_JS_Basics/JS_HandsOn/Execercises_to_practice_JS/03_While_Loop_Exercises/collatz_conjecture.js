// Collatz Conjecture
// For a given number, repeatedly apply the rule: if even, divide by 2; if odd, multiply by 3 and add 1. Stop when the number becomes 1. Print the sequence. Hint: Use a while loop to check if the number is not 1.

let number = 15; 
console.log("Collatz Conjecture Sequence:");
while (number !== 1) {
    console.log(number);
    if (number % 2 === 0) {
        number = number / 2;
    } else {
        number = (number * 3) + 1;
    }
}
console.log(number);