$(function() {
    var selector = $('#class').val();
    $('button').on('click', function() {
        var selector = $('#class').val();
        var color = $('#color').val();

        $('.' + selector).css('background', color);
    });
});
