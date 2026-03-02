// Sum Until Limit
// Create a program that keeps adding numbers (1, 2, 3, …) until the sum exceeds a user-defined limit. Print the final sum. Hint: Use a while loop to check if the sum is below the limit.

const limit = 20;
let sum = 0;
let number = 1;
while (sum < limit) {
    sum += number;
    number++;
}
console.log("Final sum:", sum);