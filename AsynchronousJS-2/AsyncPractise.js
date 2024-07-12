const asyncFunction=async()=>{
    const result=await new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Success'),1000);
    });
    return result;
}

const output=asyncFunction();
console.log(output);
output.then((value)=>{
    console.log(value);
})