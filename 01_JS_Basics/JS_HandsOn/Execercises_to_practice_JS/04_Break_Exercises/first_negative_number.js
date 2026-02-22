// First Negative Number
// Given an array, find and print the first negative number, then stop. Hint: Use a for loop and break when a negative number is found.

const arr = [3, 5, -2, 7, -8, 4];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log("First negative number:", arr[i]);
        break;
    }
}