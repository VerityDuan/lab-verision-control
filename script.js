
let emoji = document.getElementById("emoji");

let positionX = 0;  
let positionY = 0; 

let speed = 5; 

function moveEmoji() {
    positionX += speed;
    positionY += speed;

    emoji.style.position = "absolute"; 
    emoji.style.left = positionX + "px"; 
    emoji.style.top = positionY + "px";  

    if (positionX > window.innerWidth || positionY > window.innerHeight) {
        positionX = 0;
        positionY = 0;
    }
}
setInterval(moveEmoji, 10);


document.getElementById("changeTextBtn").onclick = function() {
    document.getElementById("greeting").innerHTML = "Hello, JavaScript!";}
    
const footer = document.getElementById('footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = `(c) Your Name, ${currentYear}`;

