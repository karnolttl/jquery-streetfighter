var isPosing = false;

$(document).ready(function() {
  $('.ryu, .hulk-ryu').mouseenter(function() {
    if (!isPosing) {
      $('.ryu-still, .hulk-ryu-still').hide();
      $('.ryu-ready, .hulk-ryu-ready').show();
    }
  })
  .mouseleave(function() {
    if (!isPosing) {
      $('.ryu-ready, .hulk-ryu-ready').hide();
      $('.ryu-still, .hulk-ryu-still').show();
      $('.ryu-throwing, .hulk-ryu-throwing').hide();
    }
  })
  .mousedown(function() {
    if (!isPosing) {
      $('#hadouken-sound')[0].volume = 1;
      $('#hadouken-sound')[0].load();
      $('#hadouken-sound')[0].play();
      $('.ryu-ready, .hulk-ryu-ready').hide();
      $('.ryu-throwing, .hulk-ryu-throwing').show();
      $('.hadouken').finish().show().animate(
        {'left': '700px'},
        500,
        function() {
          $(this).hide();
          $(this).css ('left', '520px');
        });
      $('.hulk-hadouken').finish().show().animate(
        {'left': '850px'},
        500,
        function() {
          $(this).hide();
          $(this).css ('left', '1200px');
        });
    }
  })
  .mouseup(function() {
    if (!isPosing) {
      $('.ryu-ready, .hulk-ryu-ready').show();
      $('.ryu-throwing, .hulk-ryu-throwing').hide();
    }
  });
});


$(document).keydown(function(e){
  if (e.which == 88) {
    isPosing = true;
    $('#intro-music')[0].volume = 1;
    $('#intro-music')[0].play();
    $('.ryu-posing, .hulk-ryu-posing').show();
    $('.ryu-throwing, .hulk-ryu-throwing').hide();
    $('.ryu-ready, .hulk-ryu-ready').hide();
    $('.ryu-still, .hulk-ryu-still').hide();
  }
})
  .keyup(function(e){
    if (e.which == 88) {
      isPosing = false;
      $('#intro-music')[0].pause();
      $('#intro-music')[0].load();
      $('.ryu-posing, .hulk-ryu-posing').hide();
      $('.ryu-ready, .hulk-ryu-ready').show();
    }
});
