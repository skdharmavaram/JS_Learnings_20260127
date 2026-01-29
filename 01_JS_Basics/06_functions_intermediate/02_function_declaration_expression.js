
// greet(); // able to call function before its declaration
// Function Declaration
function greet() {
    console.log("Hello, Good Morning");
}
greet();


// greetUser("Sachin");   // cannot call function before initialization
// function expression
const greetUser = function(userName) {
    console.log("Hello, Good Morning " + userName);
}
greetUser("Sachin");