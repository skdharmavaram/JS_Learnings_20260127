// Simple Calculator
// Create a program that takes two numbers and an operator (+, -, *, /) and performs the operation using a switch. Hint: Use the operator as the switch expression.

let num1 = 10;
let num2 = 5;
let operator = '+';
switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator");
}