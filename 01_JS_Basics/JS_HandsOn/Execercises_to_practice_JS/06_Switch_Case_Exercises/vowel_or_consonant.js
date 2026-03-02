// Vowel or Consonant
// Write a program that takes a character and uses a switch to determine if it’s a vowel or consonant. Hint: Use cases for each vowel and a default for consonants.

let char = 'e';
switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}