window.onload = window.onresize = function () {
    var oTab = document.getElementById('tabImg');
    var oTabImg = oTab.getElementsByTagName('img')[0];
    var clientW = document.documentElement.clientWidth;
    var oService = document.getElementById('service');
    var oUl = document.getElementById('tabBtn');
    var aImgLi = oUl.getElementsByTagName('li');
    var userCenter=document.getElementById('userCenter');
    var userCenterArrow=userCenter.getElementsByTagName('img')[0];
    var centerMenuDiv=document.getElementById('centerMenu');
    var menuArrow=document.getElementById('menuArrow');
    var n = 0;
    var timer = null;
    if (clientW <= 1234) {
        clientW = 1234;
        oTab.style.width = clientW + 'px';
        oTabImg.style.width = clientW + 'px';
    }
    oTabImg.style.height = clientW * (620 / 1903) + 'px';
    oTab.style.height = clientW * (620 / 1903) + 'px';
    oService.style.marginTop = oTabImg.style.height;
    //auto play oTabImg
    autoPlay();
    timer = setInterval(autoPlay, 1500);
    oTab.onmouseover = function () {
        clearInterval(timer);
    }
    oTab.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(autoPlay, 1500);
    }
    for (var i = 0; i < aImgLi.length; i++) {
        aImgLi[i].index = i;
        aImgLi[i].onclick = function () {
            n = this.index;
            changeImg(n);
        }
    }
    //菜单移入移出事件
    userCenter.onmouseover=function(){
        userCenterArrow.src=userCenterArrow.getAttribute('_src');
        centerMenuDiv.style.display='block';
        menuArrow.style.display='block';
    }
    userCenter.onmouseout=function(){
         userCenterArrow.src="./img/arrow-1.png" ;
         centerMenuDiv.style.display='none';
         menuArrow.style.display='none';
    }
    //选项卡
    function changeImg(index) {
        for (var i = 0; i < aImgLi.length; i++) {
            aImgLi[i].className = '';
        }
        aImgLi[index].className = 'on';
        oTabImg.src = './img/bar-' + (index + 1) + '.png';
    }
    //自动播放选项卡
    function autoPlay() {
        n++;
        if (n == aImgLi.length) {
            n = 0;
        }
        changeImg(n);
    }
}