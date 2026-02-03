//An array containing numbers. Generate cube of each number using map().
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const cubes = numbers.map(num => num ** 3);
console.log("Cubes:", cubes); // [1, 8, 27, 64, 125, 216, 343, 512]

//square of each number using map()
const squares = numbers.map(num => num ** 2);
console.log("Squares:", squares); // [1, 4, 9, 16, 25, 36, 49, 64]



//An array containing numbers. Generate cube of each number using map(), filter out cubes greater than 100 using filter(), and then find the sum of the remaining cubes using reduce().
const cubesFilteredSum = numbers
  .map(num => num ** 3) // Generate cubes
  .filter(cube => cube > 100) // Filter cubes greater than 100
  .reduce((accumulator, current) => accumulator + current, 0); // Sum remaining cubes
console.log("Sum of Cubes > 100:", cubesFilteredSum); // 1196 (125 + 216 + 343 + 512)