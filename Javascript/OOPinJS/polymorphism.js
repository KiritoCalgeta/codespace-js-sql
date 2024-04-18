class Shape {
    area() {
        console.log('Area calculation not implemented.');
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

const square = new Square(4);
const circle = new Circle(3);

console.log("Square area:", square.area());
console.log("Circle area:", circle.area());