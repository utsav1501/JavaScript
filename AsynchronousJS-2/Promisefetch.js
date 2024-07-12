const divEle=document.querySelector('.card-container');

function getDetails(id){
    // const request=fetch(`https://dummyjson.com/users/${id}`);
    // console.log(request);

    // const response=request.then((response)=>{//then captures the value returned by server
    //     // console.log(response);
    //     return response.json();//return promise
    // })
    // console.log(response);
    // response.then((user)=>console.log(user));



fetch(`https://dummyjson.com/users/${id}`)
.then((response)=>{
    if(!response.ok){
        throw new Error("Id does not match any data");
    }
    return response.json()
})
.then((user)=>console.log(user))
.catch((err)=>{
    // console.error(err);
    console.log(err);
})
}

getDetails(0);