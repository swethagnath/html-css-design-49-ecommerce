$(document).ready(function(){
    var sync1 = $("#sync1");
   
    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel');
    
    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times')
        $('.navbar').removeClass('nav-toggle')

        if($(window).scrollTop() > 68){
            $('header .header-2').addClass('header-active')
        }else{
            $('header .header-2').removeClass('header-active')
        }

        $('section').each(function(){
            let height = $(this).height()
            let offset =  $(this).offset().top - 200
            let top = $(window).scrollTop()
            let id = $(this).attr('id')

            if( top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active')
                $('.navbar').find(`[href='#${id}]`).addClass('active')
            }
        })
    })

    $('.small-image img').click(function(){
        $(this).addClass('image-active').siblings('').removeClass('image-active')
        let image = $(this).attr('src')
        $(this).parent().siblings('.big-image').children().attr('src', image)
    })
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('nav-toggle')
    })

    $('.home-slider').owlCarousel({
        item: 1,
        loop:false,
        nav: true,
        dots: true,
        autoplayTimeout: 8000,
    })

    $('.gallery .btn').click(function(){
        let filter = $(this).attr('data-filter')
        if(filter == 'all'){
            $('.gallery .box').show(400)
        }else{
            $('.gallery .box').not('.'+filter).hide(200)
            $('.gallery .box').filter('.'+filter).show(400)
        }

        $(this).addClass('button-active').siblings().removeClass('button-active')
    })

})