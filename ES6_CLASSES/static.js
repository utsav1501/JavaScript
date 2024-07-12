//static->static method or property is called with the name of class with dot symbol

class Vehicle{

    static vName='Static name';
    // myName='Utasv'

    //constructor
    constructor(name,color,wheels){
        this.name=name;
        this.color=color;
        this.wheels=wheels;
    }

    //methods
    getDetails(){
        console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels.
        `)
    }

    //static method
    static showMsg(){
        console.log("This is the static method of class ")
    }
};

const v1=new Vehicle('car','blue',4);
console.log(v1);
// v1.showMsg();
Vehicle.showMsg();
console.log(Vehicle.vName);