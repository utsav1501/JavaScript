//many ways of adding property inside object

// let obj={name:"jack"};
// obj.age=16;

// let obj={name:"jack"};
// obj["class"]=5;

// let obj={name:"jack"}
// obj={...obj,sec:'B'}


//

/*const person={
    name:"john",
    age:30,
    occupation:"Engineer",
};

const anotherPerson=person;
anotherPerson.name="Jane";

console.log(person.name)
*/

// In JavaScript, when you assign an object to another variable, you're not creating a new object but rather creating a reference to the original object. 
// So, when you modify properties of the object through either variable, the changes reflect on the same underlying object. Therefore, modifying anotherPerson.name 
// will also modify person.name, as they both point to the same object in memory.



//prototype
// function Game(name,platform){
//     this.name=name;
//     this.platform=platform;
// }

// const fifa=new Game("FIFA 23","PlayStation");
// console.log(fifa.__proto__===Game.prototype);
// console.log(fifa.__proto__.__proto__===Object.prototype)

//practise2
// let obj={a:1,b:2};
// console.log(Object.getPrototypeOf(obj)===Object.prototype);

//practise3
// function Person(name){
//     this.name=name;
// }

// Person.prototype.age=30;

// const john=new Person("John");//created john object

// john.__proto__.age=40;

// console.log(john.age);
// console.log(Person.prototype.age);

// const clay=new Person("Clay Jensen");//created clay object
// console.log(clay.name)
// console.log(clay.age)

// Instructions:
// 1. Refactor the Book constructor to add the method to the prototype chain instead of creating copies.
// 2. Ensure that isClassic method is accessible to all instances of Book object.


// function Book(title, author, publicationYear) {
//     this.title = title;
//     this.author = author;
//     this.publicationYear = publicationYear;
  
  
//     // Make this function as a prototypal function   
//   }
//         Book.prototype.isClassic = function () {
//         const currentYear = 2023;
//         const age = currentYear - this.publicationYear;
//         if (age >= 50) {
//           return "The book is from the classic collection";
//         }
  
  
//         return "The book is not a classic collection book";
//       };
  
//   // Create a few book objects
//   const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1990);
//   const book2 = new Book("1984", "George Orwell", 1949);
//   const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  
  
//   // Consoling output
//   console.log(book1.isClassic()); // Output: 63
//   console.log(book3.isClassic()); // Output: 98
  
// let arr=[1,2,3];
// console.log(arr.constructor===Array);
// // console.log(constructor.__proto__);
// // console.log(Array.__proto__)

// console.log(arr.__proto__);

//practise 

// function Animal() {}
// Animal.prototype.move = function() { console.log('moving') };
// function Dog() {}
// Dog.prototype.bark = function() { console.log('woof!') };
// Dog.prototype.__proto__ = Animal.prototype;
// const fido = new Dog();
// fido.move(); // logs 'moving'
// fido.bark(); // logs 'woof!'

//practise

function greet(name) {
    console.log(`Hello, ${name}! I'm ${this.title}.`);
    }
    const person = {
    title: "Mr."
    };
    greet.call(person, "John");