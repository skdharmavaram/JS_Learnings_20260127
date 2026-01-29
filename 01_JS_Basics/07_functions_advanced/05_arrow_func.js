// Arrow functions (=>) in Javascript

// ===============================
// Regular function expression
const greet = function() {
    console.log("Hello, Good Morning");
}
greet(); // calling the function

// -------------------------

const greetUser = function(userName) {
    console.log("Hello, Good Morning " + userName);
}
greetUser("Sachin"); // calling the function

// ===============================
// Arrow function without parameters
const greet1 = () => {
    console.log("Hello, Good Morning from Arrow function");
}
greet1(); // calling the function

// -------------------------
// Arrow function with one parameter
const greetUser1 = (userName) => {
    console.log("Hello, Good Morning " + userName + " from Arrow function");
}
greetUser1("Rahul");
// ---------------------------------
// Arrow function with one parameter (without parentheses)
const greetUser2 = userName => {
    console.log("Hello, Good Morning " + userName + " from Arrow function");
}
greetUser2("Anil");
// ---------------------------------
// Arrow function with one parameter and implicit return (without curly braces)
const greetUser3 = userName => "Hello, Good Morning " + userName;
console.log(greetUser3("Rohit"));
// ---------------------------------
// no curly braces, no return keyword
const greetUser4 = userName => console.log("Hello, Good Morning " + userName);
greetUser4("Dhoni");

// ---------------------------------
// Arrow function with multiple parameters
const add = (a, b) => a + b; // implicit return
console.log("Sum is", add(10, 20));

// ---------------------------------
// Arrow function with multiple parameters and multiple statements
const multiply = (a, b) => {
    const product = a * b;
    return product; // explicit return
}
console.log("Product is", multiply(10, 20));