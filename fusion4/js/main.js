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
        scrollTop: $(hash).offset().top - 150
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if
  });
});
$('#main-slider').carousel({
          interval: 3000,
          cycle: true
        });
jQuery(function ($) {
    'use strict';

    $('.window-height').height($(window).height());

    // portfolio filter
    $(window).load(function () {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'

        });

        $portfolio_selectors.on('click', function () {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    });




    // $('.testimonial-slider').owlCarousel({
    //     margin: 30,
    //     navigation: true,
    //     dots: false,
    //     navText: ['<img src="images/right-arrow.svg" alt="">', '<img src="images/right-arrow.svg" alt="">'],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         768: {
    //             items: 1
    //         },
    //         992: {
    //             items: 1
    //         }
    //     }
    // });
    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
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


$(document).ready(function () {

    var $carousel = $('.sliderBox').flickity({
        prevNextButtons: false,
        pageDots: false
    });

    // previous
    $('#slider-left').on('click', function () {
        $carousel.flickity('previous');
    });

    // next
    $('#slider-right').on('click', function () {
        $carousel.flickity('next');
    });
});
