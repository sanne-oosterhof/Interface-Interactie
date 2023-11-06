console.log("Howdy!");

// variabele voor body 
var body = document.querySelector("body");

// variabelen voor muziekbutton
// Voor regel 11, 20 en 30 bron ChatGPT, voor prompt zie miro
var geluidButton = document.querySelector("header section button");
var geluidImg = document.querySelector("header section button img");
var geluid = document.querySelector("header section audio");
var speelAf = false;

// variabelen voor darkmode 
var darkmodeTekst = document.querySelector("header section:nth-of-type(2) p span")
var darkmodeToggle = document.querySelector("header section label input[type='checkbox']");
var backgroundImage = document.querySelector("main ol.background-light");

// Voor muziek button 
geluidButton.onclick = smurfIntro;
darkmodeToggle.addEventListener("change", switchTheme);

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