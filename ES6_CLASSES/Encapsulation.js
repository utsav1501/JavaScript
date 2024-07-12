
//Classes in JS
class Vehicle2{  

    // private properties
    #regNumber;

    //public properties
    name;
    color;
    wheels;
    


    //constructor
    constructor(name,color,wheels,number){
        this.name=name;
        this.color=color;
        this.wheels=wheels;
        this.#regNumber=number;
    }
    //Private Method
    #getNumber(number){
       return number; 
    }

    //methods
    getDetails(){
        console.log(`
           The ${this.name} is ${this.color} in color.
           It has ${this.wheels} wheels and 
           Registration number is: ${this.#getNumber(this.#regNumber)}
           `);
    };

}

const Veh=new Vehicle2('Range Rover','Black',4,2);
console.log(Veh);

Veh.name="Jaguar";
//here I'm able to change name and If we want that it can't be
//changable then make it private

// Veh.#regNumber=6;
Veh.getDetails();
// Veh.#getNumber(); ---->throw error




