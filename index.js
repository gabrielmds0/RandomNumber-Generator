const randomNumber = document.getElementById("numberLabel");
const generate = document.getElementById("generate-button");

let number = 0;

generate.onclick = function(){
    number = Math.floor(Math.random()*1000)+1;
    randomNumber.textContent = number;
}
