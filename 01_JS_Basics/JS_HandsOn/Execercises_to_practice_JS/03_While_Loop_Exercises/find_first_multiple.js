// Find First Multiple
// Write a program to find the smallest multiple of a given number that is greater than 100. Hint: Start with the number and keep adding it until the result exceeds 100.

const number = 3;
let multiple = number;
while (multiple <= 100) {
    multiple += number;
}
console.log("Smallest multiple greater than 100:", multiple);