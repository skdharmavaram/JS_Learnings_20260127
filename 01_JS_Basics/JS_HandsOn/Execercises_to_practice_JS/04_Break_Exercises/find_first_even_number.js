// Find First Even Number
// Given an array of numbers, print the first even number and stop. Hint: Loop through the array and use break after finding an even number.

const numbers = [1, 3, 7, 8, 10, 13, 14];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log("First even number:", numbers[i]);
        break;
    }
}