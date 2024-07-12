/**Type Conversion -->explicitly */

/** *** Convert to String *** */
//String();

console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
// this shows that the null values and undefined can also changed to string

// toString();
console.log((123).toString());
console.log((true).toString());
// console.log((null).toString());

/**Convet to Number using Number() method*/
//Number();
console.log('***NUMBER***');

console.log(Number('25'))
console.log(Number('Value'));
console.log(Number(true));
console.log(Number(false));

// Unary + Operator ---works on variables

let a="123";//123 is a string
console.log(+a);//+ is an unary operator which convert string to number


/** In javascript there is not particular datatype for integer,float,char
 we can declare it using var or let .....for ex:-*/
 
 let num=1.2;
// we can convert string to number using parse float and parseInt

// parseFloat();
console.log(parseFloat('123.45f'))

// parseInt();
console.log(parseInt('123.45f'));

/**Convert to Boolean */
//Boolean

// console.log(Boolean(0));
// console.log(Boolean(100));
// console.log(Boolean(''));
// console.log(Boolean('ground'));
console.log(Boolean(undefined));


