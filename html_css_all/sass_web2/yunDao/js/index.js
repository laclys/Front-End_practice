//当窗口加载或页面尺寸变化事件
window.onload = window.onresize = function () {
    var oTab = document.getElementById('tabImg');
    var oTabImg = oTab.getElementsByTagName('img')[0];
    var clientW = document.documentElement.clientWidth;
    var oService = document.getElementById('service');
    var oUl = document.getElementById('tabBtn');
    var aImgLi = oUl.getElementsByTagName('li');
    var userCenter = document.getElementById('userCenter');
    var userCenterArrow = userCenter.getElementsByTagName('img')[0];
    var centerMenuDiv = document.getElementById('centerMenu');
    var menuArrow = document.getElementById('menuArrow');
    var oCon1 = document.getElementById('consult1');
    var conImg1 = oCon1.getElementsByTagName('img')[0];
    var oCon2 = document.getElementById('consult2');
    var conImg2 = oCon2.getElementsByTagName('img')[0];
    var oProblem = document.getElementById('problem');
    var problemImg = oProblem.getElementsByTagName('img');
    //可视宽度小于1234px时，将页面宽度强制设为1234px。
    if (clientW <= 1234) {
        clientW = 1234;
        oTab.style.width = clientW + 'px';
        oTabImg.style.width = clientW + 'px';
    }
    //轮播图按页面尺寸缩放
    oTabImg.style.height = clientW * (620 / 1903) + 'px';
    oTab.style.height = clientW * (620 / 1903) + 'px';
    oService.style.marginTop = oTabImg.style.height;

    /* //自动播放选项卡
        var n = 0;
        var timer = null;
        autoPlay();
        timer = setInterval(autoPlay, 2500);
        oTab.onmouseover = function () {
            clearInterval(timer);
        }
        oTab.onmouseout = function () {
            clearInterval(timer);
            timer = setInterval(autoPlay, 2500);
        }*/
    for (var i = 0; i < aImgLi.length; i++) {
        aImgLi[i].index = i;
        aImgLi[i].onclick = function () {
            n = this.index;
            changeImg(n);
        }
    }
    //菜单移入移出事件
    userCenter.onmouseover = function () {
        userCenterArrow.src = userCenterArrow.getAttribute('_src');
        centerMenuDiv.style.display = 'block';
        menuArrow.style.display = 'block';
    }
    userCenter.onmouseout = function () {
        userCenterArrow.src = "./img/arrow-1.png";
        centerMenuDiv.style.display = 'none';
        menuArrow.style.display = 'none';
    }
    //咨询联系移入移出事件
    oCon1.onmouseover = function () {
        conImg1.src = conImg1.getAttribute('_src');
    }
    oCon1.onmouseout = function () {
        conImg1.src = "./img/consult1.png";
    }
    oCon2.onmouseover = function () {
        conImg2.src = conImg2.getAttribute('_src');
    }
    oCon2.onmouseout = function () {
        conImg2.src = "./img/consult2.png";
    }
    //常见问题图标移入移出事件
    for (var i = 0; i < problemImg.length; i++) {
        problemImg[i].srcTemp = problemImg[i].getAttribute('src');
        problemImg[i].onmouseover = function () {
            this.src = this.getAttribute('_src');
        }
        problemImg[i].onmouseout = function () {
            this.src = this.srcTemp;
        }
    }
    /*---------------FUNCTION----------------*/
    //选项卡函数
    function changeImg(index) {
        for (var i = 0; i < aImgLi.length; i++) {
            aImgLi[i].className = '';
        }
        aImgLi[index].className = 'on';
        oTabImg.src = './img/bar-' + (index + 1) + '.png';
    }
    /*//自动播放选项卡函数
    function autoPlay() {
        n++;
        if (n == aImgLi.length) {
            n = 0;
        }
        changeImg(n);
    }*/
};