
//Email Verification
// Input an email
// Length of the email > 11
// after . only 2 or 3 characters allowed
// minimum 3 characters between @ and .

const email = prompt('Enter the email address');

let result;
//write your program here to verify the email

//assign your final ans in result;
const emailLen = email.length;
// console.log(emailLen)

const dotIndex = email.lastIndexOf('.');
// console.log(dotIndex);
const atIndex = email.lastIndexOf('@');

const lastIndex = emailLen - 1;

const firstIndex=0;

if (
emailLen > 11 &&
lastIndex - dotIndex >= 2 &&
lastIndex - dotIndex <= 3 &&
dotIndex -  atIndex >= 3 &&
firstIndex - atIndex >2
) 
{
 console.log(email);
}

else{
console.log("Invalid email");
}