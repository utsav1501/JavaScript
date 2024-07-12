/** loop over Arrays */

const Students=['Alex','John','peter','parker','clay'];
// for(let i=0;i<Students.length;i++){
//     console.log(`Roll number ${i+1} is: ${Students[i]}`);
// }

//for...in loop
for(let i in Students){
    console.log(`Roll number ${Number(i)+1} is: ${Students[i]}`)
}

//for .. of loop
for(let student of Students){
    console.log(student);
}
