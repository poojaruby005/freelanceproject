


/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);


//gallery code
$(document).ready(function () {

  //gallery open
  $(".galleryOpen").on("click", function () {
    
    $("body").addClass("is-not-scrollable");
    $(".galleryOverlay").removeClass("galleryFade");
    $(".galleryContainer").removeClass("galleryFade");
    $(".galleryMainBox").addClass("galleryActive");
    $(".stickyBtn").addClass("shide");
  });

  //gallery close
  $("#galleryClose").click(function () {
   
    $("body").removeClass("is-not-scrollable");
    $(".galleryOverlay").addClass("galleryFade");
    $(".galleryContainer").addClass("galleryFade");
    $(".galleryMainBox").removeClass("galleryActive");
    $(".stickyBtn").removeClass("shide");
  });

  //close on escape
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      
      $("body").removeClass("is-not-scrollable");
      $(".galleryOverlay").addClass("galleryFade");
      $(".galleryContainer").addClass("galleryFade");
      $(".galleryMainBox").removeClass("galleryActive");
      $(".stickyBtn").removeClass("shide");
    }
  });

});

$(document).ready(function () {
  //slick slider
  $('#testimonialSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
        var _email = $("#email").val();
        var _phone = $("#phone").val();
        var _subject = $("#subject").val();
        var _message = $("#message").val();

        if(_name == null || _name == "" || 
            _email == null || _email == "" ||
            _phone == null || _phone == "" || 
            _subject == null || _subject == "" || 
            _message == null || _message == "") {
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


