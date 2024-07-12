class Vehicle{
    wheels=4;
    constructor(brand){
        this.brand=brand;
    }
    startEngine(){
        console.log("Engine started")
    }
}

class Car extends Vehicle{
    constructor(brand,model){
        super(brand);
        this.model=model;
    }
    getWheels(){
        return this.wheels
    }
}

const myCar=new Car("Toyota","camry");
console.log(myCar.getWheels());