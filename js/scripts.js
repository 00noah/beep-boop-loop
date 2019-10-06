// business logic

numberArray = []


for (let n = 0; n < userNumber; n + 1) {
  ;
};

// user logic
$(document).ready(function() {
  $("#userForm").submit(function (event) {
    event.preventDefault();
    $('.scriptOutput').show();

    var userNumber = parseInt($("#userInput").val());
    $(".userInput").text(userNumber);




    // for (var index = number1Input; index <= number2Input; index += number1Input) {
    //   $('.answer').append(index + ", ");
    // };





  })
});
