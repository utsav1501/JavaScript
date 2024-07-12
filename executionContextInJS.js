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