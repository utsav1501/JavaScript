//destructing :unpacking the value
const obj={
    a:1,
    b:2,
    c:['0','B',"J"],
    d:{value:'Val'},
};

//Binding pattern
// const {a,c} =obj; //picking/extracting a,c from obj object
// console.log(a);
// console.log(c);

//now a and c is acting like a variable here

//normallty we get the value of a from object like :-
//const a=obj.a; 
//so destructing is the shortest way to get value from object


//Another way of destructuring

const {a:a1}=obj;//destructuring a as a1

console.log(a1);
// console.log(a);//a is not recognised bcz we have changed it's name

//assignment pattern
let b;//declared b
({b:b}=obj);//agar hum curve bracket nhi lagaye to compiler thinks this is block
console.log(b);

//practise question
let obj1={name:"John",country:"India",age:30};
let name;
({name}=obj1);
let {country:c,age:a}=obj1;
obj1.country="Canada";
console.log(name,c,a);
