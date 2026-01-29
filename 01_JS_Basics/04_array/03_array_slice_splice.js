const marks = [0,1,2,3,4,5,6,7,8,9,10];

//slice extracts a section of an array and returns a new array from start index to end index (end index not included)
//extract elements from index 1 to 3
const slicedMarks = marks.slice(1,4);
console.log("Sliced Marks: ", slicedMarks); // [1,2,3]
console.log("Original Marks after slice: ", marks); // original array remains unchanged

//splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//remove 3 elements starting from index 4
const splicedMarks = marks.splice(4,3);
console.log("Spliced Marks: ", splicedMarks); // [4,5,6]
console.log("Original Marks after splice: ", marks); // original array is modified [0,1,2,3,7,8,9,10]

//filter creates a new array with all elements that pass the test implemented by the provided function
//filter marks greater than 5
const filteredMarks = marks.filter(mark => mark > 5);
console.log("Filtered Marks (greater than 5): ", filteredMarks); // [7,8,9,10]

//remove 1 element from index 3 and add 2 new elements
marks.splice(3, 1, 15, 20);
console.log("Marks after Splice and Add: ", marks); // [0,1,2,15,20,7,8,9,10]