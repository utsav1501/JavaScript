/** CallBack Function */
/*when u use fxn as a argument or parameter to pass in a fxn called 
callBack function*/

// function greet(wish){
//     console.log(`${wish()},welcome to the Javascript course`)
// }

// function sayHi(){
//     return "Hi!";
// }

// function sayHello(){
//     return "Hello";
// }

// function goodMorning(){
//     return 'Good Morning!'
// }

// greet(sayHi);
// greet(sayHello);
// greet(goodMorning);


// practise

function doSomething(call){
    call();
}
doSomething(()=>{
    console.log("hello");
})