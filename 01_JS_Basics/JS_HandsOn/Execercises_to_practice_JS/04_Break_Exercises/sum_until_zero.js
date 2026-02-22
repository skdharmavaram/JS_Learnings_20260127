// Sum Until Zero
// Keep asking for numbers and sum them until the user enters 0, then stop and print the sum. Hint: Use a while loop with break when input is 0.

let sum = 0;
while (true) {
    let userInput = 0;
    if (userInput === 0) {
        break;
    }
    sum += userInput;
}
console.log("Sum:", sum);