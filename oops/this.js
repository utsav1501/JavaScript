function person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log('Hello,my name is '+this.name+' and I am'+
            this.age+'years old.');
    };
}

const person1=new person('Tommy',30);
const person2=new person('Arthur',25);

person1.greet();
person2.greet();