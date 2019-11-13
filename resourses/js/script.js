$("a.reset").click(function(e){
  e.preventDefault();

  //$("div.top").removeClass("dot1");
  //$("div.mid").removeClass("dot2");
  //$("div.btm").removeClass("dot3");
  $("li.title-animate").removeClass("title-animate");

  setTimeout(function(){
    //$("div.top").addClass("dot1");
    //$("div.mid").addClass("dot2");
    //$("div.btm").addClass("dot3");
    $("ul.titles li").addClass("title-animate");
  }, 500);
});



$(document).ready(function() {
    //apaire in the second section 
    //step 1 : select the second section
  var waypoint = new Waypoint({
    element: document.getElementsByClassName('js-section-education'),
    handler: function(direction) {
        if (direction == "down") {
          //appaire the sticky nav
          $('nav').addClass('sticky');
      } else {
          //disapaire the sticky nav
          $('nav').removeClass('sticky');
      }
    },
    offset: '60px' 
  })

  //scroll on buttons
  $('.js-scroll-to-features').click(function () {
    $('html, body').animate({scrollTop: $('.js-section-education').offset().top}, 1000);//1000ms=1s
  });


  //scroll navigation
  //using smooth scrolling
  $(function() {
        $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({ scrollTop: target.offset().top }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  });

  // animations 1=>for the features , 2=>for the screen phone
  $('.js-wp-animate-1').waypoint(function (direction) {
    $('.js-wp-animate-1').addClass("animated fadeIn");
  }, {
    offset: '60%'
  });

  $('.js-wp-animate-phone').waypoint(function (direction) {
    $('.js-wp-animate-phone').addClass("animated fadeInUp");
  }, {
    offset: '60%'
  });

  //mobile nav 
  $('.js-mobile-nav-icon').click(function() {
    var nav = $('.js-menu');
    var icon = $('.js-mobile-nav-icon i');

    nav.slideToggle(200);//200 ms

    if($('.js-mobile-nav-icon i').hasClass("icon ion-md-menu")){
      icon.removeClass("ion-md-menu");
      icon.addClass("ion-md-close");

    } else {
      icon.removeClass("icon ion-md-close");
      icon.addClass("icon ion-md-menu");

    }
  });
});

