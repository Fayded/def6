$(document).ready(function(){

  if(!Modernizr.input.placeholder)  {

    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() === input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() === '' || input.val() === input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() === input.attr('placeholder')) {
        input.val('');
      }
      });
    });

  }

});

$(function () {
  var slider = [{
      "src" : "images/img_hero_1.jpg",
      "name" : "Hero 1"
  },
  {
      "src" : "images/img_hero_2.jpg",
      "name" : "Hero 2"
  }];

  var current_number = 0;

  setInterval(function() {
      swapImage();
  }, 7000);

  function swapImage() {
    $('#slider img').fadeOut("slow",function() {
    whichImage(current_number);
      $('#slider img').attr('src', slider[current_number].src);
    $('#slider img').fadeIn().delay(500);
    });
  }

  function whichImage(new_number) {
    current_number = new_number + 1;
    if(current_number === slider.length){
      current_number = 0;
    }
    return current_number;
  }
});