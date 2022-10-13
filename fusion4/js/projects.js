$(document).ready(function(){
    var projectItems = [
    {
        names: 'Chandrakanth',
        types: 'resedential',
    },
    {
        names: 'Chinnaswamy Reddy',
        types: 'resedential',
    },
    {
        names: 'Chinni',
        types: 'Commercial',
    },
    {
        names: 'Gopal Singh',
        types: 'resedential',
    },
    {
        names: 'H Reddy',
        types: 'resedential',
    },
    {
        names: 'Krishna Murthy',
        types: 'resedential',
    },
    {
        names: 'Krishna Reddy',
        type: 'Commercial',
    },
    {
        names: 'Lokesh',
        types: 'resedential',
    },
    {
        names: 'Manju Mansion',
        types: 'resedential',
    },
    {
        names: 'Mohankumar Nagar',
        types: 'commercial',
    },
    {
        nams: 'Narendra Kumar',
        types: 'resedential',
    },
    {
        names: 'Prabhakar Reddy',
        types: 'resedential',
    },
    {
        names: 'Ramesh',
        types: 'resedential',
    },
    {
        names: 'Ramesh Hebbal',
        types: 'resedential',
    },
    {
        names: 'Shantilal',
        types: 'resedential',
    },
    {
        names: 'Srinivas',
        types: 'resedential',
    },
    {
        names: 'Suresh',
        types: 'commercial',
    },
    {
        names: 'Yeshwanthpur',
        types: 'resedential',
    }
    ];

    for (var i = 0; i < projectItems.length; i++) {
        // console.log('Entered');
        $('.portfolio-items').append('<a href="javascripts:;" class="portfolio-item col-xs-12 col-sm-3 col-md-3 single-work"><div class="recent-work-wrap"><img class="img-responsive" src="images/projects/item-1.png" alt="" /><p> projectItems</p><label> types +'</label></div></a>');
    }
});

