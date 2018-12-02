// BY KAREN GRIGORYAN

$(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 250) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({ scrollTop: 0}, "slow");
    return false;

  }); // click() scroll top EMD
}); // ready() END




/*$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
}); */

/*jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#backToTop').fadeIn('slow');
        } else {
            $('#backToTop').fadeOut('slow');
        }
    });
    $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});

$(document).ready(function() {


// declare variable
var scrollTop = $(".scrollTop");

$(window).scroll(function() {
  // declare variable
  var topPos = $(this).scrollTop();

  // if user scrolls down - show scroll to top button
  if (topPos > 200) {
    $(scrollTop).css("opacity", "1");

  } else {
    $(scrollTop).css("opacity", "0");
  }

}); // scroll END


//Click event to scroll to top
$(scrollTop).click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;

});// click() scroll top END

}); // ready() END */
