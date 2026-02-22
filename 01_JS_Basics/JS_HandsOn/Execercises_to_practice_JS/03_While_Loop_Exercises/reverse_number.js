// Reverse Number
// Write a program to reverse a given number (e.g., 123 becomes 321). Hint: Extract digits using modulo (%) and build the reversed number.

let number = 123;
let reversedNumber = 0;
while (number > 0) {
    reversedNumber = reversedNumber * 10 + number % 10;
    number = Math.floor(number / 10);
}
console.log("Reversed number:", reversedNumber);