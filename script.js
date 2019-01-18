$(document).ready(function() {
// smoth scroll from css tricks
$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus(); 
          };
        });
      }
    }
  }); // end of smooth scroll
  // flickity
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: true,
    prevNextButtons: false,
  });
  // flickity end

  // form
  $('.form').on('submit', function(event) {
    event.preventDefault();
    if ($('.submit').val() == '') {
      alert('Enter a valid email');
    } else {
      alert('Thanks for subscribing!');
    }
  });
  $(function() {
    $("a[href^='#']").not("a[href='#']").click(function() {
       $("#"+$(this).attr("href").slice(1)+"").focus();
    });
 });
});
