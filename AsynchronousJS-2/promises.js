const request=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log('Promise Initiated');
        // resolve('Promise fulfilled');
        // resolve({firstName:'utsav',lastName:'kumar'})

        reject("Request has been rejected")
    },1000);
});

//if u want to use the resolve value of object use then method on promise

request.then((value)=>{//if promise is fulfilled
    console.log(value);
})
.catch((err)=>console.log(err)) .finally(()=>console.log('request completed'))

console.log(request);



//.then->if promise is fulfilled
//.catch->if promise is not fulfilled
//.finally->it will work regardless the operation is either rejected or fulfilled
