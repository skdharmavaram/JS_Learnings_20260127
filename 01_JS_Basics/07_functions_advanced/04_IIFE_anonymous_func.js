// IIFE - Immediately Invoked Function Expression
// // Anonymous function expression executed immediately

// (function() {
//     // code to be executed immediately
//     console.log("Hello from IIFE. will get executed only once");
// })();

// // this function cannot be called again

// // ------------ IIFE - with parameters -----------
// (function(name) {
//     // code to be executed immediately
//     console.log("Hello " + name + " from IIFE. will get executed only once");
// })("Sachin");

// ---------------------------------
// IIFE with return value
var message = (function(name) {
    // code to be executed immediately
    return "Hello " + name + " from IIFE";
})("Virat");

console.log(message);
console.log(typeof message);