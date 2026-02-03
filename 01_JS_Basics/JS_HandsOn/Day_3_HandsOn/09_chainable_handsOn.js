// from given array, for each number find square of each number using map, and print only even numbers using filter
const numbers = [1,2,3,4,5,6,7,8,9,10];

// Using map to find square of each number
const squares = numbers.map(num => num * num);
console.log("Squares:", squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// Using filter to get only even squares
const evenSquares = squares.filter(square => square % 2 === 0);
console.log("Even Squares:", evenSquares); // [4, 16, 36, 64, 100]

// Chaining map and filter to achieve the same in one go
const evenSquaresChained = numbers
    .map(num => num * num) // Step 1: Get squares
    .filter(square => square % 2 === 0); // Step 2: Filter even squares
console.log("Even Squares (Chained):", evenSquaresChained); // [4, 16, 36, 64, 100]