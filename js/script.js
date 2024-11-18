document.addEventListener("DOMContentLoaded",()=> {

const today= new Date ();
const year = today.getFullYear ();
console.log(today)

const footerElement= document.getElementById ("adddate");
if (footerElement){
    footerElement.innerHTML= `All Rights Reserved, Verity Duan ${year}`;
} else {
    console.error("Element with ID 'adddate' not found.");
}

/* connects css from html to java*/
const currentTime= new Date();
const hours=currentTime.getHours();
const greetingElement=document.getElementById("greeting");
if (hours< 12) {
    greetingElement.innerText= "GoodMorning";
    greetingElement.classList.add("morning");
}
else if (hours >=12&& hours <17){
    greetingElement.innerText="GoodAfternoon!";
    greetingElement.classList.add("afternoon");
} else{
    greetingElement.innerText="GoodEvening";
    greetingElement.classList.add ("evening")
}


function revealMessage(){
    const hiddenMessageElement = document.getElementById ("hiddenMessage");
    if (hiddenMessageElement){
        hiddenMessageElement.style.display="block"
    } else {
        console.error("Element with ID 'hiddenMessage' not found.")
    }
}

const numbersList= document.getElementById("numbers");
for (let i=1; i<=12; i++) {
    const listItem=document.createElement("li");

    console.log(`Creating list item for index ${i}`);
    if(i%2===0){
        listItem.textContent= "even";
    } else{
        listItem.textContent="odd";
    }
    numbersList.appendChild(listItem);
}

const button = document.getElementById('btn-alert');
button.addEventListener('click', function() {
alert('Hello world!');
});
function getId(btn){
    const alert=document.getElementById ("b") 
};

const alertButton= document.getElementById("alertButton");
alertButton.onmouseover=function() {
    alertButton.innerText="YOUSUCK! Just kidding";
};

alertButton.onmouseout= function() {
    alertButton.innerText= "Iamthebest"
};


let firstName = "me";
let favoriteFood= "icecream";
let email= "verityduan@gmail.com"

console.log(typeof firstName);
console.log(`your name is ${firstName}`)
console.log(`you like ${favoriteFood}`)
console.log(`your email is ${email}`) 
})

