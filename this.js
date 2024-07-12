// 'use strict' 

// console.log(this);//it will print the global window object

// const user="John";//undefined->This happens because const declarations do not
// create properties on the global window object like var declarations do.
// var user="John";
// console.log(window.user)//john
// console.log(this.user)

// function checkThis(){
//     console.log(this);
// }

//this in any context it will return to the object it has been called in ,
// it has return that object with which it has been called

// checkThis();//print undefined in strict mode

// const user1={ //user1 is an object
//     userName:"john",
//     userAge:12,

//     work:function(){
//         console.log(this);
//     }
// }

// user1.work();

// const user2={
//     userName:"Harry Potter"
// }

// user2.work=user1.work;

// // console.log(user2)

// user2.work();

