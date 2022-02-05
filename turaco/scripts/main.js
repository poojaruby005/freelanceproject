
  var $win = $(window);
  var $doc = $(document);

$(document).ready(function(){

     // Add smooth scrolling mobile to all links
    $(".mobMenuBtn").on('click', function(event) {
        if (this.hash !== "") {
           event.preventDefault();
           var hash = this.hash;
           var hashTop=$(hash).offset().top;
        $('html, body').animate({
          scrollTop: hashTop
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });

    //performance data
    $win.on('scroll load',function() {
      var winT = $win.scrollTop();
      performanceData($('.toanimate'), winT);
      scrollTop = $win.scrollTop();
    });

     //menu open
    $("#menuOpen").click(function(){
      $("body").addClass("is-not-scrollable");
      $(".mobOverlay").removeClass("mobFade");
      $(".mobContainer").removeClass("mobFade");
      $(".mob-menu-box").addClass("mobActive");
    });

    //menu close
    $("#menuClose").click(function(){
      $("body").removeClass("is-not-scrollable");
      $(".mobOverlay").addClass("mobFade");
      $(".mobContainer").addClass("mobFade");
      $(".mob-menu-box").removeClass("mobActive");
    });

  //menu close on li click
    $(".mobMenuBtn").click(function(){
      $("body").removeClass("is-not-scrollable");
      $(".mobOverlay").addClass("mobFade");
      $(".mobContainer").addClass("mobFade");
      $(".mob-menu-box").removeClass("mobActive");
    });

  




  });

//section animations

  function performanceData($element, topPosition) {
    $element.each(function() {
      var element = $(this),
      winH = $win.height() / 1.1

      for (var i = element.length - 1; i >= 0; i--) {
          var currentElementTop = element.eq(i).offset().top - winH

        if ( topPosition > currentElementTop ) {
          element.addClass('animate')
        } else {
          element.removeClass('animate')
        };
      };
    })
  };

//stick to top
  function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top=$("header").height()+$(".hero-cont").height()+$(".hero-cont-bg").height()+60;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $("#menuLogo").removeClass("none");
        $('#stickyDiv').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $("#menuLogo").addClass("none");
        $('#stickyDiv').height(0);
    }

}

  //stick
  $(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


$('.count').each(function () {
                $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                                $(this).text(Math.ceil(now));
                        }
                });
            });



//slick slider
$(document).on('ready', function () {

  $('.responsive').slick({
    centerMode: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 2,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      //settings: "unslick"
      // instead of a settings object
    ]
  });

});
//slick slider
$(document).on('ready', function () {

  $('.prom-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      //settings: "unslick"
      // instead of a settings object
    ]
  });


    $('.product-slider').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode:true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      //settings: "unslick"
      // instead of a settings object
    ]
  });

    $(".pro-slider-div").on("click", function () {
      var x = $(this).attr('data-id');
      console.log(x);
      $('.img-zoom-pro').attr('src','images/pumps/printer-slider' + x + '.png')
    });

    $(".pro-slider-div.fans-slider").on("click", function () {
      var x = $(this).attr('data-id');
      console.log(x);
      $('.img-zoom-pro').attr('src','images/fans/fans-pro-slider' + x + '.png')
    });

    $(".pro-slider-div.panel-slider").on("click", function () {
      var x = $(this).attr('data-id');
      console.log(x);
      $('.img-zoom-pro').attr('src','images/cables/panel-pro-img' + x + '.png')
    });
    $(".pro-slider-div.cable-slider").on("click", function () {
      var x = $(this).attr('data-id');
      console.log(x);
      $('.img-zoom-pro').attr('src','images/cables/cable-pro-img' + x + '.png')
    });
});



var stickybtn = $('#stickybutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    stickybtn.addClass('show');
  } else {
    stickybtn.removeClass('show');
  }
});

stickybtn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});