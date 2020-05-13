// $('.grid').masonry({
//
//     itemSelector: '.grid-item',
//     columnWidth: 160,
//     isAnimated: true,
//     isFitWidth: true
//
// });
//
// $('.grid-item').each(function(i) {
//     setTimeout(function() {
//         $('.grid-item').eq(i).addClass('is-visible');
//     }, 200 * i);
// })


$('.grid').masonry({
    itemSelector: '.item',
    columnWidth: 160,
    gutter: 10,
    isFitWidth: true
});
var addIsVisibleProgressively = function addIsVisibleProgressively(i, item) {
    setTimeout(function () {
        return $(item).addClass('is-visible');
    }, 200 * i);
};
$('.selector1').each(addIsVisibleProgressively);
$('.selector2').each(addIsVisibleProgressively);
var addClassProgressively = function addClassProgressively(className, interval) {
    return function (i, item) {
        return setTimeout(function () {
            return $(item).addClass(className);
        }, interval * i);
    };
};
$('.item').each(addClassProgressively('is-visible', 200));
$('.selector1').each(addClassProgressively('is-visible', 300));
$('.selector2').each(addClassProgressively('another-class', 200));
