var guess = randomNumber();
var count = 0;

$(document).ready(function () {
  /*--- Display information modal box ---*/
  $(".what").click(function () {
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function () {
    $(".overlay").fadeOut(1000);
  });

  $('.new').on('click', newGame);

  $('#guessButton').on('click', function (e) {
    e.preventDefault();
    var number = $('#userGuess').val();
    if (validateInput(number)) {
      var guessNumber = notify(number, guess);
      count++;
      $('#count').text(count);
      $('#feedback').text(guessNumber);
      $('#guessList').append('<li>' + number + '</li>');
      $('#userGuess').val('');
      if (guessNumber === 'Match Game! Please Restart!') {
        $(this).prop('disabled', true);
      }
    } else {
      alert('Please input a number between 1 and 100!');
      $('#userGuess').val('');
    }
  })
});


function newGame() {
  guess = randomNumber();
  count = 0;
  $('#count').text(count);
  $('#guessList').empty();
  $('#userGuess').val('');
  $('#feedback').text('Make your Guess!');
  console.log(guess);
  return false;
}

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function validateInput(value) {
  return +value >= 1 && +value <= 100;
}

function notify(number, guess) {
  var guessNumber = Math.abs(number - guess);
  if (guessNumber > 50) {
    return 'Ice cold';
  } else if (guessNumber > 30 && guessNumber <= 50) {
    return 'cold';
  } else if (guessNumber > 20 && guessNumber <= 30) {
    return 'Warm';
  } else if (guessNumber > 10 && guessNumber <= 20) {
    return 'Hot';
  } else if (guessNumber >= 1 && guessNumber <= 10) {
    return 'Hottest'
  } else {
    return 'Match Game! Please Restart!';
  }

}
