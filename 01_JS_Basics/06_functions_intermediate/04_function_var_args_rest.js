function sum(a,b) {
    return a + b;
}
console.log(sum(2, 3)); // 5
console.log(sum(2, 3, 4, 5)); // 5, extra arguments are ignored

// To handle variable number of arguments, we can use rest parameters
function sumAll(...args) {
    let total = 0;
    for (let num of args) {
        total += num; // add each argument to total
    }
    return total;
}
console.log(sumAll(2, 3)); // 5
console.log(sumAll(2, 3, 4, 5)); // 14
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

//for easy understanding
function total_price(a, b, ...prices) { // a and b are regular parameters, prices is a rest parameter
    let total = a + b; // start with a and b
    for (let price of prices) {
        total += price; // add each price in the rest parameter
    }
    return total;
}
console.log(total_price(10, 20)); // 30
console.log(total_price(10, 20, 5, 15, 25)); // 75
console.log(total_price(100, 200, 50, 75, 25, 10)); // 460 --- 100, 200 are a and b and rest are in prices array 
    
