var ranNum = Math.floor(Math.random() * 4);

console.log(ranNum);



$(document).ready(function () {

  $("#submit").on("click", function (){
  alert("I am thinking about " + $("#question").val());


$("#userQ").append($("#question").val());

    if(ranNum === 0) {$("#answer").append ("<b>True</b>");


    }
    if(ranNum === 1) {$("#answer").append ("<b>False</b>");


    }
    if(ranNum === 2) {$("#answer").append ("<b>Maybe</b>");


    }
    if(ranNum === 3) {$("#answer").append ("<b>I honestly do not know</b>");


    }


    $("#submit").off("click");

    $("#question").val("");
  });

});
