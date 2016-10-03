var userId = $("#userId").val();
var pass = $("#password").val();

$(document).ready(function() {

  $("#submit").on("click", function() {

    console.log("userID is: " + $("#userId").val());
    console.log("password is: " + $("#password").val());
    //
    //
    // $("p").append ($("#password").val());
    //
    //   if (userId === pass || userId.include("#")) {
    //      ("User Id is not valid");
    //   }
    //   if (pass === userId || pass === "password" || !pass.include("#") || !pass.include("!")|| !pass.include("$") || !pass.length >= 6){
    //     $("answer").append ("Password is not valid")
    //   } else{
    //     alert($("#userId").val() + $("#password").val())
    //   }
  });
});





















//
// User ID and password cannot be the same
// User ID and password have to be at least six characters long
// User ID cannot contain the following characters: !#$
// Password has to contain at least one of: !#$
// Password cannot be "password"
// Password has to contain at least one digit
// Password has to contain a lower and an uppercase letter (hint: use toUpperCase or toLowerCase)
// View
//
// Create an input tag for the user ID.
// Create an input tag for the password.
// Create a button tag that sends the user ID and password to the Javascript code.
// Create a p tag for the page's feedback to the user (whether the user's credentials are valid or invalid and any related error messages).
// Controller
//
// Create a click listener that takes the user ID and password from the input tags and displays them in an alert.
// Reuse the code from your previous User ID and Password Validation challenge to compare the user's input to the criteria for a valid user id and password.
// Show an error message in the p tag if the credentials are not valid and why. Use the jQuery functions .append(..) or .text(..).
// Clear unacceptable values from the input fields after an attempted submission. Use the jQuery function .val(..).
// Disable the button after a certain number of log in attempts have been made. Use the jQuery function .off(..).
