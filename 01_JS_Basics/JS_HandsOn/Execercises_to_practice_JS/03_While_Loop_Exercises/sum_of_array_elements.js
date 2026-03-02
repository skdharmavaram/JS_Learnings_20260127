// Sum of Array Elements
// Given an array (e.g., [10, 20, 30]), calculate the sum of its elements using a while loop. Hint: Use an index to access array elements and increment it.

const numbers = [10, 20, 30];
let sum = 0;
let index = 0;
while (index < numbers.length) {
    sum += numbers[index];
    index++;
}
console.log("Sum of array elements:", sum);