// Stop at Vowel
// Loop through a string and print characters until a vowel is encountered, then stop. Hint: Use break when a vowel is detected.

const str = "javascript";
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        break;
    }
    console.log(str[i]);
}