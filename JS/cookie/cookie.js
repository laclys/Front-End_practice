//设置cookie
function setCookie(sName, sValue, iDay) {
    if (iDay) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = `${sName}=${sValue};path=/;expires=${oDate}`;
    } else {
        document.cookie = `${sName}=${sValue};path=/`;

    }
}
// 获取cookie
function getCookie(sName) {
    var str = document.cookie;
    var arr1 = str.split('; ');
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        if (arr2[0] == sName) {
            return arr2[1];
        }
    }
    return '';
}
//删除coocookie
function removeCookie(sName){
    setCookie(sName,'',-1);
}