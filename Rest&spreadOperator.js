const aprilBatch=['Tina','Madhur'];
const mayBatch=['Ritik','Deepak','Shalini'];
const juneBatch=['Sava','Shivani'];
const julyBatch=[];
 
// function addStudent(batch,student){
//     batch.push(student);
//     console.log(batch);
// }
// addStudent(aprilBatch,'Aryan');
// addStudent(mayBatch,'Ankit')

/**if we have to add 10 students at a time then we have to call the function 
10 times which is not good idea so we use rest operator..having syntax->...*/
//so rest operator gives flexiblity to add any number of students without
// specifying number of parameter

//Rest ...

function addStudent(batch,...students){
    for(let i of students){
        batch.push(i);
    }
    console.log(batch);
}
addStudent(aprilBatch,"Utkarsh","Nikhil","Setu");

//spread...

// const newBatch=mayBatch;
const newBatch=[...mayBatch];//spread operator used
console.log(newBatch);

mayBatch.push("newStudent");
console.log(mayBatch);
console.log(newBatch);

//Concatenate
const mergedBatch=[...mayBatch,...juneBatch];
console.log(mergedBatch);