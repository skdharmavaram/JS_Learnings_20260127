// Count Digits
// Write a program to count the number of digits in a positive integer. Hint: Divide the number by 10 in each iteration until it becomes 0.

let number = 1234; 
let count = 0;
while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
}
console.log("Number of digits:", count);