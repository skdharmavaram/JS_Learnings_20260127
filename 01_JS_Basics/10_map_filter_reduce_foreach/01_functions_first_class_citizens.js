// can be assigned to a variable   (function expression syntax)
const foo = function() {
    console.log("Function foo called");
};

foo();

// ----------------------------------
// passed as an argument to other functions

function greet(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
    const name = "Shiva";
    console.log(callback(name));
}

processUserInput(greet);

// ----------------------------------
// returned from other functions

function createTimer() { 
    let count = 0;
    return function() {
        count++;
        console.log(`Called ${count} times`);
    }
} 

const timer = createTimer(); 
timer(); // Called 1 times 
timer(); // Called 2 times 