const car={
    name:'car',
    color:'black',
    getDetails(brand,seats){
        console.log(`This is a ${this.color} ${this.name} of ${brand} company.
        it has ${seats} seats`);
    }  
}

const bus={
    name:'bus',
    color:'yellow',
}



car.getDetails("Audi",5);

//if there is method inside object and we have to copy that method within
//the new method then

car.getDetails.call(bus,"Ansi",50);

//apply method->arguments to be passed in the form of array
car.getDetails.apply(bus,['Gold',30] )

//bind()->it actually bind the this of one object method to another object
//with the help of bind we won't have to pass the value again and again 
const vehicle = car.getDetails.bind(bus);
vehicle("panwar",2)
vehicle("bronze",45)