gamePattern=[];
userClickedPattern=[];
buttonColors=["green", "red", "yellow", "blue"];
var level=0;
started=false;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
  }
});


$('.btn').on("click", function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  sound(userChosenColour);
  animatePressed(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomColor=buttonColors[randomNumber];
  gamePattern.push(randomColor);
  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
  sound(randomColor);
}


function animatePressed(currentColor){
  $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");
    }, 100);
  }


function sound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  }else {
    sound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}






// function checkAnswer(currentLevel, fcheck){
//   if(gamePattern[fcheck]===userClickedPattern[fcheck]){
//     fcheck++;
//     if(fcheck===currentLevel){
//       setTimeout(function () {
//             nextSequence();
//           }, 1000);
//     fcheck=0;
//     userClickedPattern=[];
//   }
// }
// }



// function checkAnswer(currentLevel){
//   var check=0;
//   for(var i=0; i<currentLevel; i++){
//     if(gamePattern[i]===userClickedPattern[i]){
//       check++;
//       console.log("true");
//     }
//   }
//   if(check===currentLevel){
//       setTimeout(nextSequence, 1000);
//   }
//   userClickedPattern=[];
// }






// function sound(color){
//   switch (color) {
//     case "blue":
//       var blue = new Audio('Sounds/blue.mp3');
//       blue.play();
//       break;
//     case "red":
//       var red = new Audio('Sounds/red.mp3');
//       red.play();
//       break;
//     case "yellow":
//       var yellow = new Audio('Sounds/yellow.mp3');
//       yellow.play();
//       break;
//     case "green":
//       var green = new Audio('Sounds/green.mp3');
//       green.play();
//       break;
//     case "wrong":
//       var wrong = new Audio('Sounds/wrong.mp3');
//       wrong.play();
//       break;
//     default:console.log(color);
//   }
// }
