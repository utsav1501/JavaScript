const divEle=document.querySelector('.card-container');


const request = new XMLHttpRequest();//request object of XMLHttpRequest

//Initiating the request with get method
request.open("GET","https://dummyjson.com/users/40")//open let you to interact with the server
request.send();//sending request to server for fetching data from server

request.addEventListener("load",function(){//load event listener ,when all the data has been loaded succesfully fxn executed
   // console.log(typeof request.responseText);//what im getting from server is inside response text
    
   //changing string data type to JSONobject
   const data=JSON.parse(this.responseText);
   console.log(data);

   const card=`<div class="user-card">
   <img src=${data.image} alt="Profile Image" />
   <h3>${data.firstName}</h3>
   <h3>${data.lastName}</h3>
   <p class="email">${data.email}</p>
   <button class="btn">View Profile</button>
   </div>`

   divEle.innerHTML=card;
});

