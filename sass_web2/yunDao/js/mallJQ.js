$(function () {
    start();
});
$(window).resize(function () {
    window.location.reload();
    start();
});

function start() {
    //大图自适应
    var oBig = $('#bigImg');
    var oBigImg = oBig.find('img');
    var clientW = $(document).width();
    if (clientW <= 1234) {
        clientW = 1234;
        oBig.css({
            'width': clientW + 'px'
        });
        oBigImg.css({
            'width': clientW + 'px'
        });
    }
     oBig.css({
        'height': clientW * (561 / 1903) + 'px'
    });
    oBigImg.css({
        'height': clientW * (561 / 1903) + 'px'
    });
    var oProduct = $('#products');
        oProduct.css({
        'marginTop': oBig.css('height')
    });
}