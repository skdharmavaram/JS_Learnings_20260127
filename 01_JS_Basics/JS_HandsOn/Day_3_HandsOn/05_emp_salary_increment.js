// An array containing salary of employees. Increment each salary by 10% using map().
const empSalaries = [782000, 450000, 600000, 750000, 1300000];
const Salaryincremented = empSalaries.map(salary => salary * 1.10);
console.log("Salaries after 10% increment:", Salaryincremented); // [860200, 495000, 660000, 825000, 1430000]

// Filter out salaries greater than 700000 using filter().
const highSalaries = empSalaries.filter(salary => salary > 700000);
console.log("Salaries greater than 700000:", highSalaries); // [782000, 750000, 1300000]

// Find the total salary expenditure using reduce().
const totalSalary = empSalaries.reduce((accumulator, current) => accumulator + current, 0);
console.log("Total Salary Expenditure:", totalSalary); // 3882000

/* 
Iteration 1: accumulator = 0, current = 782000 → returns 0 + 782000 = 782000
Iteration 2: accumulator = 782000, current = 450000 → returns 782000 + 450000 = 1232000
Iteration 3: accumulator = 1232000, current = 600000 → returns 1232000 + 600000 = 1832000
Iteration 4: accumulator = 1832000, current = 750000 → returns 1832000 + 750000 = 2582000
Iteration 5: accumulator = 2582000, current = 1300000 → returns 2582000 + 1300000 = 3882000
Final result: 3882000 (total of all salaries)

*/