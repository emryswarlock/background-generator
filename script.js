var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2  = document.querySelector(".color2");
var body = document.querySelector("body");

// function to set background-linear-gradient
function setGradient(){
    body.style.background = "linear-gradient(to right, " 
        + color1.value 
        + ", "
        + color2.value
        +")";

    // add some text to h3
    h3.innerHTML = body.style.background;
}

//add an eventListener for color1 & color2 input
color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);