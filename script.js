


document.getElementById("changeTextBtn").onclick = function() {
    document.getElementById("greeting").innerHTML = "Hello, JavaScript!";}
    
const footer = document.getElementById('footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = `(c) Your Name, ${currentYear}`;

