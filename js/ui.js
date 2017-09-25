$(document).ready(function(){
  // LOADER
  var overlay = document.getElementById("overlay");
  window.addEventListener('load', function(){
    overlay.style.display = 'none';
  })

   // CAROUSEL
  $('#carousel').slick({
    dots: true,
    autoplay: true,
    accessibility: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //FILTER
   $('.main-iso').isotope({
     itemSelector: '.item',
     layoutMode: 'fitRows'
   });

   $('.iso-nav ul li').click(function () {
     //ACTIVE CLASS
     $('.iso-nav ul li').removeClass('active');
     $(this).addClass('active');

     var selector = $(this).attr('data-filter');
     $('.main-iso').isotope({
       filter: selector
     });
     return false;
   })

   //SMOOTH SCROLLING

   // Add smooth scrolling to all links in navbar + footer link
      $("#tf-menu.navbar-default .navbar-nav > li > a").on('click', function(event) {
          var hash = this.hash;
          if( hash ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });
          }

    });
});
