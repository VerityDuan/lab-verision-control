document.addEventListener("DOMContentLoaded"), ()=> {

const today= new Date ();
const year = today.getFullYear ();


const footerElement= document.getElementById ("adddate");
if (footerElement){
    footerElement.innerHTML= `All Rights Reserved, Verity Duan ${year}`;
} else {
    console.error("Element with ID 'adddate' not found.");
}


function revealMessage(){
    const hiddenMessageElement = document.getElementById ("hiddenMessage");
    if (hiddenMessageElement){
        hiddenMessageElement.style.display="block"
    } else {
        console.error("Element with ID 'hiddenMessage' not found.")
    }
}

function getId(btn){
    const alert=document.getElementById ("b")
    
    
}


let firstName = "me";
let favoriteFood= "icecream";
let email= "verityduan@gmail.com"

console.log(typeof firstName);
console.log(`your name is ${firstName}`)
console.log(`you like ${favoriteFood}`)
console.log(`your email is ${email}`) 
}

