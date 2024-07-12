console.log(`username: ${userName}`);
console.log(`userAge:${userAge}`);

greetUser(userName);

var userName='Tom';
var userAge=10;
console.log(`username:${userName}`);
console.log(`userAge:${userAge}`);

function greetUser(name){
    var greet='I hope u r doing fine';
    console.log(`hello ${name}, ${greet}`);
    var currentYear=2024;
    const year=currentYear-userAge;
    return `your birth year is ${year}`;
}
// console.log("ji")//just checking the flow
const birthYear=greetUser(userName);
console.log(birthYear);

/**hoisting->using variable before declaring it called hoisting..here 
username and userAge is variable which is used as hoisting..this concept
can only be occur in javascript due to the concept called execution context
*/