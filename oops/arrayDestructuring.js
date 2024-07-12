const fruits=[
    'Apple',
    'Mango',
    'Kiwi',
    'Berry',
    'Banana',
    'lichi'
];

//Binding Pattern

const [ap,ma]=fruits;
console.log(ap,ma)
// const [a,m,k,,b]=fruits;//square bracket on left side and array on right side

// console.log(a,m,k,b);//berry is skipped bcz we skip this



//Assigning array elements a seperate name 

const [a,m,...f]=fruits;
console.log(f);

const [A,M,...[,be,ba]]=fruits;//phle apple mango ko hateye using rest operator 
console.log(be);               //fir kiwi ko bhi hataye using comma

//... -->> ye rest operator hai it shows here that Except A and M take 
//all array elements 


//practise
let a1=10;
let b1=20;
[a1,b1]=[b1,a1];//swapped the values of a1 and b1. ...
console.log(a1,b1);