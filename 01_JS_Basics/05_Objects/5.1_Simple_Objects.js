const player = {
    name: "Sachin",
    "full name": "Sachin Ramesh Tendulkar",
    age : 50,
    country: "India",
    email : "sachin@cricket.com",
    isRetired: true,
    achievements: ["100 International Centuries", "Most Runs in World Cup", "First Double Century in ODIs"],
    contacts: {"mobile": "1234567890", "resi": "4567890123", "office": "0987654321"}
};
// console.log("Player Object:", player);
// console.log("Player Name:", player.name);
// console.log("Player Full Name:", player["full name"]);
// console.log("Player Age:", player.age);
// console.log("Player Achievements:", player.achievements);
// console.log("Player First Achievement:", player.achievements[0]);
// console.log("Player Contact Mobile:", player.contacts.mobile);

// //another way is of[]
// console.log("Player Email:", player['email']);

player.introduce = function() {
    console.log(`Hello, I'm ${this.name} from ${this.country}. I am ${this.age} years old.`);
    console.log("Hi, I'm " + this["full name"] + " from " + this["country"] + ". I am " + this["age"] + " years old.");
}

player.introduce();