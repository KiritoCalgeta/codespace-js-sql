class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    hello(User) {
        return (`Hello ${this.firstName}, ${this.lastName}`);
    }
}

const user1 = new User('John ', 'Doe');
console.log(user1.hello(User));

const user2 = new User('Jane ', 'Doe');
console.log(user2.hello(User));