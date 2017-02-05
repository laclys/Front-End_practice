function getStyle(obj, name) {
    return (obj.currentStyle || getComputedStyle(obj, false))[name];
}

function startMove(obj, json, fn) {
    console.log(json.width);
    console.log(json.height);
    for (var attr in json) {
        console.log(attr + '    ' + json[attr]);
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            var icur = parseInt(getStyle(obj, attr));
            var speed = (json[attr] - icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (icur != json[attr]) {
                flag = false;

                obj.style[attr] = icur + speed + 'px';
            }
            if(flag){
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
            }
        }, 30)
    }
}