// IIFE - Immediately Invoked Function Expression
// (function() {
//     // code to be executed immediately
//     console.log("Hello from IIFE. will get executed only once");
// })(); // calling the function immediately
// Called anonymous IIFE as it has no name
// ---------------------------------------------
function sayHello() {   
    console.log("Hello from sayHello function");
}

sayHello();  // normal function call
sayHello();  // normal function call
// ---------------------------------------------

// the previous statement must end with a semicolon
// to avoid issues when the code is minified or concatenated with other scripts
(function greetUser() {
    // code to be executed immediately
    console.log("Hello from named IIFE.");
})();
// greetUser(); // Error: greetUser is not defined
// ---------------------------------------------