var projectItems = [];
$(document).ready(function(){
    projectItems = [
    {
        itemsid: '0',
        names: 'Chandrakanth',
        types: 'resedential',
        imgthumbnail:'images/projects/chandrakanth/Chandrakanth-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/chandrakanth/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/chandrakanth/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/chandrakanth/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/chandrakanth/4.JPG',
            },
            {
                type: 'image',
                path:'images/projects/chandrakanth/5.JPG',
            },
            {
                type: 'video',
                path:'images/projects/chandrakanth/6.mp4',
            },
        ]
    },
    {
        itemsid: '1',
        names: 'Chinnaswamy Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/Chinnaswamy-reddy/Chinnaswamy-reddy-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Chinnaswamy-reddy/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Chinnaswamy-reddy/2.JPG',
            },
        ]
    },
    {
        itemsid: '2',
        names: 'Chinni',
        types: 'commercial',
        imgthumbnail:'images/projects/Chinni/Chinni-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Chinni/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Chinni/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Chinni/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Chinni/4.JPG',
            },
        ]
    },
    {
        itemsid: '3',
        names: 'Gopal Singh',
        types: 'ongoing-projects',
        imgthumbnail:'images/projects/Gopal-Singh/Gopal-Singh-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Gopal-Singh/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Gopal-Singh/2.JPG',
            },
        ]
    },
    {
        itemsid: '4',
        names: 'H Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/H-Reddy/H-Reddy-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/H-Reddy/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/4.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/5.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/6.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/7.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/8.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/9.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/10.JPG'
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/11.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/12.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/13.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/14.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/15.JPG',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/16.JPG',
            },
        ]
    },
    {
        itemsid: '5',
        names: 'Krishna Murthy',
        types: 'ongoing-projects',
        imgthumbnail:'images/projects/Krishna-Murthy/Krishna-Murthy-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/4.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/5.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/6.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/7.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/8.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/9.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/10.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/11.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/12.JPG',
            },
        ]
    },
    {
        itemsid: '6',
        names: 'Krishna Reddy',
        types: 'commercial',
        imgthumbnail:'images/projects/Krishna-Reddy/Krishna-Reddy-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Krishna-Reddy/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Reddy/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Reddy/3.JPG',
            },
        ]
    },
    {
        itemsid: '7',
        names: 'Lokesh',
        types: 'resedential',
        imgthumbnail:'images/projects/Lokesh/Lokesh-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Lokesh/1.JPG',
            },
        ]
    },
    {
        itemsid: '8',
        names: 'Manju Mansion',
        types: 'ongoing-projects',
        imgthumbnail:'images/projects/Manju-Mansion/Manju-Mansion-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Manju-Mansion/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Manju-Mansion/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Manju-Mansion/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Manju-Mansion/4.JPG',
            },
        ]
    },
    {
        itemsid: '9',
        names: 'Mohankumar Nagar',
        types: 'commercial',
        imgthumbnail:'images/projects/Mohankumar-Nagar/Mohankumar-Nagar-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Mohankumar-Nagar/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Mohankumar-Nagar/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Mohankumar-Nagar/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Mohankumar-Nagar/4.JPG',
            },
        ]
    },
    {
        itemsid: '10',
        names: 'Narendra Kumar',
        types: 'resedential',
        imgthumbnail:'images/projects/Narendra-Kumar/Narendra-Kumar-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/4.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/5.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/6.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/7.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/8.JPG',
            },
        ]
    },
    {
        itemsid: '11',
        names: 'Prabhakar Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/Prabhakar-Reddy/Prabhakar-Reddy-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Prabhakar-Reddy/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Prabhakar-Reddy/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Prabhakar-Reddy/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Prabhakar-Reddy/4.JPG',
            },
        ]
    },
    {
        itemsid: '12',
        names: 'Ramesh',
        types: 'resedential',
        imgthumbnail:'images/projects/Ramesh/Ramesh-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Ramesh/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/4.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/5.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/6.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/7.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/8.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/9.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/10.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/11.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/12.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/13.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/14.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/15.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/16.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/17.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/18.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/19.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/20.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/21.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/22.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/23.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/24.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/25.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/26.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/27.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/28.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/29.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/30.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/31.JPG'
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/32.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/33.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/34.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/35.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/36.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/37.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/38.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/39.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/40.JPG',
            },
        ]
    },
    {
        itemsid: '13',
        names: 'Ramesh Hebbal',
        types: 'resedential',
        imgthumbnail:'images/projects/Ramesh-Hebbal/Ramesh-Hebbal-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Ramesh-Hebbal/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh-Hebbal/2.JPG',
            },
        ]
    },
    {
        itemsid: '14',
        names: 'Shantilal',
        types: 'resedential',
        imgthumbnail:'images/projects/Shantilal/Shantilal-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Shantilal/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Shantilal/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Shantilal/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Shantilal/4.JPG',
            },
        ]
    },
    {
        itemsid: '15',
        names: 'Srinivas',
        types: 'resedential',
        imgthumbnail:'images/projects/Srinivas/Srinivas-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Srinivas/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Srinivas/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Srinivas/3.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Srinivas/4.JPG',
            },
        ]
    },
    {
        itemsid: '16',
        names: 'Suresh',
        types: 'commercial',
        imgthumbnail:'images/projects/Suresh/Suresh-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Suresh/1.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Suresh/2.JPG',
            },
            {
                type: 'image',
                path:'images/projects/Suresh/3.JPG',
            },
        ]
    },
    {
        itemsid: '17',
        names: 'Yeshwanthpur',
        types: 'resedential',
        imgthumbnail:'images/projects/Yeshwanthpur/Yeshwanthpur-thumb.png',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Yeshwanthpur/1.JPG',
            },
        ]
            
    }
];
        console.log(projectItems[0].sliderImg);
        console.log(Object.keys(projectItems[0].sliderImg).length);

        for (var i = 0; i < projectItems.length; i++) {
            // console.log('Entered');
            $('.portfolio-items').append('<a href="javascripts:;" data-id="'+projectItems[i].itemsid+'" class="portfolio-item col-xs-12 col-sm-3 single-work '+ projectItems[i].types+'"><div class="recent-work-wrap"><img class="img-responsive" src="'+ projectItems[i].imgthumbnail+'" alt="" /><p>'+ projectItems[i].names+'</p><label>'+ projectItems[i].types+'</label></div></a>');   
        }
        

        $("#portfolio .portfolio-item").click(function () {
            var proId = $(this).attr('data-id');
            console.log(proId);

            $('.portfolio-items a').attr('href','project-view.html?pId=' + proId);
        });

        $(".proLeft").click(function () {
            var proId = $(this).attr('data-pid');
            console.log(proId);

            $('.proLeft').attr('href','project-view.html?pId=' + proId);
        });
        $(".proRight").click(function () {
            var proId = $(this).attr('data-pid');
            console.log(proId);

            $('.proRight').attr('href','project-view.html?pId=' + proId);
        });

});

