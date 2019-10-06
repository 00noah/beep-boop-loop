// business logic

var numberArray = []
var ammendedArray = []



// USER LOGIC
$(document).ready(function() {
  $("#userForm").submit(function (event) {
    event.preventDefault();
    // SHOW SCRIPT OUTPUT
    $('.scriptOutput').show();

    // ACCEPT USER FIELDS
    var userNumber = parseInt($("#userInput").val());
    $(".userInput").text(userNumber);

    // CLEAR (POSSIBLE) PREVIOUS ANSWERS IN UL
    var list = document.getElementById("listOutput");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    };

    // LOOP UP TO USER'S NUMBER TO PUSH TO ARRAY AND APPPEND.
    for (let n = 0; n <= userNumber; n += 1) {
      numberArray.push(n.toString());
      $('ul#listOutput').append('<li>' + numberArray[n] + '</li>');
    };

    for (let n = 0; n <= userNumber; n += 1) {
      if (numberArray.includes("1")) {
        ammendedArray.push(n.toString());
      }
      else if (numberArray.includes("2")) {
        ammendedArray.push(n.toString());
      }
      else {
        ammendedArray.push(n.toString());
      };
  };





    // TESTING AMMENDED ARRAY CONDITIONS
    // var ammendedArray = numberArray.map();

    // for (let n = 0; n <= numberArray.length; n += 1) {
    //   if n ===
    // };



    // TESTING START
    console.log(numberArray)
		$(".numberArray").text(numberArray);
    console.log(ammendedArray)
		$(".numberArray").text(ammendedArray);
    // RESET ARRAY TO BLANK TO READY FOR FUTURE USES
    numberArray = []

  });
});
