// const buttonElement=document.querySelector('.button');

// const textElement=document.querySelector('#text');

// buttonElement.addEventListener('click',()=>{
//     textElement.textContent='Button is pressed';
    //but i want the text ie.button is preesed go after 2seconds
//     setTimeout(()=>{
//         textElement.textContent='';
//     },2000);
// })

for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }