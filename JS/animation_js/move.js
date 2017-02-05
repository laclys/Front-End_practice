function getStyle(obj, name) {
    return (obj.currentStyle || getComputedStyle(obj, false))[name];
}

function startMove(obj, attr, iTarget, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var icur = parseInt(getStyle(obj, attr));
        var speed = (iTarget - icur) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (icur == iTarget) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        } else {
            obj.style[attr] = icur + speed + 'px';
        }
    }, 30)
}