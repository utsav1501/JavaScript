const p=document.querySelector("p")

// p.addEventListener("click",clickPara);
//In eventListener u add the 1st para as the action u want too perform or type of event
//2nd para is the action u need/want to perform



// agar hame eventlistener ke 2nd para me kuch parameter pass krna ho function 
//me then we use call back function or arrow function as a parameter

p.addEventListener("click",function(){
    clickPara("Hello")
});
function clickPara(name){
    console.log(name +" Para Clicked")
}

