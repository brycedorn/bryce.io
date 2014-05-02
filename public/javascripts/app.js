$(document).ready(function() {
  $("#moon").click(function() {
    $(this).css('width',$(window).width()*0.3);
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  });

  // Mobile
  if($(window).width() < 768) {
    $('canvas').hide();
    $('#moon').hide();
    $('#mobile').unhide();
  }
});
