const promise1=new Promise((resolve)=>setTimeout(()=>resolve(1),1000));
const promise2=new Promise((resolve)=>setTimeout(()=>resolve(1),500));

Promise.all([promise1,promise2]).then((results)=>console.log(results));
//The js Promise. all method is used to wait for all promises to resolve, 
//and then the values are logged.