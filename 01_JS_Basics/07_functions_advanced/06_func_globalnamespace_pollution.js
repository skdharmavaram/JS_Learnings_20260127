// // global variable
// let count = 0;

// // function to increment the count
// function increment() {
//     count++;
//     console.log("Count is: " + count);
// }

// increment(); // Count is: 1
// increment(); // Count is: 2

// count++; // modifying global variable directly

// increment(); // Count is: 4
// // above code pollutes the global namespace as count is a global variable and can be modified directly

// ===============================
function outer() {
    // private variable
    let count = 0;

    // function to increment the count
    function increment() {
        count++;
        console.log("Count is: " + count);
    }
    increment(); // Count is: 1
    increment(); // Count is: 2
}
outer();
outer();

// console.log(count); // undefined error