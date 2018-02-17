$(function () {
    start();
});
$(window).resize(function () {
     window.location.reload();
    start();
});

function start() {
    //轮播图宽高自适应
    var oTab = $('#tabImg');
    var oTabImg = $('#tabImg img');
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
    oTabImg.each(function (index) {
        oTabImg.eq(index).css({
            'left': clientW * index + 'px'
        })
    });
    oService.css({
        'marginTop': oTab.css('height')
    });
    //播放选项卡
    var aImgLi = $('#tabBtn li');
    var oImgBox = $('#imgBox');
    aImgLi.click(function () {
        aImgLi.removeClass('on');
        $(this).addClass('on');
        oImgBox.animate({
            'left': -$(this).index() * clientW + 'px'
        });
    });
    //导航栏-用户中心移入移出事件
    var userCenter = $('#userCenter');
    var userCenterArrow = $('#userCenter img');
    var centerMenuDiv = $('#centerMenu');
    var menuArrow = $('#menuArrow');
    userCenter.hover(
        function () {
            userCenterArrow.attr({
                'src': userCenterArrow.attr('_src')
            });
            centerMenuDiv.stop(true).fadeIn();
            menuArrow.stop(true).fadeIn();
        },
        function () {
            userCenterArrow.attr({
                'src': "./img/arrow-1.png"
            });
            menuArrow.delay(300).fadeOut();
            centerMenuDiv.delay(300).fadeOut();
        });
    centerMenuDiv.hover(
        function () {
            userCenterArrow.attr({
                'src': userCenterArrow.attr('_src')
            });
            centerMenuDiv.stop(true).fadeIn();
            menuArrow.stop(true).fadeIn();
        },
        function () {
            userCenterArrow.attr({
                'src': "./img/arrow-1.png"
            });
            menuArrow.delay(300).fadeOut();
            centerMenuDiv.delay(300).fadeOut();
        });
    //常见问题图标移入移出事件
    var problemImg = $('#problem img');
    problemImg.each(function (index) {
        problemImg.eq(index).attr({
            'srcTmp': problemImg.eq(index).attr('src')
        });
    });

    problemImg.hover(
        function () {
            $(this).attr({
                'src': $(this).attr('_src')
            });
        },
        function () {
            $(this).attr({
                'src': $(this).attr('srcTmp')
            });
        });
    //右侧固定联系咨询移入移出
    var oConsult1 = $('#consult1');
    var oConImg1 = $('#consult1 img');
    oConsult1.hover(
        function () {
            oConImg1.attr({
                'src': oConImg1.attr('_src')
            });
        },
        function () {
            oConImg1.attr({
                'src': "./img/consult1.png"
            });
        });
    var oConsult2 = $('#consult2');
    var oConImg2 = $('#consult2 img');
    oConsult2.hover(
        function () {
            oConImg2.attr({
                'src': oConImg2.attr('_src')
            });
        },
        function () {
            oConImg2.attr({
                'src': "./img/consult2.png"
            });
        });

}