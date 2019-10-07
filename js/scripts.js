// business logic

var numberArray = []
var ammendedArray = []
var remixArray = []


// USER LOGIC
$(document).ready(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();

    // SHOW SCRIPT OUTPUT
    $('.scriptOutput').show('easing');

    // ACCEPT USER FIELDS
    var userNumber = parseInt($("#userInput").val());
    $(".userInput").text(userNumber);

    // CLEAR (POSSIBLE) PREVIOUS ANSWERS IN UL
    var list = document.getElementById("listOutput");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    };

    // IF NEGATIVE
    if (userNumber < 0) {
      alert("That's a negative number, silly." + " Please try again!");
    }

    // LOOP UP TO USER'S NUMBER TO PUSH TO ARRAY AND APPPEND.
    for (let n = 0; n <= userNumber; n += 1) {
      numberArray.push(n.toString());
    };

    numberArray.forEach(function(amendment) {
      if (amendment.includes("3") === true) {
        ammendedArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
        $('ul#listOutput').append('<li class="dave">' + ammendedArray[amendment] + '</li>');
      } else if (amendment.includes("2") === true) {
          ammendedArray.push("Boop!");
          $('ul#listOutput').append('<li class="boop">' + ammendedArray[amendment] + '</li>');
      } else if (amendment.includes("1") === true) {
          ammendedArray.push("Beep!");
          $('ul#listOutput').append('<li class="beep">' + ammendedArray[amendment] + '</li>');
      } else {
        ammendedArray.push(amendment);
        $('ul#listOutput').append('<li>' + ammendedArray[amendment] + '</li>');
      }
    });

    // DEBUG TESTING
    console.log(numberArray)
    console.log(ammendedArray)


    $("#userForm").click(function(event) {
      event.preventDefault();
      alert("ReMix!")


      // DEBUG TESTING
      console.log(remixArray)
    });

    // RESET ARRAY TO BLANK TO READY FOR FUTURE USES
    numberArray = []
    ammendedArray = []
    remixArray = []
  });
});
