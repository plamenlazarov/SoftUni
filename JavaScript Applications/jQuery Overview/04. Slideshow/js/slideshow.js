$(function() {
    var $slider = $('#slider'),
        $slidesContainer = $('#slides'),
        $slides  = $('.slide'),
        interval,
        currentSlide = 1;

    function startInterval() {
        interval = setInterval(function() {
            $slidesContainer.animate({'margin-left': '-=400px'}, 1000, function() {
                currentSlide++;
                if(currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slidesContainer.css('margin-left', 0);
                }
            });
        }, 2000);
    }

    function stopInterval() {
        clearInterval(interval);
    }

    startInterval();

    $slides.hover(stopInterval, startInterval)
});
