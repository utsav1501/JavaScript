 /**Iteration->for loop */
 //print a message 10 times

//  for(let i=1; i<=10; i++){
//     console.log("Utsav singh");
//  }

// print number from 1-20
// for(i=1;i<=20;i++){
//     console.log(i);
// }

// print all even numbers between 1-20

// let i=2;
// for(;i<=50;i+=2){
//     console.log(i);
// }

//prime or not

// let num=5;
// let isPrime=true;
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime){
//     console.log("Prime");
// }
// else{
//     console.log("Not Prime");
// }

/** while loop */

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// Do-While loop
//Guess the number

// let randomNumber=8;
// let guessedNum;
// do{
//     guessedNum=prompt("Guess the Number");
//     if(guessedNum==randomNumber){
//         console.log("Guessed Correctly !!")
//     }
//     else{
//         console.log("Take another guess")
//     }
// }
// while(guessedNum!=randomNumber)

// random number inbuilt-functionality

let randomNumber=Math.random()*10;
console.log(randomNumber)