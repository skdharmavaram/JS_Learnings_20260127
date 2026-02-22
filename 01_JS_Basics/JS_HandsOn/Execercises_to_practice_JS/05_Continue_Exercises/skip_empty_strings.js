// Skip Empty Strings
// Given an array of strings, print only non-empty strings, skipping empty ones. Hint: Use continue when the string length is 0.

let strings = ["Hello", "", "World", "", "JavaScript", ""];

for (let i = 0; i < strings.length; i++) {
    if (strings[i].length === 0) {
        continue;
    }
    console.log(strings[i]);
}