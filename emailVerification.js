
//Email Verification
// Input an email
// Length of the email > 11
// after . only 2 or 3 characters allowed
// minimum 3 characters between @ and .

const email = prompt('Enter the email address');

const emailLen = email.length;
// console.log(emailLen)

const dotIndex = email.lastIndexOf('.');
// console.log(dotIndex);
const atIndex = email.lastIndexOf('@');

const lastIndex = emailLen - 1;

if (
  emailLen < 11 ||
  lastIndex - dotIndex < 2 ||
  lastIndex - dotIndex > 3 ||
  dotIndex - atIndex < 3
) 
{
  console.log('Invalid Email');
}

else{
    console.log('Valid Email')
}