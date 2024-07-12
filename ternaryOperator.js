/**Ternary operator*/

// let num1=10;
// let num2=19;

// let greater=num1>num2?num1:num2;
// console.log("Greater number is "+greater);

let num1=10;
let num2=19;
let num3=50;

let greater=
    num1>num2
        ?num1>num3
        ?num1:num3
        :num2>num3
        ?num2
        :num3;
console.log("Greater number is "+greater);