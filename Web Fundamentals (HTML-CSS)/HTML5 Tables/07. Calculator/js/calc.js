$(function(){
    var display = $('input:text')

    $("input[type='button']").on("click", function(){
        var currentValue = this.value;
        if(currentValue != "C" && currentValue != "="){
            display.val(display.val() + currentValue);
        } else {
            display.val(eval(display.val()));
        }
    });
});
