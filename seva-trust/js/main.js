$(document).ready(function () {
      $(".sscroll").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
          });
        } // End if
    });

      $('#main-slider').carousel({
          interval: 3000,
          cycle: true
        }); 


$( '#header .navbar-nav a' ).on('click', 
    function () {
        $( '#header .navbar-nav' ).find( 'li.active' )
        .removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
    });

    $(".navbar-nav a, .navbar-toggle").click(function(){
        $(".navbar-collapse").slideToggle();
    });
});


//gallery code
$(document).ready(function () {
  //gallery open

  $(".galleryOpen").on("click", function () {
    
    $("body").addClass("is-not-scrollable");
    $(".galleryOverlay").removeClass("galleryFade");
    $(".galleryContainer").removeClass("galleryFade");
    $(".galleryMainBox").addClass("galleryActive");

  });

  //gallery close
  $("#galleryClose").click(function () {
   
    $("body").removeClass("is-not-scrollable");
    $(".galleryOverlay").addClass("galleryFade");
    $(".galleryContainer").addClass("galleryFade");
    $(".galleryMainBox").removeClass("galleryActive");
  
  });

  //close on escape
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      
      $("body").removeClass("is-not-scrollable");
      $(".galleryOverlay").addClass("galleryFade");
      $(".galleryContainer").addClass("galleryFade");
      $(".galleryMainBox").removeClass("galleryActive");
  
    }
  });

});

$(document).ready(function () {
  //slick slider
  $('#testimonialSlider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
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
      // settings: "unslick"
      // instead of a settings object
    ]
  });

    $('#gallerySlider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
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
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //flickity
  var $gcarousel = $('.gallerySlider').flickity();

  $(document).on('click', '.galleryOpen', function () {
    var index = $(this).attr('data-slide');
    var capt1 = $(this).find('h1').text();
    var capt2 = $(this).find('p').text();
    var capt = capt1 + "<br/>" + capt2;
    $gcarousel.flickity('select', index);
    $('.thumbCaption').html(capt);
    var gvidoId = $(this).attr('id');
    window.gvidId = $(this).attr('id');
    $("#pplayer_" + gvidoId).html('<iframe id="player_' + gvidoId + '" src="https://www.youtube.com/embed/' + gvidoId + '?enablejsapi=1&autoplay=1&autohide=1&showinfo=0" frameborder="0" allowfullscreen class="frameBox"></iframe>');

    new YT.Player('player_' + gvidoId, {
      events: {
        'onStateChange': onPlayerStateChangeg
      }
    });

    function onPlayerStateChangeg(event) {

      switch (event.data) {
        case YT.PlayerState.ENDED:
          $(".frameBox").css("display", "none");
          $(".videoWrap_" + window.gvidId).html('<div id="pplayer_"' + window.gvidId + '"><a href="javascript:;" class="btn-play" id="' + window.gvidId + '"></a></div>');
          break;

      }
    }
  });

  $(document).on('click', '.galthumbRow', function () {
    var tcapt1 = $(this).find('h1').text();
    var tcapt2 = $(this).find('p').text();
    var tcapt = tcapt1 + "<br/>" + tcapt2;
    $('.thumbCaption').html(tcapt);
  });

  var $caption1 = $('.thumbCaption');
  var flkty = $gcarousel.data('flickity');
  $gcarousel.on('select.flickity', function () {
    var cap1 = $(flkty.selectedElement).attr('data-head');
    var cap2 = $(flkty.selectedElement).attr('data-para');
    $caption1.html(cap1 + "<br/>" + cap2);
  });

  $("#thumbHide").click(function () {
    $("body").removeClass("is-not-scrollable");
    $(".galleryOverlay").addClass("galleryFade");
    $(".galleryContainer").addClass("galleryFade");
    $(".galleryMainBox").removeClass("galleryActive");
  });

});

var vidId="";
function onPlayerStateChange(event) {
switch (event.data) {
case YT.PlayerState.ENDED:
$(".frameBox").css("display", "none");
$(".video-block_"+vidId).html('<div id="player_'+vidId+'"><a href="javascript:;" class="btn-play" id="'+vidId+'"></a></div>');
break;
}
}
jQuery(document).ready(function ($) {
jQuery(document).on("click", ".btn-play", function () {
vidId = $(this).attr('id');
$(this).parent().html('<iframe id="player_' + vidId + '" src="https://www.youtube.com/embed/' + vidId + '?enablejsapi=1&autoplay=1&autohide=1&showinfo=0" frameborder="0" allow="autoplay;fullscreen" class="frameBox"></iframe>');
new YT.Player('player_' + vidId, {
events: {
'onStateChange': onPlayerStateChange
}
});
});
});



$(document).ready(function() {
    // Variable to hold request

    var request;
    // Bind to the submit event of our form
    $("#sky-form").submit(function(event) {
        // Prevent default posting of form - put here to work in case of errors
        event.preventDefault();
        // debugger;
        var _name = $("#name").val();
        var _dob = $("#dob").val();
        var _male = $("#male").val();
        var _female = $("#female").val();
        var _phone = $("#phone").val();
        var _email = $("#email").val();
        var _subject = $("#subject").val();
        var _address = $("#address").val();

        if(_name == null || _name == "" ||
            _dob == null || _dob == "" ||
            _male == null || _male == "" ||
            _female == null || _female == "" ||
            _phone == null || _phone == "" ||
            _email == null || _email == "" ||
            _subject == null || _subject == "" || 
            _address == null || _address == "") {
            return;
        }

        // Abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);

        // Let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");

        // Serialize the data in the form
        var serializedData = $form.serialize();

        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        // $inputs.prop("disabled", true);

        // Fire off the request to /form.php
        request = $.ajax({
            url: "mail-success.php",
            type: "post",
            data: serializedData
        });

        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR) {
            $("#sky-form").trigger("reset");
            $("#exampleModalCenter").modal("toggle");
            $("#thankModalCenter").modal("show");
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown) {
            // Log the error to the console
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });

        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // Reenable the inputs
            $inputs.prop("disabled", false);
        });

    });

    $('#myModal').modal({
     backdrop: 'static',
     keyboard: false
    });
});
