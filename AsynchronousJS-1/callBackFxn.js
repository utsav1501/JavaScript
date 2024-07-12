function greet(callBack){
    setTimeout(()=>{
        console.log("Hello")
        callBack();
    },1000);
}

function welcome(){
    console.log("Welcome to the coding World");
}

greet(welcome);//callback implemented 

//this program ensures that something happens only when some other thing 
//happened, or

// if you are fetching something from server you may not get data at instant
//there might be server down issue,internet issue
  