function getProjectDetails() {
    // debugger;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const proId = urlParams.get('pId');

    let item = projectItems.find(item => item.itemsid == proId);
    let itemIndex = projectItems.findIndex(x => x.itemsid == proId);

    if(item) {
        $('#projectTitle').html(item.names);
        $('#projectType').html(item.types);
        $.each(item.sliderImg, function(index, subItem) {
            if(subItem.type === 'image') {
                $('.testimonial-slider.owl-carousel').append('<div class="single-slide"><div class="slide-img"><img src="' + subItem.path + '" alt=""></div></div>');
            }
            else if(subItem.type === 'video') {
                $('.testimonial-slider.owl-carousel').append('<div class="single-slide"><div class="slide-img"><video controls><source src="' + subItem.path + '" type="video/mp4"></video></div></div>');
                //$('.testimonial-slider.owl-carousel').append('<div class="single-slide"><video id="myVideo"><source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></video></div>');
            }
        });

        $('#totalSliderImages').html(item.sliderImg.length);

        $('.testimonial-slider').owlCarousel({
            margin: 30,
            navigation: true,
            dots: false,
            video: true,
            navText: ['<img src="images/right-arrow.svg" alt="">', '<img src="images/right-arrow.svg" alt="">'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            },
            autoplay: true,
              onInitialized: function() {
                if ($(".owl-item.active video", this.$element).length) {
                  $(".owl-item.active video", this.$element)[0].play();
                  owl.trigger('stop.owl.autoplay')
                  $(".owl-item.active video", this.$element).on('ended', function() {
                    owl.trigger('play.owl.autoplay')
                  });
                }
              },
              onTranslated: function() {
                if ($(".owl-item.active video", this.$element).length) {
                  $(".owl-item.active video", this.$element)[0].play();
                  owl.trigger('stop.owl.autoplay')
                  $(".owl-item.active video", this.$element).on('ended', function() {
                    owl.trigger('play.owl.autoplay')
                  });
                }
              }

        });

        $('.testimonial-slider').on('changed.owl.carousel', function(e) {
            $('#currentSliderImage').html(e.item.index + 1);
        });
    }

    $('.proLeft').hide();
    $('.proRight').hide();

    let prevItemIndex = itemIndex - 1;
    let prevItem = null;

    if(prevItemIndex > -1) {
        prevItem = projectItems[prevItemIndex];

        if(prevItem) {
            $('#spnPrevProjectTitle').text(prevItem.names);
            $('.proLeft').show();
            $('.proLeft').attr("data-pid", prevItem.itemsid);
        }
    }

    let nextItemIndex = itemIndex + 1;
    let nextItem = null;

    if(nextItemIndex > -1 && nextItemIndex <= projectItems.length) {
        nextItem = projectItems[nextItemIndex];

        if(nextItem) {
            $('#spnNextProjectTitle').text(nextItem.names);
            $('.proRight').show();
            $('.proRight').attr("data-pid", nextItem.itemsid);
        }
    }

}