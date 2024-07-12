//constructor function
function Vehicle(name,color,wheels){
    this.name=name;
    this.color=color;
    this.wheels=wheels;

    this.getDetails=function(){
        console.log(`
           The ${this.name} is ${this.color} in color.
           It has ${wheels} wheels
           `);
    };
}

// const car=new Vehicle('Car','blue',4);
// car.getDetails();

//class expression
// const Vehicle=class{

// }

//Classes in JS
class Vehicle2{  //class declaration
    //class have:-
    //properties
    //constructor(optinal)...
    //methods

    //properties
    name;
    color;
    wheels;


    //constructor(optinal)...
    constructor(name,color,wheels){
        this.name=name;
        this.color=color;
        this.wheels=wheels;
    }
    
    //methods
    getDetails(){
        console.log(`
           The ${this.name} is ${this.color} in color.
           It has ${this.wheels} wheels
           `);
    };

}

const Veh=new Vehicle2('Range Rover','Black',4);
console.log(Veh)



