//Inheritance
class Vehicle{
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
}

//By doing this it defeat the purpose of DRY(Don't Repeat Yourself)

// class Car{
//     constructor(name,color,wheels,brand,purpose){
//         this.name=name;
//         this.color=color;
//         this.wheels=wheels;
//         this.brand=brand;
//         this.purpose=purpose;
//     }
//     //methods
//     getDetails(){
//         console.log(`
//             The ${this.name} is ${this.color}in color.
//             It has ${this.wheels} wheels. 
//             `)
//     }
// }

//now we use inheritance

class Car extends Vehicle{
    constructor(color,brand,purpose){
        super("car",color,4);
        this.brand=brand;
        this.purpose=purpose;
    }

    // overRiding
    getDetails(){
        console.log(`
        The ${this.name} is ${this.color} in color of ${this.brand} company.
        It is for the purpose of ${this.purpose};
        `)
    }
}

const car1=new Car("Red",'Audi','Luxury Travelling');
car1.getDetails();
console.log(car1.__proto__)