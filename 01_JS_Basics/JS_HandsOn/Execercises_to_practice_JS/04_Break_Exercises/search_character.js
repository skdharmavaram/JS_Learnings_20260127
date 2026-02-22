// Search Character
// Search a string for the first occurrence of the letter "a" and stop. Print its position or "Not found". Hint: Use a for loop and break when "a" is found.

const str = "javascript exercises";
let position = -1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
        position = i;
        break;
    }
}

if (position !== -1) {
    console.log("Position of first 'a':", position);
} else {
    console.log("Not found");
}