const calculate=(a,b,operation)=>{
    return operation(a,b);//calling anonymous function
    //operation bs nam ka fxn hai baki call hota hi add,sub,mul method hi
    //so operation is a callback function 
}

//method1
const addition =calculate(3,4,function (num1,num2){//function->anonymous function
    return num1+num2;//anonymous function returning sum
})
console.log(addition);


// method2
const subtraction=(a,b)=>a-b;
const subResult=calculate(6,3,subtraction)
console.log(subResult);

//method3
function multiply(a,b){
    return a*b;
}

const mulResult=(calculate(3,2,multiply))
console.log(mulResult);