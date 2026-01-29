const fruits = ["Apple", "Banana", "Mango", "Orange"];

for(let index in fruits)
    console.log(index, fruits[index]);

// ----------------------------

const person = {playername: "Sachin", age: 48, country: "India"};

for(let key in person)
{
    console.log(key, person[key]);
}