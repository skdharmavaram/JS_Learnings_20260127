// function outer() {
//     // private variable
//     let count = 0;

//     // function to increment the count
//     function increment() {
//         count++;
//         console.log("Count is: " + count);
//     }
//     return increment;  // return the inner function
// }

// const counter = outer();

// console.log(typeof counter); // function

// counter(); // Count is: 1
// counter(); // Count is: 2
// counter(); // Count is: 3
// ===============================================

// function outer() {
//     // private variable
//     let count = 0;

//     // function to increment the count
//     function increment() {
//         count++;
//         console.log("Count is: " + count);
//     }
//     return increment;  // return the inner function
// }

const counter = ( () => {
    let count = 0;
    return () => {
        count++;
        console.log("Count is: " + count);
    }
} )(); // IIFE to create closure

console.log(typeof counter); // function

counter(); // Count is: 1
counter(); // Count is: 2
counter(); // Count is: 3
