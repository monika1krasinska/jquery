$(function () {
    'use strict';
    var slideShow = $(".slide-show");
    var slideCount = $(".single-slide").length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    slideShow.css({
        "width": slideCount + "00%"
    });
    slideShow.find(".single-slide").each(function (index) {
        $(this).css({
            "width": slideWidth + "%",
            "margin-left": index * slideWidth + "%"
        });
    });


    $(".prev-slide").click(function () {
        slide(slideIndex - 1);
    });
    $(".next-slide").click(function () {
        slide(slideIndex + 1);
    });

    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex > (slideCount - 1)) {
            return;

        }
        var animDuration = 1000;
        var slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
        var marginLeft = (newSlideIndex * (-100)) + "%";
        slideCaption.hide(100);
        slideShow.animate({
            "margin-left": marginLeft
        }, animDuration, function () {
            slideIndex = newSlideIndex;
            slideCaption.fadeIn(600);
        });
    }
})
