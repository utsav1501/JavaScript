function main(){
    const userAuth=(function(){
        const users=[];
        
        //function to register a new user
        function registerUser(username,password){
            if(checkCredentials(username,password)){
            return 'The user is already registered'
        }
        else{
            users.push({username,password});
            return `The user have been added to the registeredUser array`
        }
    }

    //function to check credentials
    function checkCredentials(username,password){
        return users.some(user=>user.username === username && user.password===password)
    }
    return{
        registerUser,checkCredentials
    };

    })();

console.log(userAuth.registerUser("user1","password123"));
//Output: The user have been added to the registeredUser array
console.log(userAuth.registerUser("user1","password123"));
//Output : The user is already registered
return userAuth;
}