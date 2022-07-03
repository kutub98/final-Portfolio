$('.single-item').slick({
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
}
   
);


$('.one-time').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
});



$(function ($) {

    $(document).ready(function () {
    //banner slider js 
    var mySlider = $('.pogoSlider').pogoSlider().data('plugin_pogoSlider');
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.portfolioimg').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});


$('.center').slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    prevArrow: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
  });
