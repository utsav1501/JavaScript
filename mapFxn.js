//map()

const inputs=[2,4,6,8,7];

// const squaredArray=inputs.map(function(currentElement){
//     return currentElement*currentElement;
// })

const squaredArray=inputs.map(
    (num)=>num*num//arrow function
);

console.log(squaredArray);

//practise
let fruit=["banana","apple","mango"]
let maparray=fruit.map((item,ind)=>{
    return {[ind]:item.length};
})
console.log(maparray);

let data=[2,3,5,7];
let newdata=data.map();
console.log(newdata)