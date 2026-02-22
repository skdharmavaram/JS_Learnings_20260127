// Vowel Checker
// Write a program that checks if a given character is a vowel (a, e, i, o, u) or a consonant. Hint: Use logical OR (||) to check multiple conditions in an if statement.
// Simple Vowel Checker (Terminal)

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter a single character: ', char => {
    const lowerChar = char.toLowerCase();
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        console.log("It's a vowel.");
    } else {
        console.log("It's a consonant.");
    }
    readline.close();
});