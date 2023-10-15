$(document).ready(function(){
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('nav-toggle')
    })

    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        loop: true
    })

})