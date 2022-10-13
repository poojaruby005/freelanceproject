$(document).ready(function(){
    var projectItems = [
    {
        itemsid: '0',
        names: 'Chandrakanth',
        types: 'resedential',
        imgthumbnail:'images/projects/chandrakanth/Chandrakanth-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/chandrakanth/1.jpg',
        //     img2:'images/projects/chandrakanth/2.jpg',
        //     img3:'images/projects/chandrakanth/3.jpg',
        //     img4:'images/projects/chandrakanth/4.jpg',
        //     img5:'images/projects/chandrakanth/5.jpg',
        //     img6:'images/projects/chandrakanth/6.jpg',
        // }
    },
    {
        itemsid: '1',
        names: 'Chinnaswamy Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/Chinnaswamy-reddy/Chinnaswamy-reddy-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Chinnaswamy-reddy/1.jpg',
        //     img2:'images/projects/Chinnaswamy-reddy/2.jpg',
        // }
    },
    {
        itemsid: '2',
        names: 'Chinni',
        types: 'commercial',
        imgthumbnail:'images/projects/Chinni/Chinni-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Chinni/1.jpg',
        //     img2:'images/projects/Chinni/2.jpg',
        //     img3:'images/projects/Chinni/3.jpg',
        //     img4:'images/projects/Chinni/4.jpg',
        //     img5:'images/projects/Chinni/5.jpg',
        // }
    },
    {
        itemsid: '3',
        names: 'Gopal Singh',
        types: 'ongoing-projects',
        imgthumbnail:'images/projects/Gopal-Singh/Gopal-Singh-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Gopal-Singh/1.jpg',
        //     img2:'images/projects/Gopal-Singh/2.jpg',
        // }
    },
    {
        itemsid: '4',
        names: 'H Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/H-Reddy/H-Reddy-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/H-Reddy/1.jpg',
        //     img2:'images/projects/H-Reddy/2.jpg',
        //     img3:'images/projects/H-Reddy/3.jpg',
        //     img4:'images/projects/H-Reddy/4.jpg',
        //     img5:'images/projects/H-Reddy/5.jpg',
        //     img6:'images/projects/H-Reddy/6.jpg',
        //     img7:'images/projects/H-Reddy/7.jpg',
        //     img8:'images/projects/H-Reddy/8.jpg',
        //     img9:'images/projects/H-Reddy/9.jpg',
        //     img10:'images/projects/H-Reddy/10.jpg',
        //     img11:'images/projects/H-Reddy/11.jpg',
        //     img12:'images/projects/H-Reddy/12.jpg',
        //     img13:'images/projects/H-Reddy/13.jpg',
        //     img14:'images/projects/H-Reddy/14.jpg',
        //     img15:'images/projects/H-Reddy/15.jpg',
        //     img16:'images/projects/H-Reddy/16.jpg',
        // }
    },
    {
        itemsid: '5',
        names: 'Krishna Murthy',
        types: 'ongoing-projects',
        imgthumbnail:'images/projects/Krishna-Murthy/Krishna-Murthy-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Krishna-Murthy/1.jpg',
        //     img2:'images/projects/Krishna-Murthy/2.jpg',
        //     img3:'images/projects/Krishna-Murthy/3.jpg',
        //     img4:'images/projects/Krishna-Murthy/4.jpg',
        //     img5:'images/projects/Krishna-Murthy/5.jpg',
        //     img6:'images/projects/Krishna-Murthy/6.jpg',
        //     img7:'images/projects/Krishna-Murthy/7.jpg',
        //     img8:'images/projects/Krishna-Murthy/8.jpg',
        //     img9:'images/projects/Krishna-Murthy/9.jpg',
        //     img10:'images/projects/Krishna-Murthy/10.jpg',
        //     img11:'images/projects/Krishna-Murthy/11.jpg',
        //     img12:'images/projects/Krishna-Murthy/12.jpg',
        // }
    },
    {
        itemsid: '6',
        names: 'Krishna Reddy',
        types: 'commercial',
        imgthumbnail:'images/projects/Krishna-Reddy/Krishna-Reddy-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Krishna-Reddy/1.jpg',
        //     img2:'images/projects/Krishna-Reddy/2.jpg',
        //     img3:'images/projects/Krishna-Reddy/3.jpg',
        // }
    },
    {
        itemsid: '7',
        names: 'Lokesh',
        types: 'resedential',
        imgthumbnail:'images/projects/Lokesh/Lokesh-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Lokesh/1.jpg',
        // }
    },
    {
        itemsid: '8',
        names: 'Manju Mansion',
        types: 'ongoing-projects',
        imgthumbnail:'images/projects/Manju-Mansion/Manju-Mansion-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Manju-Mansion/1.jpg',
        //     img2:'images/projects/Manju-Mansion/2.jpg',
        //     img3:'images/projects/Manju-Mansion/3.jpg',
        //     img4:'images/projects/Manju-Mansion/4.jpg',
        // }
    },
    {
        itemsid: '9',
        names: 'Mohankumar Nagar',
        types: 'commercial',
        imgthumbnail:'images/projects/Mohankumar-Nagar/Mohankumar-Nagar-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Mohankumar-Nagar/1.jpg',
        //     img2:'images/projects/Mohankumar-Nagar/2.jpg',
        //     img3:'images/projects/Mohankumar-Nagar/3.jpg',
        //     img4:'images/projects/Mohankumar-Nagar/4.jpg',
        // }
    },
    {
        itemsid: '10',
        names: 'Narendra Kumar',
        types: 'resedential',
        imgthumbnail:'images/projects/Narendra-Kumar/Narendra-Kumar-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Narendra-Kumar/1.jpg',
        //     img2:'images/projects/Narendra-Kumar/2.jpg',
        //     img3:'images/projects/Narendra-Kumar/3.jpg',
        //     img4:'images/projects/Narendra-Kumar/4.jpg',
        //     img5:'images/projects/Narendra-Kumar/5.jpg',
        //     img6:'images/projects/Narendra-Kumar/6.jpg',
        //     img7:'images/projects/Narendra-Kumar/7.jpg',
        //     img8:'images/projects/Narendra-Kumar/8.jpg',
        // }
    },
    {
        itemsid: '11',
        names: 'Prabhakar Reddy',
        types: 'resedential',
        imgthumbnail:'images/projects/Prabhakar-Reddy/Prabhakar-Reddy-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Prabhakar-Reddy/1.jpg',
        //     img2:'images/projects/Prabhakar-Reddy/2.jpg',
        //     img3:'images/projects/Prabhakar-Reddy/3.jpg',
        //     img4:'images/projects/Prabhakar-Reddy/4.jpg',
        // }
    },
    {
        itemsid: '12',
        names: 'Ramesh',
        types: 'resedential',
        imgthumbnail:'images/projects/Ramesh/Ramesh-thumb.png',
        // sliderImg:{
        //     img1:'images/projects/Ramesh/1.jpg',
        //     img2:'images/projects/Ramesh/2.jpg',
        //     img3:'images/projects/Ramesh/3.jpg',
        //     img4:'images/projects/Ramesh/4.jpg',
        //     img5:'images/projects/Ramesh/5.jpg',
        //     img6:'images/projects/Ramesh/6.jpg',
        //     img7:'images/projects/Ramesh/7.jpg',
        //     img8:'images/projects/Ramesh/8.jpg',
        //     img9:'images/projects/Ramesh/9.jpg',
        //     img10:'images/projects/Ramesh/10.jpg',
        //     img11:'images/projects/Ramesh/11.jpg',
        //     img12:'images/projects/Ramesh/12.jpg',
        //     img13:'images/projects/Ramesh/13.jpg',
        //     img14:'images/projects/Ramesh/14.jpg',
        //     img15:'images/projects/Ramesh/15.jpg',
        //     img16:'images/projects/Ramesh/16.jpg',
        //     img17:'images/projects/Ramesh/17.jpg',
        //     img18:'images/projects/Ramesh/18.jpg',
        //     img19:'images/projects/Ramesh/19.jpg',
        //     img20:'images/projects/Ramesh/20.jpg',
        //     img21:'images/projects/Ramesh/21.jpg',
        //     img22:'images/projects/Ramesh/22.jpg',
        //     img23:'images/projects/Ramesh/23.jpg',
        //     img24:'images/projects/Ramesh/24.jpg',
        //     img25:'images/projects/Ramesh/25.jpg',
        //     img26:'images/projects/Ramesh/26.jpg',
        //     img27:'images/projects/Ramesh/27.jpg',
        //     img28:'images/projects/Ramesh/28.jpg',
        //     img29:'images/projects/Ramesh/29.jpg',
        //     img14:'images/projects/Ramesh/14.jpg',
        //     img15:'images/projects/Ramesh/15.jpg',
        //     img16:'images/projects/Ramesh/16.jpg',
        // }
    },
    {
        itemsid: '13',
        names: 'Ramesh Hebbal',
        types: 'resedential',
        imgthumbnail:'images/projects/Ramesh-Hebbal/Ramesh-Hebbal-thumb.png',
    },
    {
        itemsid: '14',
        names: 'Shantilal',
        types: 'resedential',
        imgthumbnail:'images/projects/Shantilal/Shantilal-thumb.png',
    },
    {
        itemsid: '15',
        names: 'Srinivas',
        types: 'resedential',
        imgthumbnail:'images/projects/Srinivas/Srinivas-thumb.png',
    },
    {
        itemsid: '16',
        names: 'Suresh',
        types: 'commercial',
        imgthumbnail:'images/projects/Suresh/Suresh-thumb.png',
    },
    {
        itemsid: '17',
        names: 'Yeshwanthpur',
        types: 'resedential',
        imgthumbnail:'images/projects/Yeshwanthpur/Yeshwanthpur-thumb.png',
    }
    ];

    for (var i = 0; i < projectItems.length; i++) {
        // console.log('Entered');
        $('.portfolio-items').append('<a href="javascripts:;" data-id="'+projectItems[i].itemsid+'" class="portfolio-item col-xs-12 col-sm-3 col-md-3 single-work '+ projectItems[i].types+'"><div class="recent-work-wrap"><img class="img-responsive" src="'+ projectItems[i].imgthumbnail+'" alt="" /><p>'+ projectItems[i].names+'</p><label>'+ projectItems[i].types+'</label></div></a>');
    }

    $("#portfolio .portfolio-item").click(function () {
        window.porId = $(this).attr('data-id');
        console.log(porId);

        $('.portfolio-items a').attr('href','project-view.html');
    });
    
    console.log(window.porId);
    if(window.porId == 0){
            $('.por1').show();
            $('.por2').hide();
        }
        else if(window.porId == 1){
            $('.por1').hide();
            $('.por2').show();
        }
        else{
            $('.por1').show();
            $('.por2').hide();
        }
});
