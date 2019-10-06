// business logic

numberArray = []




// user logic
$(document).ready(function() {
  $("#userForm").submit(function (event) {
    event.preventDefault();
    $('.scriptOutput').show();

    var userNumber = parseInt($("#userInput").val());
    $(".userInput").text(userNumber);

    // Get the <ul> element with id="myList"
    var list = document.getElementById("listOutput");
    // As long as <ul> has a child node, remove it
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    };


    for (let n = 0; n <= userNumber; n += 1) {
      numberArray.push(n);
      $('ul#listOutput').append('<li>' + numberArray[n] + '</li>');
    };

    // TESTING START
    console.log(numberArray)
		$(".numberArray").text(numberArray);
    // TESTING END
    numberArray = []

    // for (var index = number1Input; index <= number2Input; index += number1Input) {
    //   $('.answer').append(index + ", ");
    // };





  })
});
