class Animal {
    // Constructor for Animal class, take 'name' as a parameter
    constructor(name) {
        // initialise the 'name property for the instance with the provided parameter
        this.name = name;
    }

    // method for making a generic animal sound
    speak() {
        // log a message indicating that the animal makes a sound
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    // override the speak method in the Dog class
    speak() {
        // log a message indicating that the dog barks
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    // override the speak method in the cat class
    speak() {
        // log a message indicating that the dog barks
        console.log(`${this.name} meows.`);
    }
}
    const myDog = new Dog('Islay');
    // Call the speak method on the 'myDog' instance
    myDog.speak(); // output: Islay barks.

    const myCat = new Cat('Mei');
    myCat.speak();