$(function () {
    start();
});
$(window).resize(function () {
    start();
});

function start() {
    //轮播图宽高自适应
    var oTab = $('#tabImg');
    var oTabImg = $('#tabImg img:first-child');
    var clientW = $(document).width();
    var oService = $('#service');
    if (clientW <= 1234) {
        clientW = 1234;
        oTab.css({
            'width': clientW + 'px'
        });
        oTabImg.css({
            'width': clientW + 'px'
        });
    }
    oTab.css({
        'height': clientW * (620 / 1903) + 'px'
    });
    oTabImg.css({
        'height': clientW * (620 / 1903) + 'px'
    });
    oService.css({
        'marginTop': oTabImg.css('height')
    });
}