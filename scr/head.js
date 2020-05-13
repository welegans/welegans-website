$(document).ready(function () {
    $('h1').css({'width': '100%', 'text-align': 'center'});

    var w1 = $(window).height();
    var w = w1 /3.5;

    $('h1').css("margin-top", w + "px")
});
