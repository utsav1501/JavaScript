/**Methods in Strings*/
let str='JavaScript is a Dynamically typed language';

// includes()->check whether string is prsent or not
console.log(str.includes('is'));

//replace()
console.log(str.replace('is','was'));

// replaceAll()
console.log(str.replaceAll('a','@'));

//trim()->used to remove leading and triling spaces
console.log(str.trim());

// substring()
console.log(str.substring(3));
//console.log(str.substring(-4,-12))//negative value is already converted to zero
console.log(str.substring(-3));

//slice()
// console.log(str.slice(3))
console.log(str.slice(-3));

//split()->split() method splits a string into an array of substrings
let words=str.split(" ");
// console.log(words);