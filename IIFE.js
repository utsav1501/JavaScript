//IIFE

// (function(){
//     console.log("Hi,I'm Utsav")
// })();

//IIFE
// (function(a,b){
//     console.log(a**b);
// })(2,3);

const user=(function(){  //this is the IIFE function and user is storing what the function is returning
    const userData={  //and userData is the object of IIFE function
        userName:"John",
        userAge:20        
    }

    function getName(){
        console.log(userData.userName);
    }

    function updateAge(age){
        console.log(userData.userAge+age);
    }

    return {getName,updateAge}
})();

console.log(user);
user.getName();
user.updateAge(3);
// console.log(user.userData); we can get userData only by returning userData object


// practise
function main(){
    return (function(){
        console.log("hello user")
    })();
}
const result=main();
