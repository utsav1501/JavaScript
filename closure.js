let a='Global';

function outerPrint(){
    let b='OuterPrint';


return function innerPrint(){
    let c='innerPrint';
    return `${a} -> ${b} ->${c}`;
}

// const show=innerPrint();
// console.log(show);   
    // return innerPrint;
}
const show=outerPrint();
console.log(show); 
const printInner=show();
console.log(printInner);

// in line 18 we actually calling innerPrint() funtion but innerprint 
// function  is also returning value of b but actually how did it get??
//b is declared in a functon called outerprint and it is removed from call 
//stack at this time but b's value is present which is due to the property 
//called closure...closure actually remember the lexical environment of any 
//variable.. it is combination of fxn with its lexical environment, even if
//it has been popped out of the call to variable even after executing the outer function

//closure maintain access 