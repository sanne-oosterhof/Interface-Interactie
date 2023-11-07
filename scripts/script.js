console.log("Howdy!");

// variabele voor body 
var body = document.querySelector("body");

// variabelen voor muziekbutton
// Voor geluid deels als bron ChatGPT, voor prompt zie miro
var geluidButton = document.querySelector("header section button");
var geluidImg = document.querySelector("header section button img");
var geluid = document.querySelector("header section audio");
var speelAf = false;

// variabelen voor darkmode 
var darkmodeTekst = document.querySelector("header section:nth-of-type(2) p span")
var darkmodeToggle = document.querySelector("header section label input[type='checkbox']");
var backgroundImage = document.querySelector("main ol.background-light");

// Variabelen voor extra's achteraan 
var smurfNietButton = document.querySelector("main ol li button:nth-of-type(1)");
var smurfWelButton = document.querySelector("main ol li button:nth-of-type(2)");
var smurfImgMetLiaan = document.querySelector("main ol li:nth-of-type(9) img:nth-of-type(1)");
var gargamelImg = document.querySelector("main ol li:nth-of-type(10) img");
var normaleSmurf = document.querySelector("main ol li:nth-of-type(9) img:nth-of-type(2)");

// Voor muziek button, darkmode en extra's
geluidButton.onclick = smurfIntro;
darkmodeToggle.addEventListener("change", switchTheme);
smurfNietButton.addEventListener("click", gargamelMaaktKapot)
smurfWelButton.addEventListener("click", smurfSwingen)


// functie voor muziekbutton 
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

// Functie voor darkmode en alles wat daarmee verandert 
function switchTheme(){
  document.documentElement.classList.toggle("darkmode");
  backgroundImage.classList.toggle("background-dark");

  // bron voor tekst toggle: https://www.w3schools.com/howto/howto_js_toggle_text.asp 
  if (darkmodeToggle.checked) {
    darkmodeTekst.textContent = "Aan";
  } else {
    darkmodeTekst.textContent = "Uit";
  }
}

function gargamelMaaktKapot(){
  gargamelImg.classList.add("gargamelLopen");
  normaleSmurf.classList.add("smurfPlat");
}

function smurfSwingen(){
  smurfImgMetLiaan.classList.toggle("smurfSwingen");
}
