// Temperature Alert
// Write a program that takes a temperature in Celsius and prints "Too Hot" (above 30), "Comfortable" (20-30), or "Too Cold" (below 20). Hint: Use if else to check temperature ranges.

let temperature = 25;
if (temperature > 30) {
    console.log("Too Hot");
} else if (temperature >= 20) {
    console.log("Comfortable");
} else {
    console.log("Too Cold");
}