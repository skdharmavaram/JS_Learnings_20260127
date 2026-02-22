// Animal Sound
// Take an animal name (e.g., "dog", "cat", "cow") and print its sound ("Woof", "Meow", "Moo") using a switch. Hint: Use a default case for unknown animals.

let animal = "cat";
switch (animal) {
    case "dog":
        console.log("Woof");
        break;
    case "cat":
        console.log("Meow");
        break;
    case "cow":
        console.log("Moo");
        break;
    default:
        console.log("Unknown animal sound");
}