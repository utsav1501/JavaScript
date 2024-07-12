/** Higher Order Functon */

// const inputs=[2,3,4,5,6,7,8,12,1,4,16];
const inputs=[2,4,6];

// function square(input){
//     const squared=[];
//     for(let num of input){
//         squared.push(num*num);
//     }
//     return squared;
// }

// function cubic(input){
//     const cubes=[];
//     for(let num of inputs){
//         cubes.push(num*num*num);
//     }
//     return cubes;
// }

// console.log(square(inputs));
// console.log(cubic(inputs));

//To eliminate the concept of DRY(Dont repeat yourself) Higherorderfxn comes


function operation(input,fn){
    const output=[];
    for(let num of input){
        console.log(output);
        output.push(fn(num));
        console.log("hi")
    }
    return output;
}
function square(number){
    return number*number;
}

function cube(number){
    return number*number*number;
}

console.log(operation(inputs,square));