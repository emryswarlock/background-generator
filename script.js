var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2  = document.querySelector(".color2");
var body = document.querySelector("body");
var random = document.querySelector("button");

setGradient();

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

// function random color to generate a random-color
function randomColor() {
    color1.value = "#"+((1<<24)*Math.random()|0).toString(16);
    color2.value = "#"+((1<<24)*Math.random()|0).toString(16);
    setGradient();
}

//add an eventListener for color1 & color2 input
color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

// add random color button trigger
random.addEventListener("click",randomColor);