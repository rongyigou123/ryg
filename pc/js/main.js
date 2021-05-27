(function ($) {
    "use strict";


var win = $(window);
win.on("load", function () {
    $("#loading").fadeOut(0)
});


win.on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('#scroll').fadeIn(1000)
    } else{
        $('#scroll').fadeOut(1000)
    }
});

$('#scroll').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
});



$("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
});


$(".mobile-menubar").on("click", function(){
    $(".side-mobile-menu").addClass('open-menubar');
    $(".body-overlay").addClass("opened");
});
$(".close-menu").on("click", function(){
    $(".side-mobile-menu").removeClass('open-menubar');
    $(".body-overlay").removeClass("opened");
});

$(".body-overlay").on("click", function () {
    $(".side-mobile-menu").removeClass('open-menubar');
    $(".body-overlay").removeClass("opened");
});



$("[data-background]").each(function (){
    $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
});



// $(".header-search").on("click", function(){
//     $(".header-search-details").addClass('open-search-info');
// });
// $(".close-icon").on("click", function(){
//     $(".header-search-details").removeClass('open-search-info');

// });



function mainSlider() {
    var BasicSlider = $('.slider-active');

    BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });

    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    BasicSlider.slick({
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow:'<b><i class="l-a"><</b>',
        nextArrow:'<b><i class="r-a">></b>',
        responsive: [
            { breakpoint: 767, settings: {arrows: false} }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();



// $('.content-items-active').slick({
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay:false,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3,
//             }
//         },
//         {
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 475,
//             settings: {
//                 slidesToShow: 1,
//             }
//         }
//     ]
// });


new WOW().init();

})(jQuery);	  
