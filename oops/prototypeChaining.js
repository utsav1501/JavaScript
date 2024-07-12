
 function Movie(title){
    this.title=title;
    // this.getDetails=function(){
    //     console.log(`Title:${this.title}`)
    // }
}

//creating function inside consfxn will make the function reach to every object
//so we have to make fxn outside get make reach to the object who require it

Movie.prototype.getDetails=function(){//we have created method inside prototype
    console.log(`Title:${this.title}`);// which will not copied to all object and it will only be inherited
}

//let's create variable

Movie.prototype.getDetails=function(){
    console.log(`Title:${this.title}`);
}


const movie1=new Movie('The Avengers');

movie1.year=2012;
console.log(movie1)
// console.log(movie1.__proto__);

const movie2=new Movie('Avatar')
console.log(movie2)

// console.log(movie2.__proto__);
// console.log(movie2.__proto__.__proto__.__proto__);



//creating object using object literal and checking that what is the prototype of that object

// const car={
//     name:'Range Rover',
// }
// console.log(car.__proto__);
