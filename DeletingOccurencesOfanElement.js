//Complete the findDuplicate function
// Do not alter the starter code.

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
let arr2=[];
function findDuplicate(arr){
for(let i=0;i<arr.length-1;i++){
    for(let j=1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr2.push(arr[i]);
        }
    }
 }
    return arr2;
}    
console.log(findDuplicate(arr));