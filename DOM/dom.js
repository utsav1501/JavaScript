const heading=document.querySelector(".second");
const para=document.querySelector("#para");
console.log(heading);
console.log(para);

console.log(document.getElementById("para"));
console.log(document.getElementsByClassName("second"))

console.log(document.getElementsByTagName('h1'))

//Till here we are just fetching the data....now we do some changes here

heading.style.color='red';
para.style.backgroundColor="grey";


//when we have to create element inside html then we use createElement() method

const btn=document.createElement("button");
btn.textContent="Click here";//adding placeholder
btn.className="btn1";//class name
btn.id="btn";//id name 

//where button should be located
const division=document.querySelector("div");//bcz we have to put btn inside div so we are keeping its reference
division.appendChild(btn);//append method puts butn inside div


// creating elements using backticks

// var elements=`
//         <div class="element">Element 1</div>
//         <div class="element">Element 2</div>
//         <div class="element">Element 3</div>
// `;


//deletion from dom

// document.querySelector("h3").remove();

//Events(on clicking button heading removed)
// const heading1=document.querySelector("h2");
// const removeButton=document.getElementById("btn");

// removeButton.addEventListener('click',removeheading);

// function removeheading(){
//     heading1.remove();
// }

// another way

btn.addEventListener('click',()=>document.querySelector('h2').remove())


// mouseOver(on hovering it works)

// const p=document.querySelector('p');
// p.addEventListener('mouseover',function(){
//     p.style.backgroundColor='yellow';
// })


// mouseDown(on clicking it works)
const p1=document.querySelector('p');
p1.addEventListener('mousedown',function(){
    p1.style.backgroundColor='yellow';
})

// mouseUp(on clickout color changes to normal)

const p=document.querySelector('p');
p.addEventListener('mouseup',function(){
    p.style.backgroundColor='';
})


// counting number of times key is pressed
document.body.addEventListener('keydown',(event)=>{
    console.log("keyPressed")
    // console.log(event.key)
    console.log(event.keyCode)//gives ascii value of alphabet

})

//Bubbling
document
    .querySelector('h3')
    .addEventListener('click',()=>
    console.log('Heading 3 clicked')
);




