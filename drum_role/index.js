var numberOFButtons = document.querySelectorAll(".drum").length;

// mouse event listener
for (var i = 0; i < numberOFButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playTrack(buttonInnerHTML);
  });
}

// keyboard event listener
document.addEventListener("keypress", function (event) {
  playTrack(event.key);
});

// function to play relevant sound
function playTrack(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/5.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/6.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/7.mp3");
      audio.play();
      break;
  }
  this.style.color = "brown";
}
