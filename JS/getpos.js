function getPos(obj) {
    var l = 0;
    var t = 0;

    while (obj) {
        l += obj.offsetLeft;
        t += obj.offsetTop;

        obj = obj.offsetParent;
    }

    return {
        left: l,
        top: t
    }
}