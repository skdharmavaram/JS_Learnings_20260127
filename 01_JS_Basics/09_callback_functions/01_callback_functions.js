// // function add(a, y) {
// //     return a + y;
// // }

// // add(2, 3); // 5
// // let a = 5;
// // add(a, 10); // 15
// // let b = 20;
// // add(a, b); // 50

// // function greet(name, callback) {
// //   console.log("Hello, " + name);
// //   callback();
// // }

// function greet(name, bar) {
//   console.log("Hello, " + name);
//   bar();
// }



// // function sayBye() {
// //   console.log("Goodbye!");
// // }

// const foo = function () {
//   console.log("Goodbye!");
// }
// // foo();

// // greet("Sachin", sayBye);
// greet("Sachin", foo);
// ------------------------------------------


function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sunil", sayBye);