function fetchData(callback){
    setTimeout(function(){
        callback();
    },2000);
}

fetchData(function(){

    fetchData(function(){

        fetchData(function(){
            console.log("Data3");
        });
        console.log("Data2");
    });
    console.log("Data1");
})