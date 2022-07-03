$(function ($) {
   
  $('.clickShow').click(function (){
    $('.clickNav ul li').slideToggle(500);

  });
  $('.click_seaerch').click(function (){
    $('.input input').slideToggle(500);

  })

  var meno = $('.topMenu');
  var pstion =meno.offset().top;

  $(window).on('scroll', function(){
    var topPosition= $(window).scrollTop();
    if(topPosition>pstion){
      meno.addClass('menufix');
    }
    else{
      meno.removeClass('menufix')
    }
  })


  
  $('.big_slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  });
  $(document).ready(function () {
  //banner slider js 
  var mySlider = $('.pogoSlider').pogoSlider().data('plugin_pogoSlider');
  });
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
  new WOW().init({
    scrollContainer: true,
    resetAnimation: false,
    callBack:true,

  });



});
$('.small_slick_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  vertical: true,
  verticalSwiping: true,
});
$('.arrival').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 2000,
 
});
$('.blog').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 2000,
 
});

$('.market_item').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
 
});
$('.company_img_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
 
});
$('.slidershare').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
 
});


$(document).ready(function() {
    $('.box_skitter_large').skitter({
      theme: 'clean',
      numbers_align: 'center',
      progressbar: true, 
      dots: true,
      show_randomly: true,
      velocity: 3,
      responsive: {
        small: {
          animation: 'fade',
          max_width: 768
        },
        medium: {
          max_width: 1024
        }
      }
    });
   
  });
 


    
document.querySelectorAll('.small_img1').forEach (image_1 =>{ image_1.addEventListener('click', ()=>{
  var src =image_1.getAttribute('src');
  document.querySelector('.big_image_1').src = src;

});
});
document.querySelectorAll('.small_img_2').forEach (image_2 =>{ image_2.addEventListener('click', ()=>{
  var src =image_2.getAttribute('src');
  document.querySelector('.big_image_2').src = src;

});
});
document.querySelectorAll('.small_img1_3').forEach (image_3 =>{ image_3.addEventListener('click', ()=>{
  var src =image_3.getAttribute('src');
  document.querySelector('.big_image_1_3').src = src;

});
});

const parallex =document.getElementById("clientReview");
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  //console.log('offset:', + offset);
  //console.log('offset * 0.7' + offset * 0.7);
  parallex.style.backgroundPositionY = offset * 0.7 + "px";
})
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
});

var typed = new Typed('.type', {
  strings: [
    'Web Developer',
    'Web designer',
    'Grapics designer',
    'Wordpress theme customization',
  ],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true,
  backDelay: 100,

});

