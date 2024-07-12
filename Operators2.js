/**Operators in JS */

// 1.Comparison Operator
// (==, !=, <, <=, ===, !==)

// console.log(5==5);
// console.log(5==6);

// console.log(5!=6);
// console.log(5!=5)

// console.log(5<=6);
// console.log(5<=5);
// console.log(5<=4);

// console.log('5'==5)
// console.log('6'!=6)
// console.log('6'!==6)

// let birthYear=18;
// let rightToVote=birthYear>=18;
// console.log(rightToVote)

// 2.logical Operators

// let grade=65;
// let scholarship=80;
// let eligible=(grade>60) && (scholarship>70)
// console.log(eligible)

// let m1=55;
// let m2=65;
// let m3=45;
// let eligibility=m1>60 || m2>60 || m3>60
// console.log(eligibility);

// let rightToVote=true;
// console.log(!rightToVote);

// AND operator return the last truthy value and first falsey value
console.log(1 && 3);
console.log(3 && 1);
console.log(3 && 1 && 4 && 7 && 10 && 6 && 5);

//OR operator returns the first truthy value or last falsey value 
console.log(0 || "utsav" || undefined ||false || NaN)