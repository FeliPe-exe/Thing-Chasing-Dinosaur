var character = document.getElementById("character");
var obstacles = document.getElementById("obstacles");
var counter = document.getElementById("counter").style.fontSize = "20px";
var timePassed = 0;
var timeContainer = document.getElementById("timePassed");


function jump() {
  if (character.classList != ("animate")) {
    character.classList.add("jump");
    setTimeout(function () { character.classList.remove("jump") }, 500)
  }
}

setInterval(function () {
  timePassed++;
  timeContainer.innerHTML=timePassed;
}, 1000);


function win(){
  if (timePassed == 11) {

    alert("YOU BEAT THE THING");
    obstacles.style.animation = "none";
    obstacles.style.display = "none";
   
    !timePassed++;
    
  }
} 

function collisionDetection() {

  setInterval(function () {
    var positionCharacter = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var positionobstacle = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    if (positionobstacle < 20 && positionobstacle > 0) {
      if (positionCharacter >= 225) {
        obstacles.style.animation = "none";
        obstacles.style.display = "none";
        alert("THE THING HAS CAUGHT YOU ");
        !timePassed++;
        !win();
        
      }
    }
    win();
  }
    , 10);


}






collisionDetection();

