
const players = ["Virat", "Rohit", "Dhoni", "Kohli"];

// destructuring the array in function parameter
// function showPlayers([p1, p2, p3, p4]) {
//     console.log("Team is ");
//     console.log("Player 1:", p1);
//     console.log("Player 2:", p2);
//     console.log("Player 3:", p3);
//     console.log("Player 4:", p4);
// }

// // showPlayers(players);
// showPlayers(["Dhawan", "Pant", "Bumrah", "Jadeja", "Ashwin"]);  // // more players
// ------------------------------------

// // destructuring the array in function parameter
function showPlayers([captain, viceCaptain, ...others]) { // ...rest opearator is always at the end
    console.log("Team is ");
    console.log("Captain:", captain);
    console.log("Vice Captain:", viceCaptain);
    console.log("Other Players:", others);
}

// showPlayers(players);
// showPlayers(["Dhawan", "Pant", "Bumrah", "Jadeja", "Ashwin"]);  // more players
// ------------------------------------

// showPlayers(["Dhawan"]);  // less players
// showPlayers([]);  // no players
// showPlayers();  // undefined is not iterable: Error
// --------------------------------------

// destructuring the array in function parameter: ignoring first two elements
function showPlayers([, , captain, viceCaptain, ...others]) { // ...rest opearator is always at the end
    console.log("Team is ");
    console.log("Captain:", captain);
    console.log("Vice Captain:", viceCaptain);
    console.log("Other Players:", others);
}

showPlayers(["Dhawan", "Pant", "Bumrah", "Jadeja", "Ashwin"]);  // more players

