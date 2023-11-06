console.log("Howdy!");

var body = document.querySelector("body");

var geluidButton = document.querySelector("header section button");
var geluidImg = document.querySelector("header section button img");
var geluid = document.querySelector("header section audio");

var darkmodeToggle = document.querySelector("header section label input[type='checkbox']");
var backgroundImage = document.querySelector("main ol.background-light");


var speelAf = false;
// Voor regel 7, 13 en 21 bron ChatGPT, voor prompt zie miro

geluidButton.onclick = smurfIntro;

function smurfIntro() {
  if (speelAf) {
    geluid.pause();
    geluidImg.src = "images/muzieksmurf.png";
  } else {
    geluid.play();
    geluidImg.src = "images/muzieksmurfActief.png";
  }
  speelAf = !speelAf;
}



darkmodeToggle.addEventListener("change", switchTheme);


function switchTheme(){
  body.classList.toggle("darkmode");
  backgroundImage.classList.toggle("background-dark");
}