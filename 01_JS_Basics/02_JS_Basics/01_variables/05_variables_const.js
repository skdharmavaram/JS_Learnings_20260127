
function greet()
{
    const userName = "Sachin"
    console.log("Hello " + userName);

    // cannot redeclare const variable inside the function
    // const userName = "Dhoni";
}

greet();

// console.log(userName); // Error: userName is not defined
// scope of userName variable is limited to the function 

const userName = "Dhoni";
console.log(userName);