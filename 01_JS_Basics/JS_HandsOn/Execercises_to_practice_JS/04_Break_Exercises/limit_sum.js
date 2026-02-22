// Limit Sum
// Sum numbers from 1 to 100 but stop if the sum exceeds 50. Print the sum and the last number added. Hint: Use a while loop and break when the sum condition is met.

let sum = 0;
let lastNumber = 0;
let i = 1;

while (i <= 100) {
    sum += i;
    lastNumber = i;
    if (sum > 50) {
        break;
    }
    i++;
}

console.log("Sum:", sum);
console.log("Last number added:", lastNumber);