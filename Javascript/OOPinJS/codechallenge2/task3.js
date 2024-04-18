class User {
    constructor() {
        this.username = "";
    }
    
    set username(username) {
        this._username = username;
    }
}

class Admin extends User {
    expressYourRole() {
        return "Admin"
    }
    sayHello() {
        return `Hello admin, ${this._username}`;
    }
}
const admin = new Admin();

admin.username = "Balthazar";
console.log(admin.sayHello());