$(document).ready(function(){
    $(".review_slider").owlCarousel(

       {

        items: 1,
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,

        responsive: {
          991: {
            items: 2,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
          },
        }
       }
    );
  });