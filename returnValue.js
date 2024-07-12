// Return value of a function

/** If you return a value from fuction then u return value from it 
 * and actually use it whereEver you want*/
function squared(numbers){
    return numbers*numbers;
    console.log('Hi');//not reachable
}

const squared5=squared(5);
console.log(squared5);
squared(15);
squared(10);
squared(7);