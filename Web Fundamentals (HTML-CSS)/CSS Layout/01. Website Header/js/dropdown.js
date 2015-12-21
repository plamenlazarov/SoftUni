$(function(){
    $(".dropdown-link").on("click", "a", function(e){
        e.preventDefault();
        var submenu = $("#sub-menu");

        if(submenu.css("display") == "none"){
            submenu.appendTo("body");
            submenu.css("display", "block");
        } else {
            submenu.css("display", "none");
        }
    });
});
