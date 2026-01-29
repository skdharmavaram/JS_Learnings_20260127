// In JS, functions are treated as first-class citizens, meaning 
// 1. I can assgin functions to variables 
// 2. I can send functions as arguments/ parameter to other functions 
// 3. I can return a functions from other functions
// In single word -they can be passed around as arguments, returned from other functions, and assigned to variables. This characteristic allows for powerful programming patterns such as closures, higher-order functions, and callbacks.

function outer() { // outer function
    let outerVar = 'I am from outer function'; 

    function inner() { // inner function
        let innerVar = 'I am from inner function';
        console.log(innerVar); // Accessing inner function variable
        console.log(outerVar); // Accessing outer function variable
    }
   inner();
   console.log(outerVar); // Accessing outer function variable
// console.log(innerVar); // This will cause an error: innerVar is not defined
}
outer();
// inner(); // This will cause an error: inner is not defined

// three main inner function scope rules:
// 1. Inner functions can access variables and parameters of their outer functions.
// 2. Outer functions cannot access variables and parameters of their inner functions.
// 3. Each function creates its own scope. Variables defined within a function are not accessible from outside that function.
