const user1={
    username:'sara',
    age:12,
    marks:{//object inside another object
        maths:20,
        english:25
    }
}

// const user2=user1;//assigning object to variable and then variable becomes object
// console.log(user1)
// console.log(user2)

//now we want some changes in user2
// user2.username="Harry";
// console.log(user2)
// console.log(user1)
//by changing user2 username then user1 username is also changed
//because user2 have reference of user1


//so we can solve it using deep and shallow copy 

//shallow copy
// const user2={...user1}
// console.log(user2);
// console.log(user1);

// user2.username="Harry";
// console.log(user2);
// console.log(user1);

//object.assign

// const user2=Object.assign({},user1)
// console.log(user2);
// console.log(user1);

// user2.username="Harry";
// console.log(user2);
// console.log(user1);


const user2=Object.assign({},user1)
console.log(user2);
console.log(user1);

user2.username="Harry";
user2.marks.maths=10;
console.log(user2);
console.log(user1);

