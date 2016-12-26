$(document).ready(function(){
    
    /* Header Offers Carousel */
    $('.owl-offers-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        navigation: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        navigation: false,
        nav: false,
        dots: false,
        margin: 10,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 3
            }
        }
    });
});