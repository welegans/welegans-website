$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});



$(document).on('click', function(event){
var $clickedOn = $(event.target),
    $collapsableItems = $('.collapse'),
    isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
    isLink = ($clickedOn.closest('a').length == 1),
    isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);

if( (!isToggleButton && isLink) || isOutsideNavbar ) {
  $collapsableItems.each(function(){
    $(this).collapse('hide');
  });
}
});


jQuery(window).trigger('resize').trigger('scroll');
