// Leap Year Checker
// Write a program to determine if a given year is a leap year (divisible by 4, but not 100 unless also divisible by 400). Hint: Combine conditions using logical operators (&&, ||).

let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}