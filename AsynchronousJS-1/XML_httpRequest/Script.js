//fetching data from server(dummyjson) using XMLHttpRequest

const divEle=document.querySelector('.card-container');

function getDetails(id){

const request = new XMLHttpRequest();//request object of XMLHttpRequest
// console.log(request)

//Initiating the request with get method
//Open a connection with the server by specifying the method (GET, POST, etc.)and URL
request.open("GET",`https://dummyjson.com/users/${id}`)//open let you to interact with the server
request.send();//sending request to server for fetching data from server

request.addEventListener("load",function(){//load event listener ,when all the data has been loaded succesfully fxn executed
//    console.log(request.responseText);//what im getting from server is inside response text

    if(request.status===404){
    return;
    }
   //changing string data type to JSONobject
   const data=JSON.parse(this.responseText);
   console.log(data);
   displayUser(data,"beforeend");


    //Here wo do 2nd request for 2nd user
    const request2= new XMLHttpRequest();
    //opening the connection with server
    request2.open("GET",`https://dummyjson.com/users/${id-1}`)
    request2.send();
    request2.addEventListener("load",function(){
        if(request2.status===404){
            return;
        }
       const data=JSON.parse(this.responseText);
       console.log(data);
       displayUser(data,"afterbegin",'other');

    const request3= new XMLHttpRequest();
    //opening the connection with server
    request3.open("GET",`https://dummyjson.com/users/${id+1}`)
    request3.send();
    request3.addEventListener("load",function(){
       const data=JSON.parse(this.responseText);
       console.log(data);
       displayUser(data,"afterbegin",'other');
    }) 
}) 
});
}

function displayUser(data,pos,className=' '){
    const card=`<div class="user-card ${className}">
   <img src=${data.image} alt="Profile Image" />
   <h3>${data.firstName}</h3>
   <h3>${data.lastName}</h3>
   <p class="email">${data.email}</p>
   <button class="btn">View Profile</button>
   </div>`;

   //divEle.innerHTML=card;
   divEle.insertAdjacentHTML(pos,card);//it is DOM
}


getDetails(1)



