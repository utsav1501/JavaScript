const car={
    getDetails(name){
        console.log(`Your car is ${name}`);
    }
}
const car1=Object.create(car);//shifting property/prototype of car to car1 object
console.log(car1.__proto__);
car1.getDetails('Range Rover')