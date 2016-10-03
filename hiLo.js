var secretNum = Math.floor(Math.random() * 100);

console.log(secretNum);
var counter = 0


$(document).ready(function() {

  $("button").on("click", function(){
    var userNumber = $("#userNumber").val();

    alert("You Guessed " + userNumber);

    if(parseInt(userNumber) > secretNum && counter < 7) {
      $("#answer").append ("Your guess " + userNumber +  " is too high!"  + "<br>");
      counter++
    }

    if(parseInt(userNumber) < secretNum && counter < 7) {
    $("#answer").append ("Your guess " + userNumber + " is too low!" + "<br>" );
      counter++;
    }
    if (counter > 4) {

    $("#answer").addClass ("tries")
  };
  if (counter === 7) {

  $("#answer").append ("You lose! T_T ");
  $("button").hide();

};

    if(parseInt(userNumber)=== secretNum) {
    $("#answer").append ("You guessed the secret number! da da da da da da da da da *~~~~")
  };

  $("#userNumber").val("");
  });
});


// $("#userQ").append($("#question").val());
//
//     if(ranNum === 0) {$("#answer").append ("<b>True</b>");
//
//
//     }
//     if(ranNum === 1) {$("#answer").append ("<b>False</b>");
//
//
//     }
//     if(ranNum === 2) {$("#answer").append ("<b>Maybe</b>");
//
//
//     }
