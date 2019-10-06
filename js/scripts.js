// business logic

numberArray = []




// user logic
$(document).ready(function() {
  $("#userForm").submit(function (event) {
    event.preventDefault();
    $('.scriptOutput').show();

    var userNumber = parseInt($("#userInput").val());
    $(".userInput").text(userNumber);
    // TESTING START
    console.log(numberArray)
		$(".numberArray").text(numberArray);
    // TESTING END

    for (let n = 0; n <= userNumber; n += 1) {
      numberArray.push(n);
      $('ul#listOutput').append('<li>' + numberArray[n] + '</li>');
    };


    // for (var index = number1Input; index <= number2Input; index += number1Input) {
    //   $('.answer').append(index + ", ");
    // };





  })
});
