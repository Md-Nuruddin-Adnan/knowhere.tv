// navbar background back
$(".navbar-toggler").click(function(){
  $(".top-nav.home-1").toggleClass("bg-transparent");
  $(".main-nav.home-1").toggleClass("bg-transparent");
});


//Get the button
var mybutton = document.getElementById("back-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



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
  ]
});



// channel_listing slider
$('#channel_listing .playlist').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  infinite: true,
  dots: false,
  prevArrow: '<span class="prev-arrow"><i class="far fa-angle-left"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="far fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

