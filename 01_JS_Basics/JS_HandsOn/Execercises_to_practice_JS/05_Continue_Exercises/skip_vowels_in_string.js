// Skip Vowels in String
// Print all characters in a string, skipping vowels. Hint: Use continue when a vowel is detected.

const str = "Hello World";
const vowels = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        continue;
    }
    console.log(str[i]);
}