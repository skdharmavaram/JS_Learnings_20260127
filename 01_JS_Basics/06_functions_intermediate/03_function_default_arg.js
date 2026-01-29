// function expression
// const greetUser = function(userName) {
//     console.log("Hello, Good Morning " + userName);
// }
// greetUser("Sachin");

const greetUser = function(userName = "Guest") {
    console.log("Hello, Good Morning " + userName);
}
greetUser();           // Hello, Good Morning Guest
greetUser("Sachin");  // Hello, Good Morning Sachin