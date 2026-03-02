// Reverse String
// Write a program to print a string’s characters in reverse order using a for loop. Hint: Start the loop from the last index (string.length - 1) and decrement.

const str = "Hello, World!";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log("Reversed String:", reversedStr);