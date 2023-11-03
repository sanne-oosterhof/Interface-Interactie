console.log("Howdy!");

var geluidButton = document.querySelector("header section button");
var geluidImg = document.querySelector("header section button img");
var geluid = document.querySelector("header section audio");

var isPlaying = false;

geluidButton.onclick = smurfIntro;

function smurfIntro() {
  if (isPlaying) {
    geluid.pause();
    geluidImg.src = "images/muzieksmurf.png";
  } else {
    geluid.play();
    geluidImg.src = "images/muzieksmurfActief.png";
  }

  isPlaying = !isPlaying;
}
