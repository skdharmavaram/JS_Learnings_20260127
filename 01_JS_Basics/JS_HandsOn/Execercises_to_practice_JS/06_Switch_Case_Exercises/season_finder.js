// Season Finder
// Take a month number (1-12) and print the season (Winter, Spring, Summer, Fall) using a switch. Hint: Group months into cases for each season.

let month = 7;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Fall");
        break;
    default:
        console.log("Invalid month number");
}