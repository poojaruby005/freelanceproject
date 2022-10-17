var projectItems = [];
$(document).ready(function(){
    projectItems = [
    {
        itemsid: '0',
        names: 'Anand',
        types: 'resedential',
        imgthumbnail:'images/projects/Anand/Anand-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Anand/1.jpg',
            },
        ]
    },
    {
        itemsid: '1',
        names: 'Bharathi',
        types: 'resedential',
        imgthumbnail:'images/projects/Bharathi/Bharathi-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Bharathi/1.jpg',
            },
        ]
    },
    {
        itemsid: '2',
        names: 'chandrakanth',
        types: 'resedential',
        imgthumbnail:'images/projects/chandrakanth/Chandrakanth-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/chandrakanth/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/chandrakanth/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/chandrakanth/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/chandrakanth/4.jpg',
            },
            {
                type: 'image',
                path:'images/projects/chandrakanth/5.jpg',
            },
        ]
    },
    {
        itemsid: '3',
        names: 'Chinnaswamy Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/Chinnaswamy-reddy/Chinnaswamy-reddy-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Chinnaswamy-reddy/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Chinnaswamy-reddy/2.jpg',
            },
        ]
    },
    {
        itemsid: '4',
        names: 'Chinni',
        types: 'commercial',
        imgthumbnail:'images/projects/Chinni/Chinni-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Chinni/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Chinni/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Chinni/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Chinni/4.jpg',
            },
        ]
    },
    {
        itemsid: '5',
        names: 'Fusion 4 Pearl',
        types: 'resedential',
        imgthumbnail:'images/projects/Fusion-4-Pearl/Fusion-4-Pearl-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Fusion-4-Pearl/1.jpg',
            },
        ]
    },
    {
        itemsid: '6',
        names: 'Gopal Singh',
        types: 'resedential',
        imgthumbnail:'images/projects/Gopal-Singh/Gopal-Singh-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Gopal-Singh/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Gopal-Singh/2.jpg',
            },
        ]
    },
    {
        itemsid: '7',
        names: 'H Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/H-Reddy/H-Reddy-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/H-Reddy/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/4.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/5.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/6.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/7.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/8.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/9.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/10.jpg'
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/11.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/12.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/13.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/14.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/15.jpg',
            },
            {
                type: 'image',
                path:'images/projects/H-Reddy/16.jpg',
            },
        ]
    },
    {
        itemsid: '8',
        names: 'Irris',
        types: 'resedential',
        imgthumbnail:'images/projects/Irris/Irris-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Irris/1.jpg',
            },
        ]
    },
    {
        itemsid: '9',
        names: 'Krishna Murthy',
        types: 'resedential',
        imgthumbnail:'images/projects/Krishna-Murthy/Krishna-Murthy-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/4.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/5.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/6.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/7.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/8.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/9.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/10.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/11.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Murthy/12.jpg',
            },
        ]
    },
    {
        itemsid: '10',
        names: 'Krishna Reddy',
        types: 'commercial',
        imgthumbnail:'images/projects/Krishna-Reddy/Krishna-Reddy-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Krishna-Reddy/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Reddy/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Krishna-Reddy/3.jpg',
            },
        ]
    },
    {
        itemsid: '11',
        names: 'Lokesh',
        types: 'resedential',
        imgthumbnail:'images/projects/Lokesh/Lokesh-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Lokesh/1.jpg',
            },
        ]
    },
    {
        itemsid: '12',
        names: 'Mahinder Jain',
        types: 'resedential',
        imgthumbnail:'images/projects/Mahinder-Jain/Mahinder-Jain-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Mahinder-Jain/1.jpg',
            },
        ]
    },
    {
        itemsid: '13',
        names: 'Manju Mansion',
        types: 'resedential',
        imgthumbnail:'images/projects/Manju-Mansion/Manju-Mansion-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Manju-Mansion/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Manju-Mansion/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Manju-Mansion/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Manju-Mansion/4.jpg',
            },
        ]
    },
    {
        itemsid: '14',
        names: 'Mohankumar Nagar',
        types: 'commercial',
        imgthumbnail:'images/projects/Mohankumar-Nagar/Mohankumar-Nagar-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Mohankumar-Nagar/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Mohankumar-Nagar/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Mohankumar-Nagar/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Mohankumar-Nagar/4.jpg',
            },
        ]
    },
    {
        itemsid: '15',
        names: 'Narendra Kumar',
        types: 'resedential',
        imgthumbnail:'images/projects/Narendra-Kumar/Narendra-Kumar-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/4.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/5.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/6.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/7.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Narendra-Kumar/8.jpg',
            },
        ]
    },
    {
        itemsid: '16',
        names: 'Narendra sharma',
        types: 'resedential',
        imgthumbnail:'images/projects/Narendra-sharma/Narendra-sharma-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Narendra-sharma/1.jpg',
            },
        ]
    },
    {
        itemsid: '17',
        names: 'Prabhakar Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/Prabhakar-Reddy/Prabhakar-Reddy-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Prabhakar-Reddy/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Prabhakar-Reddy/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Prabhakar-Reddy/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Prabhakar-Reddy/4.jpg',
            },
        ]
    },
    {
        itemsid: '18',
        names: 'Prakash',
        types: 'resedential',
        imgthumbnail:'images/projects/Prakash/Prakash-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Prakash/1.jpg',
            },
        ]
    },
    {
        itemsid: '19',
        names: 'Rakesh Sancheti',
        types: 'resedential',
        imgthumbnail:'images/projects/Rakesh-Sancheti/Rakesh-Sancheti-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Rakesh-Sancheti/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Rakesh-Sancheti/2.jpg',
            },
        ]
    },
    {
        itemsid: '20',
        names: 'Ramesh',
        types: 'resedential',
        imgthumbnail:'images/projects/Ramesh/Ramesh-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Ramesh/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/4.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/5.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/6.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/7.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/8.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/9.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/10.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/11.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/12.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/13.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/14.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/15.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/16.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/17.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/18.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/19.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/20.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/21.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/22.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/23.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/24.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/25.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/26.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/27.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/28.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/29.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/30.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/31.jpg'
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/32.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/33.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/34.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/35.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/36.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/37.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/38.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/39.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh/40.jpg',
            },
        ]
    },
    {
        itemsid: '21',
        names: 'Ramesh Hebbal',
        types: 'resedential',
        imgthumbnail:'images/projects/Ramesh-Hebbal/Ramesh-Hebbal-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Ramesh-Hebbal/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Ramesh-Hebbal/2.jpg',
            },
        ]
    },
    {
        itemsid: '22',
        names: 'Ram reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/Ram-reddy-Residence/Ram-reddy-Residence-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Ram-reddy-Residence/1.JPEG',
            },
            {
                type: 'image',
                path:'images/projects/Ram-reddy-Residence/2.JPEG',
            },
        ]
    },
    {
        itemsid: '23',
        names: 'Sandeep',
        types: 'resedential',
        imgthumbnail:'images/projects/Sandeep/Sandeep-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Sandeep/1.jpg',
            },
        ]
    },
    {
        itemsid: '24',
        names: 'Shantilal',
        types: 'resedential',
        imgthumbnail:'images/projects/Shantilal/Shantilal-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Shantilal/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Shantilal/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Shantilal/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Shantilal/4.jpg',
            },
        ]
    },
    {
        itemsid: '25',
        names: 'Shatayu',
        types: 'commercial',
        imgthumbnail:'images/projects/Shatayu/Shatayu-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Shatayu/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Shatayu/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Shatayu/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Shatayu/4.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Shatayu/5.jpg',
            },
            {
                type: 'video',
                path:'images/projects/Shatayu/6.mp4',
            },
        ]
    },
    {
        itemsid: '26',
        names: 'Srinivas',
        types: 'resedential',
        imgthumbnail:'images/projects/Srinivas/Srinivas-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Srinivas/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Srinivas/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Srinivas/3.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Srinivas/4.jpg',
            },
        ]
    },
    {
        itemsid: '27',
        names: 'Srinivas 2',
        types: 'resedential',
        imgthumbnail:'images/projects/Srinivas2/Srinivas2-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Srinivas2/1.jpg',
            },
        ]
    },
    {
        itemsid: '28',
        names: 'Suresh',
        types: 'commercial',
        imgthumbnail:'images/projects/Suresh/Suresh-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Suresh/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Suresh/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Suresh/3.jpg',
            },
        ]
    },
    {
        itemsid: '29',
        names: 'Terrace Garden',
        types: 'resedential',
        imgthumbnail:'images/projects/Terrace-Garden/Terrace-Garden-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Terrace-Garden/1.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Terrace-Garden/2.jpg',
            },
            {
                type: 'image',
                path:'images/projects/Terrace-Garden/3.jpg',
            },
        ]
    },
    {
        itemsid: '30',
        names: 'Thammi Reddy',
        types: 'commercial',
        imgthumbnail:'images/projects/Thammi-Reddy/Thammi-Reddy-thumb.jpg',
        sliderImg:[
            {
                type: 'image',
                path:'images/projects/Thammi-Reddy/1.jpg',
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