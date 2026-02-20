import {add, multiply} from './mathUtils.js';

console.log('Addition:', add(2, 3));
console.log('Multiplication:', multiply(2, 3));
console.log('Multiplication of Addition and Multiplication:', add(2, 3) * multiply(2, 3));
// console.log('This will throw an error because divide is not imported from math.js:', divide(10, 2)); // This will throw an error because divide is not imported from math.js
