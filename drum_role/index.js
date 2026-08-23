var numberOFButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOFButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playTrack);

  function playTrack() {
    var audio = new Audio("sounds/1.mp3");
    audio.play();

    this.style.color = "brown";
  }
}
