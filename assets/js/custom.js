$(document).ready(function(){
    
    /* Header Offers Carousel */
    $('.owl-offers-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 8000,
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

    /* Location Search Jquery Autocomplete Initialization*/
    $( function() {
        var servingLocations = [
        "J P Nagar 5th phase",
        "J P Nagar 6th Phase",
        "BTM Layout",
        "Kumarswamy Layout",
        "Jaynagar 3rd Block",
        "Jaynagar 4th Block",
        "Jaynagar 5th Block"
        ];
        $( "#locationSearch" ).autocomplete({
        source: servingLocations
        });
    } );

    $('.owl-menu-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 7000,
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
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('#myCarousel').carousel({
	    interval: 10000
	})
});