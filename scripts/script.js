console.log("Howdy!");

var geluidButton = document.querySelector("header section button");
var geluidImg = document.querySelector("header section button img");
var geluid = document.querySelector("header section audio");

var darkmodeToggle = document.querySelector("header section:nth-of-type(2) label");
var body = document.querySelector("body");

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



// darkmodeToggle.addEventListener("click", switchTheme);

// function switchTheme(){
//   body.classList.toggle("darkmode");
// }