// Menu Selector
// Create a program that displays a menu (1 = Pizza, 2 = Burger, 3 = Salad) and prints the selected item using a switch. Hint: Use cases for each menu option and a default for invalid choices.

let menuChoice = 2;
switch (menuChoice) {
    case 1:
        console.log("Pizza");
        break;
    case 2:
        console.log("Burger");
        break;
    case 3:
        console.log("Salad");
        break;
    default:
        console.log("Invalid menu choice");
}