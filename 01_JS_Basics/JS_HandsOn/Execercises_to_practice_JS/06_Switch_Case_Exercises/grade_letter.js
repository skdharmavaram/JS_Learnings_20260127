// Grade Letter
// Take a numeric score (0-100) and print the letter grade (A, B, C, D, F) using a switch. Hint: Divide the score into ranges and assign cases (e.g., 90-100 for A).

let score = 76;
let grade;
switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    case (score >= 60):
        grade = "D";
        break;
    default:
        grade = "F";
}
console.log(grade);