
function greet()
{
    let userName = "Sachin"
    console.log("Hello " + userName);
    // cannot redeclare let variable inside the function
    // let userName = "Dhoni";
}

greet();

// console.log(userName); // Error: userName is not defined
// scope of userName variable is limited to the function 

// --------------------
// redeclare let variable outside the function
let userName = "Dhoni";
console.log(userName); // prints Dhoni but not printed due to previous error.