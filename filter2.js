//practise

// const array=[0,1,'','hello',null,undefined,NaN];

// const filteredArray=array.filter(Boolean);
// console.log(filteredArray);


//practise
const numbers=[1,2,3,4,5,2,4,2];
const filteredNumbers=numbers.filter((element,index,array)=>{
    console.log(index,array.indexOf(element))
    return array.indexOf(element)===index;
})

console.log(filteredNumbers)