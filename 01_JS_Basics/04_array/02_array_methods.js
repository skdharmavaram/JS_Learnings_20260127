// array
 
const marks = [85, 90, 78, 92, 88];
const names = ["Sachin", "Virat", "Rohit", "Dhoni", "Kohli"];
 
console.log("Marks:", marks);
console.log("Names:", names);
 
// Array methods
marks.push(95); // Add element at the end
 
// add element at the begining
marks.unshift(80); // Add element at the beginning
console.log("Marks:", marks);
 
// remove element from the end
marks.pop();
 
// remove element from the beginning
marks.shift();
 
console.log("Marks:", marks);
 
console.log(marks.includes(90));
console.log(marks.indexOf(92));
 
console.log(marks.join(","));
 
// remove element from index 2
marks.splice(2, 1);
console.log("Marks after Splice:", marks);
 
// insert an element at the index 2
// 0 represents no removal
marks.splice(2, 0, 80);
console.log("Marks after Insertion:", marks);
 
// replace element at index 3 with 500
marks.splice(3, 1, 500);
console.log("Marks after Replacement:", marks);
 
 
// // remove 2 elements from index 1
// marks.splice(1, 2);
// console.log("Marks after removing 2 elements:", marks);
 
// remove 2 elements from index 1 and add 3 elements
marks.splice(1, 2, 100, 200, 300);
console.log("Marks after replacing 2 elements:", marks);
 
 
// reverse the array elements
marks.reverse();
console.log("Marks after Reversing:", marks);
 
// sort the array elements
marks.sort((a, b) => a - b);
console.log("Marks after Sorting:", marks);
 
// sort the array elements in descending order
marks.sort((a, b) => b - a);
console.log("Marks after Sorting in Descending Order:", marks);