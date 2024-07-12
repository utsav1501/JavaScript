function Vehicle(make) {
    this.make = make;
    }
    Vehicle.prototype.start = function() {
    console.log(`Starting the ${this.make} vehicle.`);
    };
    function Car(make, model) {
    Vehicle.call(this, make);
    this.model = model;
    }

    //binding prototype of Vehicle with car's prototype
    // you are essentially making Car.prototype inherit from 
    // Vehicle.prototype. This establishes a prototype chain where 
    // properties and methods defined on Vehicle.prototype are accessible
    // to instances of Car.
    Car.prototype = Object.create(Vehicle.prototype);
    const myCar = new Car('Toyota', 'Camry');
    myCar.start();