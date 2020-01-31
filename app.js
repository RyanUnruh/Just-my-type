$(document).ready(function () {
  $('#keyboard-upper-container').hide();
});

// Sentences
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];


// Highlight expected key
let sentenceCounter = 0;
let letterCounter = 0;
let currentSentence = sentences[sentenceCounter];
let currentLetter = currentSentence[letterCounter];
$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);


// Shift Key
$(document).keydown(function (e) {
  if (e.which === 16) {

    $('#keyboard-lower-container').hide()
    $('#keyboard-upper-container').show()
  }
});

$(document).keyup(function (e) {
  $('.highlight').removeClass('highlight');
  if (e.keyCode === 16) {

    $('#keyboard-upper-container').hide();
    $('#keyboard-lower-container').show();
  }
});

// keyboard highlight
$(document).keypress((e) => {
  $('#' + e.keyCode).addClass('highlight');

  $('#feedback').empty();

  if (currentSentence.charCodeAt(letterCounter) === e.keyCode) {
    letterCounter++;
    currentLetter = currentSentence[letterCounter];
    $('#target-letter').text(currentLetter);
    $('#yellow-block').css('left', '+=17.5');
    $('#feedback').append("<span class='glyphicon glyphicon-ok'></span>");
  } else {
    $('#feedback').append("<span class='glyphicon glyphicon-remove'></span>");
  }


  if (letterCounter < currentSentence.length) {
    return
  } else {
    $('#sentence').empty();
    sentenceCounter++
    $('#sentence').text(currentSentence);  
  }
});
