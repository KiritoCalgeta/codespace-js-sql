class Circle {

// class constructor
    constructor(radius) {
        this.radius = radius;
    }
// getters methods (functions)
    get radius() {
        return this._radius;
    }
// setters methods (functions)
    set radius(radius) {
        this._radius = radius;
    }
// Methods
    calculateArea() {
        return Math.PI * this._radius ** 2;
    }
}

const myCircle = new Circle(2);
console.log("Radius: ", myCircle.radius);
console.log("Area: ", myCircle.calculateArea());

// changing radius value
myCircle.radius = 5;
console.log("New Radius: ", myCircle.radius);
console.log("New Area: ", myCircle.calculateArea());