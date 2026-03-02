// Password Attempts
// Simulate a login system that allows 3 password attempts. Exit the loop if the correct password is entered. Hint: Use a while loop with a counter and break on correct input.

const correctPassword = "letmein";
let attempts = 0;
const maxAttempts = 3;
let password = "letmein";

while (attempts < maxAttempts) {
    console.log("Enter password:");
    if (password === correctPassword) {
        console.log("Login successful!");
        break;
    } else {
        attempts++;
        console.log(`Incorrect password. You have ${maxAttempts - attempts} attempts left.`);
    }
}

if (attempts === maxAttempts && password !== correctPassword) {
    console.log("Too many failed attempts. Access denied.");
}