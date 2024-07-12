/**Function in JS */

//function Declaration
function sum(a,b){
    return a+b;
}
const sum1=sum(5,6);
console.log(sum1);

//function expression:-assigning a function to a variable
const sum2 = function (a,b){
    return a+b;

}
//the function which doesn't have name is called anonymous function
console.log(sum2(1,2));


// Arrow Function
//here function name and function keyword both are ommited
// var prod=(num1,num2) =>{
//     return num1*num2;
// }

//another way of writing arrow function
var prod=(num1,num2)=>num1*num2;

console.log(prod(3,4))


// problem1:-

// let result=( ()=>{
//     let x=5;
//     return ()=>{
//         x+=1;
//         return x;
//     };
// })();

// console.log(result);

// problem2

console.log(greet("Alice"));
const greet= name =>`Hello,${name}!`;