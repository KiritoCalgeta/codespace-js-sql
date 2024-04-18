class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // getter method
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    // setter method
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }

    
    hello() {
        return ('Hello World!');
    }
}

const user = new User('John', 'Doe');
console.log(user.hello());
console.log(`My name is ${user.firstName} ${user.lastName}`);

