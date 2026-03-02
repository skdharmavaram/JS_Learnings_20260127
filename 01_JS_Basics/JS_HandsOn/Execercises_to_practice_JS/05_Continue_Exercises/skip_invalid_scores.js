// Skip Invalid Scores
// Given an array of test scores, calculate the average of valid scores (0-100), skipping invalid ones (negative or above 100). Hint: Use continue to skip invalid scores and track valid ones.

let scores = [95, 85, -10, 110, 76, 88, 102, 67];
let total = 0;
let count = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 0 || scores[i] > 100) {
        continue;
    }
    total += scores[i];
    count++;
}

if (count > 0) {
    console.log("Average of valid scores:", total / count);
} else {
    console.log("No valid scores to average.");
}