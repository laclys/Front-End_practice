
window.onload=window.onresize = function () {
    var oTab = document.getElementById('tabImg');
    var oTabImg = oTab.getElementsByTagName('img')[0];
    var clientW = document.documentElement.clientWidth;
    var oService=document.getElementById('service');
    if (clientW <= 1234) {
        clientW = 1234;
        oTab.style.width = clientW + 'px';
        oTabImg.style.width = clientW + 'px';
    }
    oTabImg.style.height = clientW * (620 / 1903) + 'px';
    oTab.style.height = clientW * (620 / 1903) + 'px';
    oService.style.marginTop=oTabImg.style.height;
}