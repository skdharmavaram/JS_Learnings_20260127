class Animal {
    speak(){
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak(){
        console.log("Dog barks");
    }
}
const dog = new Dog();
dog.speak(); // Output: Dog barks


class Cat extends Animal {
    speak(){
        console.log("Cat meows");
    }
}

const cat = new Cat();
cat.speak(); // Output: Cat meows

//By default the parent class method will be called if the child class does not override it. If the child class overrides the parent class method, then the child class method will be called.
class Bird extends Animal {
    // No speak method defined here, so it will use the speak method from the Animal class
}
const bird = new Bird();
bird.speak(); // Output: Animal speaks

// If we want to call the parent class method from the child class, we can use the super keyword.
class Fish extends Animal {
    speak(){
        super.speak(); // Call the speak method of the parent class
        console.log("Fish blubs");
    }
}
const fish = new Fish();
fish.speak(); // Output: Animal speaks
              //         Fish blubs



const animal = new Animal();
animal.speak(); // Output: Animal speaks
// The speak method of the Animal class is called, not the Dog class, because the object is of type Animal, not Dog. This is an example of polymorphism, where the same method can have different implementations based on the type of object that is calling it.
// This is also an example of method overriding, where the Dog class has overridden the speak method of the Animal class to provide a different implementation.
// Method overloading is not supported in JavaScript, but we can achieve similar functionality by using default parameters or by checking the number of arguments passed to the function. Method overriding, on the other hand, is supported in JavaScript and allows a child class to provide a specific implementation of a method that is already defined in its parent class.

//Similar functionality like metthod overloading
function add(a, b, c = 0){
    return a + b + c;
}
console.log(add(1, 2)); // Output: 3
console.log(add(1, 2, 3)); // Output: 6


//Challenge:
//Create a Vehicle class with a method move() that logs "Vehicle is moving".
//Create a Airplane class that extends Vehicle and overrides the move() method to log "Airplane is flying".