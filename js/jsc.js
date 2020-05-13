
$("#menu").hide();
$("#threeLines").click(function() {
    $("#menu").slideToggle();
});

var el = $("#threeLines");

el.on("click", function() {
    $(this).toggleClass("active");
})
