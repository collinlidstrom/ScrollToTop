// Add this JavaScript code to your website theme and make sure jQuery is used.
// The script checks the height position on every page scroll and fades in the widget,
// if it has reached the 100px limit while another event listener detects the button,
// clicks and smoothly scrolls back to the top of the page.

/*Scroll to top when arrow up clicked BEGIN*/
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
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

});
/*Scroll to top when arrow up clicked END*/
