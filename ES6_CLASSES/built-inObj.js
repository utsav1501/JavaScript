const today=new Date();//return current date..here date is constructor and today is object
console.log(today);

const birthdate=new Date("2002-01-15")
console.log(birthdate);//give day on which u were born

const someDay=new Date(1990,0o7);
console.log(someDay)


// console.log(typeof birthdate.getFullYear())
console.log(birthdate.getFullYear())

console.log(birthdate.toDateString())

const birthStr=birthdate.toString();
console.log(birthStr.slice(11,21))