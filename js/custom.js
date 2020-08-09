// navbar background back
$(".navbar-toggler").click(function(){
  $(".top-nav").toggleClass("bg-transparent");
  $(".main-nav").toggleClass("bg-transparent");
});


// you tube popup
jQuery(function(){
  jQuery("a.bla-1").YouTubePopUp();
});

// home slider
$('#home .slider-full').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  infinite: false,
  fade: true,
  dots: false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  dots: false,
  asNavFor: '#home .slider-full',
  focusOnSelect: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

