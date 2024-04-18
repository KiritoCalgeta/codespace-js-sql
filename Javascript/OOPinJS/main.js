class Car {
    constructor(make,model) {
        this.make = make;
        this.model = model;
    }
    drive() {
        console.log('Yaaas queen slay!');
    }
}

const myCar = new Car('Toyota', 'C-HR');
console.log(myCar.make, myCar.model);
myCar.drive();