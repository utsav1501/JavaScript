/** Break Vs Continue */

const inputs=[11,32,12,45,65,94,7,78,10,100,131,67,81,92,53]

const evenNumbers=[];//emptyArray
for(let i of inputs){
    if(i%2!==0){ //checking for odd
        continue;//it will skip all the odd numbers
    }
    evenNumbers.push(i);
    if(evenNumbers.length===5){
        break;
    }
    console.log(evenNumbers);
}

// continue skip the iteration while break just stop the loop