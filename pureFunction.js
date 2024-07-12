/** PURE Functions */

function calculate(num1,num2){
    return num1*num2;
}
console.log(calculate(4,6))

//->here output is dependent on num1 and num2 i.e inputs so it is pure fxn
//something which doesn't belong to function shouldn't manipulate inside the fxn
//even we didn't use console inside fxn bcz it is fxn which is provided by web API's
/** Impure Function */

const discount=25;

function calcDis(price){
    return price-discount;
}

console.log(calcDis(200));

//->here output is dependent on variable discount so it is impure fxn