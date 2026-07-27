// Event Listener Example

function changetext(){
let para= document.getElementById("fpara");
para.textContent="Welcome to Mern Stack Development";
para.style.color="red";
}
let para= document.getElementById("fpara");
para.addEventListener("click",changetext);
// In this code, we have a function called `changetext` that changes the text content and color of a paragraph element
//  with the id "fpara". We then add an event listener to the paragraph element that listens for a "click" event and 
// calls the `changetext` function when the event occurs.

