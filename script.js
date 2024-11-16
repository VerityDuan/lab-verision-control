
const today= new Date ();
const year = today.getFullYear ();
const fullDate= today.toDateString ();

document.getElementById("adddate").innerHTML= "All Rights Reserved, Verity Duan 2024";

const element= document.getElementById ("adddate");
console.log ("element found:", element);





function revealMessage(){
    document.getElementById ("hiddenMessage").style.display= "block";
}


let firstName = "me";
let favoriteFood= "icecream";
let email= "verityduan@gmail.com"

console.log(typeof firstName);
console.log(`your name is ${firstName}`)
console.log(`you like ${favoriteFood}`)
console.log(`your email is ${email}`) 