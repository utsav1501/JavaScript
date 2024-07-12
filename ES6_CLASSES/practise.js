// const Dog=class{//unnamed class expression
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} says woof!`);
//     }
// }
// const Cat=class{
//     constructor(name){
//         this.name=name;
//     }

//     speak(){
//         console.log(`${this.name} says meow!`);
//     }
// }

// function createAnimal(type){//constructor fxn
//     if(type==="dog"){
//         return new Dog("Buddy");
//     }
//     else if(type==="cat"){
//         return new Cat("Whiskers");
//     }
//     else{
//         return null;
//     }
// }

// const d=createAnimal("dog")
// // const d=new Dog("Buddy")
// d.speak();

// Encapsulation practise
 
class Student{
    name;
    Sec;
    #rollno;
    constructor(name,Sec,rollno){
        this.name=name;
        this.Sec=Sec;
        this.rollno=rollno;//compiler assign rollno as new value and assign value to it
    }
}

const ram=new Student("Ram","b",34353);
console.log(ram);
