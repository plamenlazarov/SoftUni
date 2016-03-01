$(document).ready(function() {
    $('#two').append('<li>Inserted after</li>');
    $('#one').prepend('<li>Inserted before</li>');

    var li = $('<li>Inserted after</li>');
    li.appendTo('#three');
});
