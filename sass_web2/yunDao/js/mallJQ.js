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
    //我们产品图标移入移出
    var oProducts_icon = $('.off_on');
    oProducts_icon.hover(
        function () {
            $(this).animate({
                'left': '-260px'
            });
        },
        function () {
            $(this).animate({
                'left': '0px'
            });
        });
    //选择原因图标移入移出
    var oMove_icon = $('.move_icon');
    oMove_icon.hover(
        function () {
            $(this).animate({
                'top': '0px'
            });
        },
        function () {
            $(this).animate({
                'top': '120px'
            });
        });
}