$(document).ready(function() {
    //NavBar and Background
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.home').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
            $('.home').removeClass("sticky");
        }
    });
    //Menu toggle
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation script
    var typed = new Typed(".typed", {
        strings: ["Developer", "Guitarist", "Chess Player", "Student"],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true
    });

    //Owl-carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});