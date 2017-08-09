$(document).ready(function() {

  // a-series hover effect
  $('#a').hover(function() {;
    $('#a-drop').slideToggle(800);
   });

  $('#avf').hover(function() {;
    $('#avf-drop').slideToggle(800);
  });

  // b-series hover effect
  $('#b').hover(function() {;
    $('#b-drop').slideToggle(800);
  });

  $('#c').hover(function() {;
    $('#c-drop').slideToggle(800);
  });

  $('#d').hover(function() {;
    $('#d-drop').slideToggle(800);
  });

  $('#e').hover(function() {;
    $('#e-drop').slideToggle(800);
  });

  $('#g').hover(function() {;
    $('#g-drop').slideToggle(800);
  });

  $('#s').hover(function() {;
    $('#s-drop').slideToggle(800);
  });

  $('#former').hover(function() {;
    $('#former-drop').slideToggle(800);
  });

  $('#unid').hover(function() {;
    $('#unid-drop').slideToggle(800);
  });

  $('.fa-bars').click(function() {
    var btns = $('.btn-default').show();
    $('.fa-bars:after').append(btns);
  });
});