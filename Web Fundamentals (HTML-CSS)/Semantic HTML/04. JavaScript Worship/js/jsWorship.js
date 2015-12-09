(function(){
    var canvas = document.getElementById("js-worship");
    var ctx = canvas.getContext("2d");

    ctx.font = "30px Arial";
    ctx.fillText("I love JavaScript", 10, 50);
    ctx.fillStyle = "#f1da4e";
    ctx.fillRect(50, 80, 135, 135);
    ctx.fillStyle = "#000";

    ctx.font = "bold 70px Garuda";
    ctx.fillText("JS", 100, 200);
})();

