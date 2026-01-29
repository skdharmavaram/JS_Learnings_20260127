function greet()
{
    var userName = "Sachin"
    console.log("Hello " + userName);
}

// 1. Using var
var playerName = "Sachin";
console.log(playerName);

playerName = "Virat";
console.log(playerName);

var playerName = "Pant"; // redeclaring a variable
console.log(playerName);

// part of legacy code. should be avoided.

greet();

// console.log(userName); // Error: userName is not defined
// scope of userName variable is limited to the function 
