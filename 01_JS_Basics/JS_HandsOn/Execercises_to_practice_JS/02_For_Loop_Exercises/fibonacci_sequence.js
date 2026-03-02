// Fibonacci Sequence
// Print the first n numbers of the Fibonacci sequence (e.g., 0, 1, 1, 2, 3, 5, …). Hint: Use variables to track the previous two numbers and update them in the loop.

const n = 10; 
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}