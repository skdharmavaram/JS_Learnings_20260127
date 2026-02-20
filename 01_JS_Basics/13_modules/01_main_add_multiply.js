import {add, multiply} from './mathUtils.js'; // custom import, we can choose which functions to import from the module. 
//This is more efficient than importing the entire module if we only need a few functions. We can also give the imported functions any name we want by using the as keyword, for example: import {add as addition} from './mathUtils.js'; This allows us to use the function with a different name in our code, which can be useful if there are naming conflicts or if we want to use a more descriptive name for the function in our code.


console.log('Addition:', add(2, 3));
console.log('Multiplication:', multiply(2, 3));
console.log('Multiplication of Addition and Multiplication:', add(2, 3) * multiply(2, 3));
// console.log('This will throw an error because divide is not imported from math.js:', divide(10, 2)); // This will throw an error because divide is not imported from math.js
