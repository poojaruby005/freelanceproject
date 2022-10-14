var projectItems = [];
$(document).ready(function(){
    projectItems = [
    {
        itemsid: '0',
        names: 'Chandrakanth',
        types: 'resedential',
        imgthumbnail:'images/projects/chandrakanth/Chandrakanth-thumb.png',
        sliderImg:[
            {img:'images/projects/chandrakanth/1.jpg'},
            {img:'images/projects/chandrakanth/2.jpg'},
            {img:'images/projects/chandrakanth/3.jpg'},
            {img:'images/projects/chandrakanth/4.jpg'},
            {img:'images/projects/chandrakanth/5.jpg'},
            {img:'images/projects/chandrakanth/6.jpg'},
        ]
    },
    {
        itemsid: '1',
        names: 'Chinnaswamy Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/Chinnaswamy-reddy/Chinnaswamy-reddy-thumb.png',
        sliderImg:[
            {img:'images/projects/Chinnaswamy-reddy/1.jpg'},
            {img:'images/projects/Chinnaswamy-reddy/2.jpg'},
        ]
    },
    {
        itemsid: '2',
        names: 'Chinni',
        types: 'commercial',
        imgthumbnail:'images/projects/Chinni/Chinni-thumb.png',
        sliderImg:[
            {img:'images/projects/Chinni/1.jpg'},
            {img:'images/projects/Chinni/2.jpg'},
            {img:'images/projects/Chinni/3.jpg'},
            {img:'images/projects/Chinni/4.jpg'},
        ]
    },
    {
        itemsid: '3',
        names: 'Gopal Singh',
        types: 'ongoing-projects',
        imgthumbnail:'images/projects/Gopal-Singh/Gopal-Singh-thumb.png',
        sliderImg:[
            {img:'images/projects/Gopal-Singh/1.jpg'},
            {img:'images/projects/Gopal-Singh/2.jpg'},
        ]
    },
    {
        itemsid: '4',
        names: 'H Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/H-Reddy/H-Reddy-thumb.png',
        sliderImg:[
            {img:'images/projects/H-Reddy/1.jpg'},
            {img:'images/projects/H-Reddy/2.jpg'},
            {img:'images/projects/H-Reddy/3.jpg'},
            {img:'images/projects/H-Reddy/4.jpg'},
            {img:'images/projects/H-Reddy/5.jpg'},
            {img:'images/projects/H-Reddy/6.jpg'},
            {img:'images/projects/H-Reddy/7.jpg'},
            {img:'images/projects/H-Reddy/8.jpg'},
            {img:'images/projects/H-Reddy/9.jpg'},
            {img:'images/projects/H-Reddy/10.jpg'},
            {img:'images/projects/H-Reddy/11.jpg'},
            {img:'images/projects/H-Reddy/12.jpg'},
            {img:'images/projects/H-Reddy/13.jpg'},
            {img:'images/projects/H-Reddy/14.jpg'},
            {img:'images/projects/H-Reddy/15.jpg'},
            {img:'images/projects/H-Reddy/16.jpg'},
        ]
    },
    {
        itemsid: '5',
        names: 'Krishna Murthy',
        types: 'ongoing-projects',
        imgthumbnail:'images/projects/Krishna-Murthy/Krishna-Murthy-thumb.png',
        sliderImg:[
            {img:'images/projects/Krishna-Murthy/1.jpg'},
            {img:'images/projects/Krishna-Murthy/2.jpg'},
            {img:'images/projects/Krishna-Murthy/3.jpg'},
            {img:'images/projects/Krishna-Murthy/4.jpg'},
            {img:'images/projects/Krishna-Murthy/5.jpg'},
            {img:'images/projects/Krishna-Murthy/6.jpg'},
            {img:'images/projects/Krishna-Murthy/7.jpg'},
            {img:'images/projects/Krishna-Murthy/8.jpg'},
            {img:'images/projects/Krishna-Murthy/9.jpg'},
            {img:'images/projects/Krishna-Murthy/10.jpg'},
            {img:'images/projects/Krishna-Murthy/11.jpg'},
            {img:'images/projects/Krishna-Murthy/12.jpg'},
        ]
    },
    {
        itemsid: '6',
        names: 'Krishna Reddy',
        types: 'commercial',
        imgthumbnail:'images/projects/Krishna-Reddy/Krishna-Reddy-thumb.png',
        sliderImg:[
            {img:'images/projects/Krishna-Reddy/1.jpg'},
            {img:'images/projects/Krishna-Reddy/2.jpg'},
            {img:'images/projects/Krishna-Reddy/3.jpg'},
        ]
    },
    {
        itemsid: '7',
        names: 'Lokesh',
        types: 'resedential',
        imgthumbnail:'images/projects/Lokesh/Lokesh-thumb.png',
        sliderImg:[
            {img:'images/projects/Lokesh/1.jpg'},
        ]
    },
    {
        itemsid: '8',
        names: 'Manju Mansion',
        types: 'ongoing-projects',
        imgthumbnail:'images/projects/Manju-Mansion/Manju-Mansion-thumb.png',
        sliderImg:[
            {img:'images/projects/Manju-Mansion/1.jpg'},
            {img:'images/projects/Manju-Mansion/2.jpg'},
            {img:'images/projects/Manju-Mansion/3.jpg'},
            {img:'images/projects/Manju-Mansion/4.jpg'},
        ]
    },
    {
        itemsid: '9',
        names: 'Mohankumar Nagar',
        types: 'commercial',
        imgthumbnail:'images/projects/Mohankumar-Nagar/Mohankumar-Nagar-thumb.png',
        sliderImg:[
            {img:'images/projects/Mohankumar-Nagar/1.jpg'},
            {img:'images/projects/Mohankumar-Nagar/2.jpg'},
            {img:'images/projects/Mohankumar-Nagar/3.jpg'},
            {img:'images/projects/Mohankumar-Nagar/4.jpg'},
        ]
    },
    {
        itemsid: '10',
        names: 'Narendra Kumar',
        types: 'resedential',
        imgthumbnail:'images/projects/Narendra-Kumar/Narendra-Kumar-thumb.png',
        sliderImg:[
            {img:'images/projects/Narendra-Kumar/1.jpg'},
            {img:'images/projects/Narendra-Kumar/2.jpg'},
            {img:'images/projects/Narendra-Kumar/3.jpg'},
            {img:'images/projects/Narendra-Kumar/4.jpg'},
            {img:'images/projects/Narendra-Kumar/5.jpg'},
            {img:'images/projects/Narendra-Kumar/6.jpg'},
            {img:'images/projects/Narendra-Kumar/7.jpg'},
            {img:'images/projects/Narendra-Kumar/8.jpg'},
        ]
    },
    {
        itemsid: '11',
        names: 'Prabhakar Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/Prabhakar-Reddy/Prabhakar-Reddy-thumb.png',
        sliderImg:[
            {img:'images/projects/Prabhakar-Reddy/1.jpg'},
            {img:'images/projects/Prabhakar-Reddy/2.jpg'},
            {img:'images/projects/Prabhakar-Reddy/3.jpg'},
            {img:'images/projects/Prabhakar-Reddy/4.jpg'},
        ]
    },
    {
        itemsid: '12',
        names: 'Ramesh',
        types: 'resedential',
        imgthumbnail:'images/projects/Ramesh/Ramesh-thumb.png',
        sliderImg:[
            {img:'images/projects/Ramesh/1.jpg'},
            {img:'images/projects/Ramesh/2.jpg'},
            {img:'images/projects/Ramesh/3.jpg'},
            {img:'images/projects/Ramesh/4.jpg'},
            {img:'images/projects/Ramesh/5.jpg'},
            {img:'images/projects/Ramesh/6.jpg'},
            {img:'images/projects/Ramesh/7.jpg'},
            {img:'images/projects/Ramesh/8.jpg'},
            {img:'images/projects/Ramesh/9.jpg'},
            {img:'images/projects/Ramesh/10.jpg'},
            {img:'images/projects/Ramesh/11.jpg'},
            {img:'images/projects/Ramesh/12.jpg'},
            {img:'images/projects/Ramesh/13.jpg'},
            {img:'images/projects/Ramesh/14.jpg'},
            {img:'images/projects/Ramesh/15.jpg'},
            {img:'images/projects/Ramesh/16.jpg'},
            {img:'images/projects/Ramesh/17.jpg'},
            {img:'images/projects/Ramesh/18.jpg'},
            {img:'images/projects/Ramesh/19.jpg'},
            {img:'images/projects/Ramesh/20.jpg'},
            {img:'images/projects/Ramesh/21.jpg'},
            {img:'images/projects/Ramesh/22.jpg'},
            {img:'images/projects/Ramesh/23.jpg'},
            {img:'images/projects/Ramesh/24.jpg'},
            {img:'images/projects/Ramesh/25.jpg'},
            {img:'images/projects/Ramesh/26.jpg'},
            {img:'images/projects/Ramesh/27.jpg'},
            {img:'images/projects/Ramesh/28.jpg'},
            {img:'images/projects/Ramesh/29.jpg'},
            {img:'images/projects/Ramesh/30.jpg'},
            {img:'images/projects/Ramesh/31.jpg'},
            {img:'images/projects/Ramesh/32.jpg'},
        ]
    },
    {
        itemsid: '13',
        names: 'Ramesh Hebbal',
        types: 'resedential',
        imgthumbnail:'images/projects/Ramesh-Hebbal/Ramesh-Hebbal-thumb.png',
        sliderImg:[
            {img:'images/projects/Ramesh-Hebbal/1.jpg'},
            {img:'images/projects/Ramesh-Hebbal/2.jpg'},
            {img:'images/projects/Ramesh-Hebbal/3.jpg'},
            {img:'images/projects/Ramesh-Hebbal/4.jpg'},
        ]
    },
    {
        itemsid: '14',
        names: 'Shantilal',
        types: 'resedential',
        imgthumbnail:'images/projects/Shantilal/Shantilal-thumb.png',
        sliderImg:[
            {img:'images/projects/Shantilal/1.jpg'},
            {img:'images/projects/Shantilal/2.jpg'},
            {img:'images/projects/Shantilal/3.jpg'},
            {img:'images/projects/Shantilal/4.jpg'},
        ]
    },
    {
        itemsid: '15',
        names: 'Srinivas',
        types: 'resedential',
        imgthumbnail:'images/projects/Srinivas/Srinivas-thumb.png',
        sliderImg:[
            {img:'images/projects/Srinivas/1.jpg'},
            {img:'images/projects/Srinivas/2.jpg'},
            {img:'images/projects/Srinivas/3.jpg'},
            {img:'images/projects/Srinivas/4.jpg'},
        ]
    },
    {
        itemsid: '16',
        names: 'Suresh',
        types: 'commercial',
        imgthumbnail:'images/projects/Suresh/Suresh-thumb.png',
        sliderImg:[
            {img:'images/projects/Suresh/1.jpg'},
            {img:'images/projects/Suresh/2.jpg'},
            {img:'images/projects/Suresh/3.jpg'},
            {img:'images/projects/Suresh/4.jpg'},
        ]
    },
    {
        itemsid: '17',
        names: 'Yeshwanthpur',
        types: 'resedential',
        imgthumbnail:'images/projects/Yeshwanthpur/Yeshwanthpur-thumb.png',
        sliderImg:[
            {img:'images/projects/Yeshwanthpur/1.jpg'},
            {img:'images/projects/Yeshwanthpur/2.jpg'},
            {img:'images/projects/Yeshwanthpur/3.jpg'},
            {img:'images/projects/Yeshwanthpur/4.jpg'},
        ]
            
    }
];
        console.log(projectItems[0].sliderImg);
        console.log(Object.keys(projectItems[0].sliderImg).length);

        for (var i = 0; i < projectItems.length; i++) {
            // console.log('Entered');
            $('.portfolio-items').append('<a href="javascripts:;" data-id="'+projectItems[i].itemsid+'" class="portfolio-item col-xs-12 col-sm-3 col-md-3 single-work '+ projectItems[i].types+'"><div class="recent-work-wrap"><img class="img-responsive" src="'+ projectItems[i].imgthumbnail+'" alt="" /><p>'+ projectItems[i].names+'</p><label>'+ projectItems[i].types+'</label></div></a>');   
        
            for (var j = 0; j < Object.keys(projectItems[i].sliderImg).length; j++) {
            // console.log('Entered');
            // $('.testimonial-slider.owl-carousel').append('<div class="single-slide"><div class="slide-img"><img src="'+projectItems[i].sliderImg[j].img+'" alt=""></div></div>');
            }
        }
        

        $("#portfolio .portfolio-item").click(function () {
            var proId = $(this).attr('data-id');
            console.log(proId);

            $('.portfolio-items a').attr('href','project-view.html?pId=' + proId);
        });
    
        // console.log(window.porId);

        // if(window.porId == 0){
        //     $('.por1').show();
        //     $('.por2').hide();
        // }
        // else if(window.porId == 1){
        //     $('.por1').hide();
        //     $('.por2').show();
        // }
        // else{
        //     $('.por1').show();
        //     $('.por2').hide();
        // }


});

function getProjectDetails() {
    // debugger;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const proId = urlParams.get('pId');

    let item = projectItems.find(item => item.itemsid == proId);
    console.log('-------------------------------');
    console.log(item);

    if(item) {
        $('#projectTitle').html(item.names);
        $('#projectType').html(item.types);
        $.each(item.sliderImg, function(index, subItem) {
            $('.testimonial-slider.owl-carousel').append('<div class="single-slide"><div class="slide-img"><img src="' + subItem.img + '" alt=""></div></div>');
        });

        $('#totalSliderImages').html(item.sliderImg.length);

        $('.testimonial-slider').owlCarousel({
            margin: 30,
            navigation: true,
            dots: false,
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
            }
        });

        $('.testimonial-slider').on('changed.owl.carousel', function(e) {
            // debugger;
            // var carousel = $('.testimonial-slider').data('owl.carousel');
            // e.preventDefault();
            // console.log($(this).index());
            $('#currentSliderImage').html(e.item.index + 1);
            // carousel.to(carousel.relative($(this).index()));
            // alert(e.item.index);
        });
    }
}