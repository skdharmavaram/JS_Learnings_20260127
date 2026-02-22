// Count Consonants
// Count the number of consonants in a string, skipping vowels. Hint: Use continue to skip vowel checks and increment a counter.

const str = "Hello World";
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let consonantCount = 0;

for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
        continue;
    }
    consonantCount++;
}

console.log("Number of consonants:", consonantCount);