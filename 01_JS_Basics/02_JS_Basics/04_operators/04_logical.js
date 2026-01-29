let isLoggedIn = true;
let hasPermission = false;

console.log("AND:", isLoggedIn && hasPermission); // false
console.log("OR:", isLoggedIn || hasPermission);  // true
console.log("NOT:", !isLoggedIn);                 // false