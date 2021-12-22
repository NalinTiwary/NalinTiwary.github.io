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
});