// //complete the function mergeArray
// //Do not alter the starter code.
// arr1 = [1,2,4,5,7];
// arr2 = [3,4,6,7,9,0];
// function mergeArray(arr1,arr2){
//     mergedArray=arr1.concat(arr2);
//     console.log(mergedArray);
//     for(let i=0;i<mergedArray.length-1;i++){
//         for(let j=i+1;j<mergedArray.length;j++){
//             if(mergedArray[i]===mergedArray[j]){
//                 mergedArray.splice(mergedArray[j]);
//             }
//         }

//     }

//     return mergedArray;
// }
// console.log(mergeArray(arr1,arr2));
// //Output : [1,2,4,5,7,3,6,9,0]

//complete the function mergeArray
//Do not alter the starter code.
arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
     // Concatenate arr1 and arr2 into a single array called mergedArray
    let mergedArray=arr1.concat(arr2);
    
     // Create a Set from mergedArray, which automatically removes duplicates
    let uniqueArray = new Set(mergedArray);
    console.log(uniqueArray)
    
    // Convert the Set back into an array using Array.from()
    let reqArray=Array.from(uniqueArray)
    return reqArray;
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]