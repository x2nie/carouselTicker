(function ($, undefined) {

    $(window).on("load", function() {
        $("#carouselTicker").carouselTicker();
    })
    
    $("#carouselTicker1").carouselTicker({
        "direction": "next"
    });

    $("#carouselTicker1").carouselTicker({
        "direction": "next"
    });

    $("#carouselTicker-grid-3").carouselTicker({
        "mode": "horizontal",
        "bandWidth": 3
    });

    $("#carouselTicker-grid-3v").carouselTicker({
        "mode": "vertical",
        "bandWidth": 3,
		"onCarouselTickerItemsShown": function() {console.log("All items has been Shown")}
    });

    $(".carouselTicker-start").carouselTicker({
        "direction": "next"
    });

    var carouselTickerWidthResize = $("#carouselTicker-width-resize").carouselTicker();

    $(window).on('resize', function() {
        carouselTickerWidthResize.resizeTicker();
    });

    $("#carouselTicker-vertical").carouselTicker({
        "mode": "vertical",
        "direction": "prev"
    });
    
    $("#carouselTicker-vertical-with-callback").carouselTicker({
        "mode": "vertical",
        "direction": "next",
        "onCarouselTickerLoad": function() {console.log("callback")}
    });

})(jQuery);