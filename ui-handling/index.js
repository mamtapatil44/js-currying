// In JavaScript UI frameworks like React, event handlers are often passed functions that handle user interactions. Currying can help optimize event handling by allowing you to partially apply arguments.


function handleClick(msg,event){
    console.log(msg,event.target)
}

const curriedHandleclick = (msg)=>(event)=>handleClick(msg,event)

const btn1 = document.querySelector("#btn1")

const btn2 = document.querySelector("#btn2")

btn1.addEventListener('click',curriedHandleclick("btn1 clicked"));
btn2.addEventListener('click',curriedHandleclick("btn2 clicked"))

// The curried function curriedHandleClick takes the message as the first argument and 
// returns another function that takes the event object. 
// This allows you to customize the message for each event while using the same handleClick 
// function to handle the actual logic.
// You avoid repetition of the same logic (i.e., handleClick) for each event.