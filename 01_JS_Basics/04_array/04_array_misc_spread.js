const players = ["Kohli", "Dhoni", "Rohit", "Bumrah"];
console.log("Players: ", players);

//an array of old cricket players
const oldPlayers = ["Kapil", "Saurav", "Dravid", "Sachin"];
console.log("Old Players: ", oldPlayers);

players.push("Jadeja"); //adding a new player at the end
console.log("Players after addition: ", players);

//pushing old players as a single element
players.push(oldPlayers);
console.log("Players after pushing old players as single element: ", players);

//pushing old players into players array using push and spread operator
players.push(...oldPlayers);
console.log("Players after pushing old players: ", players);

//inserting old players into players array
const allPlayers = [...players, ...oldPlayers];
console.log("All Players: ", allPlayers);

//same results can be achieved using concat method
const allPlayersConcat = players.concat(oldPlayers);
console.log("All Players using concat: ", allPlayersConcat);

//.flat() method used to add old players instead of old players array indexed element
players.push(oldPlayers);
console.log(players.flat());

//flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const nestedArray = [1, 2, [3, 4, [5, 6]]];
console.log("Nested Array: ", nestedArray);

const flattenedArray = nestedArray.flat(2); // flattening up to depth 2
console.log("Flattened Array: ", flattenedArray); // [1, 2, 3, 4, 5, 6]

