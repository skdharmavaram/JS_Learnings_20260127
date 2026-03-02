// Positive Numbers Only
// Given an array, sum only the positive numbers, skipping negatives. Hint: Use continue when an element is less than 0.

let numbers = [10, -5, 3, -1, 7, -2, 8];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue;
    }
    sum += numbers[i];
}

console.log("Sum of positive numbers:", sum);