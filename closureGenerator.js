function generateID(startValue){
    let count=startValue;
    return function(){
        return `A_2023_${count++}`;
    }
}
let getId=generateID(2);
console.log(getId());
console.log(getId());

