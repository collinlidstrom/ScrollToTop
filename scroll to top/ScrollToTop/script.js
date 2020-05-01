/*Scroll to top when arrow up clicked BEGIN*/

// function for scroll to top button used by: demo.html
// button styling source: style.css

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('#back2Top').fadeIn();
  } else {
    $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
    // console.log("Scrolling to top!")
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

});
/*Scroll to top when arrow up clicked END*/
