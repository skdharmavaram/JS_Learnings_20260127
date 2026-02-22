// Grade Calculator
// Take a test score (0-100) as input and print the corresponding letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60). Hint: Chain else if statements for each grade range.

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}