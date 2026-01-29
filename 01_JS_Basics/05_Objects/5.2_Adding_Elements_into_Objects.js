const player = {};

player.name = "Virat Kohli";
player.age = 34;
player.country = "India";
player.isCaptain = true;
player.skills = ["Batting", "Fielding", "Running"];

console.log("Player Object after additions:", player);

// Adding a method to the object
player.getProfile = function() {
    return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}, Captain: ${this.isCaptain}`;
};
console.log("Player Profile:", player.getProfile());

// Adding a nested object
player.stats = {
    matches: 254,
    runs: 12040,
    average: 59.07
};
console.log("Player Stats:", player.stats);
console.log("Player Matches:", player.stats.matches);
console.log("Player Runs:", player.stats.runs);
console.log("Player Average:", player.stats.average);

// Adding a new achievement to the skills array
player.skills.push("Leadership");
console.log("Player Skills after addition:", player.skills);    

const player1 = {
    id : 1,
    name: "MS Dhoni",
    age: 39,
    city: "Ranchi"
};

const player2 ={
    id : 2,
    name: "Rohit Sharma",
    age: 33,
    city: "Mumbai"
}


console.log("Player1:", player1);
console.log("Player2:", player2);

// Adding a new property 'team' to both player objects
player1.team = "India";
player2.team = "India";
console.log("Player1 after adding team:", player1);
console.log("Player2 after adding team:", player2);

const players = {player1, player2};
console.log("Players:", players);

// Option 1: Click on the collapsed {...} objects in console to expand them manually

// Option 2: Use JSON.stringify() to force full output
console.log("Players (JSON.stringify):", JSON.stringify(players, null, 2));

// Option 3: Use console.dir() with depth option (Node.js)
console.dir(players, { depth: null });

// Option 4: Log each player separately
console.log("Player1 inside players:", players.player1);
console.log("Player2 inside players:", players.player2);

// const players1 = Object.assign({}, player1, player2);
// console.log("Players1:", players1);

// // Adding a method to display player details
// players.displayPlayerDetails = function(player) {
//     return `ID: ${player.id}, Name: ${player.name}, Age: ${player.age}, City: ${player.city}, Team: ${player.team}`;
// };
// console.log("Player1 Details:", players.displayPlayerDetails(player1));
// console.log("Player2 Details:", players.displayPlayerDetails(player2));

//spread operator
const players1 = {...player1, ...player2};
console.log("Players object:", players);

console.log("Keys: ", Object.keys(players));
console.log("Values: ", Object.values(players));

const player3 = { 
    id : 3,
    country: "India",
    Sports: "Cricket"
}

const updatedPlayer1 = {...player1, ...player3}; //spread operator to merge player1 and player3
console.log("Updated Player1:", updatedPlayer1);