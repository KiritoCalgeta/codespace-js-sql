class User {
    constructor(username) {
        // Prevent creation of object from
        if (this.constructor === User) {
            throw new TypeError("Cannot")
        }
    }
    stateYourRole() {
        // Prevent direct call
        throw new Error("You need to impl")
    }
    get username() {
        return this._username;
    }
    set username(username) {
        this._username = username;
    }
}
class Admin extends User {
    stateYourRole() {
        return "admin";
    }
}
class Viewer extends User {
    stateYourRole() {
        return "viewer"
    }
}

const admin = new Admin("Balthazar");
console.log(admin.stateYourRole());

const viewer = new Viewer("Malchior");
console.log(viewer.stateYourRole());