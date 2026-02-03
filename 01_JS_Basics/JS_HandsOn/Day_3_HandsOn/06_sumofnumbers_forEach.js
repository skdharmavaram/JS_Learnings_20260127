// challenge: forEach to calculate the sum of numbers
const numbers = [3, 6, 7, 10, 19, 20, 99];

let sum=0;

numbers.forEach(num => {
    sum += num; // adding each number to sum and storing in sum. Here sum = sum + num
})

console.log("Sum of Numbers:", sum); // Output: Sum of Numbers: 164

