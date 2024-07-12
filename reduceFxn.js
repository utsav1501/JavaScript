//reduce

//reduce(redFn,initial value);
//function redFn(accumulator,currentValue,currentIndex,arr)

// const inputs=[2,3,4,5,6];

// const sum1=inputs.reduce((total,num)=>{
//     // console.log(total)
//     return total+num;
// },0)

// console.log(sum1);

// practise
const numbers=[1,2,3,4,5];
const sum=numbers.reduce((acc,num)=>{
    console.log(acc,num)//return value goes to acc
    return num%2===0 ?acc+num:acc;
},0);
console.log(sum);

