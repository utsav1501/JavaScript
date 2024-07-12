 /**Here we achieve inheritance in constructor fxn by using call and this 
 keyword see in line number 17 and we also binded prototype of Vehicle with car
 */
//  function Vehicle(name,color,wheels){
//     this.name=name;
//     this.color=color;
//     this.wheels=wheels;
//  }
//  Vehicle.prototype.getVehDetails=function(){//prototypal method
//     console.log(
//         `Name:${this.name}\nColor${this.color}\nWheels:${this.wheels}`
//     );
//  };

//  function Car(color,brand,seats){
//     // Vehicle('car',color,4);
//     Vehicle.call(this,'car','Blue',4);//this is pointing to Car
//     this.brand=brand;
//     this.seats=seats;
//  }

//  //binding prototype of Vehicle with car's prototype
//  Car.prototype=Object.create(Vehicle.prototype);

//  Car.prototype.getDetails=function(){
//     console.log(`
//     The ${this.color} ${this.name} is of ${this.brand} company.
//     It has seating for ${this.seats} people`);
//  }

//  const c1=new Car('blue','Audi',5 );
//  c1.getDetails();
// //  c1.getVehDetails();
// // console.log(c1)

// // how to access prototype property of parent class-> see line 20
// console.log(c1.__proto__);
// c1.getVehDetails();


//practise
function Person(name){
    this.name=name;
}

Person.prototype.greet=function(){
    console.log(`Hello,my name is ${this.name}`);
    };

    function Employee(name,position){
        Person.call(this,name);
        this.position=position;
    }

    Employee.prototype=Object.create(Person.prototype);

    Employee.prototype.greet=function(){
        console.log(`Hello,I'm an Employee.My name is ${this.name}`);
    }

    const john=new Employee("John","Manager");
    john.greet();

    //practise
    function Animal(){
        this.sound="Animal Sound";
    }

    function Cat(){
        Animal.call(this);
    }

    Cat.prototype=Object.create(Animal.prototype);
    Cat.prototype.constructor=Cat;

    Cat.prototype.makeSound=function(){
        console.log(this.sound);
    };

    const cat=new Cat();
    cat.sound="Meow";

    cat.makeSound();