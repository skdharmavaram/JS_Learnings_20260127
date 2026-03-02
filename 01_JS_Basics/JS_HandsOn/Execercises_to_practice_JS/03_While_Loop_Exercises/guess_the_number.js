// Guess the Number
// Create a program that repeatedly asks the user to guess a number (e.g., 42) until they get it right. Hint: Use prompt() or a predefined input and a while loop to check guesses.
const targetNumber = 42;
let userGuess = 42; // Replace null with a predefined input for testing
while (userGuess !== targetNumber) {
    console.log("Wrong guess, try again.");
    userGuess += 10; // Simulate new guesses for testing
}
console.log("Congratulations! You've guessed the number:", targetNumber);