/**Nested if statements */

//check eligibility for driving liscence 
//age>=18 --eligible else not eligible
// passed the test->eligible and can obtain the liscence
// failed the test->eligible but cannot have liscence

let age=18;
let testPassed=true;

if(age>=18){
    console.log("Eligible for the license..");
    if(testPassed){
        console.log("Congratulations !, You have got the license")
    }
    else{
        console.log("Sorry,you didn't clear the test..")
    }
}
else{
    console.log("Not eligible for the license");
}