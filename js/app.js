$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    $('.ryu-posing').hide();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    $('.ryu-throwing').hide();
    $('.ryu-posing').hide();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css ('left', '520px');
      });
  })
  .mouseup(function() {
    $('.ryu-ready').show();
    $('.ryu-throwing').hide();
  });
});

$(document).keydown(function(e){
  if (e.which == 88 || e.which == 120) {
    playMusic();
    $('.ryu-posing').show();
    $('.ryu-throwing').hide();
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
  }
})
  .keyup(function(e){
    if (e.which == 88 || e.which == 120) {
      $('#intro-music')[0].pause();
      $('#intro-music')[0].load();
      $('.ryu-posing').hide();
      $('.ryu-ready').show();
    }
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 1;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

var isMusicPlaying = false;
function playMusic () {
  isMusicPlaying = !isMusicPlaying;
  if (isMusicPlaying) {
    $('#intro-music')[0].volume = 1;
    $('#intro-music')[0].play();
  }
}
