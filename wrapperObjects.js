let num=10;
let str='String';
let bigNum=10n;
let bool=true;

console.log(num.__proto__);
/**__proto__ is used to create wrapper object */
console.log(str.__proto__);
console.log(bigNum.__proto__);
console.log(bool.__proto__);
