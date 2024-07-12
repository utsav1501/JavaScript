var userName='Tom';
var userAge=10;
console.log(`username:${userName}`);
console.log(`userAge:${userAge}`);

greetUser(userName);

function greetUser(name){
    console.log(`*************************`)
    var greet='I hope u r doing fine';
    console.log(`hello ${name}, ${greet}`);
    var currentYear=2024;
    const year=birthYear(currentYear,userAge);
    console.log(`*************************`)
    return `your birth year is ${year}`;
}

function birthYear(year,age){
    console.log('Calculating the birth year');
    return year-age;
}

var bYear=greetUser(userName);
console.log(bYear);