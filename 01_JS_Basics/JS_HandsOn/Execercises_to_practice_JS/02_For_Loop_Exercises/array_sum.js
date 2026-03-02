// Array Sum
// Given an array of numbers (e.g., [1, 2, 3, 4, 5]), calculate the sum of all elements using a for loop. Hint: Access array elements with array[i] and add to a sum variable.

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);