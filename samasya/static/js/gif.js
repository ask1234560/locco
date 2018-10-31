
$(window).on("load",function() {
    // Animate loader off screen
    $(".gif").fadeOut("slow");
});

window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};