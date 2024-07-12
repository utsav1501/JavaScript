//find ------ findIndex

//find give u the a number if condition is true and findIndex gives u the index
//of that number and if the number is not present then return -1

const inputs=[
    22,13,15,77,65,98,76,44,55
]; 

// const find1=inputs.find(num => num == 65);
const find1=inputs.find((num) => num == 65);
//here num is parameter
console.log(find1);

const find2=inputs.findIndex((num)=>num==76);
console.log(find2);