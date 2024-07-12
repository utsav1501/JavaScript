function SetUsername(username){
    //complex DB calls
    this.username=username;
    console.log("called...");
}

function createUser(username,email,password){
    SetUsername.call(this,username);//setUsername execution context k bahar jane k bad khega thik hai mai ja rha hu ab mere saman apke hue
     this.email=email;
    this.password=password;
}

const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);