// Function Parameter without Destructuring
// function showPlayer(player) {
//     console.log("I am " + player.name + ", from " + player.city);
// }

// showPlayer({id: 11, name: "Virat", city: "Delhi"});
// --------------------------------

// Function Parameter with Destructuring
// id is completely ignored by the function as it's not useful
// function showPlayer({name, city}) {  // destructuring the parameter
//     console.log("I am " + name + ", from " + city);
// }

// showPlayer({id: 11, name: "Virat", city: "Delhi", city: "Mumbai"});

// --------------------------------
// Function Parameter with Destructuring and Default values

function showPlayer({name="Guest", city="unknown"}) {  // destructuring the parameter
    console.log("Welcome " + name + " from " + city);
}


showPlayer({id: 11, name: "Virat", city: "Delhi"});
showPlayer({}); // Welcome Guest from unknown
showPlayer({id: 12}); // Welcome Guest from unknown
