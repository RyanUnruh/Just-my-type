$(document).ready(function () {


  $('#keyboard-upper-container').hide();
});


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
    if(currentSentence.charCodeAt(l) === e.keyCode) {
      $('#feedback').append("<span class= 'glyphicon-ok'></span>");
    } else {
      $('#feedback').append("<span class= 'glyphicon-remove'></span>");
    } 
    
    if(currentSentence.charCodeAt(l) === e.keyCode)
    $('#yellow-block').css('left', '+=17.5');
    l++;
    currentLetter = currentSentence[l];
    $('#target-letter').text(currentLetter);
  })

// sentance
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];


// Highlight axpected key
let s = 0;
let l = 0;
let currentSentence = sentences[s];
let currentLetter = currentSentence[l];

$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);


