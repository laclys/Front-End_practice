var aForm = document.getElementById('form');
//获取输入表单
var aIn = aForm.getElementsByTagName('input');
var oSelect = document.getElementById('select1');
var message_button = document.getElementById('message_button');
//错误信息元素对象获取
var m1 = document.getElementById('m1');
var m2 = document.getElementById('m2');
var m3 = document.getElementById('m3');
var m4 = document.getElementById('m4');
var m5 = document.getElementById('m5');
var m6 = document.getElementById('m6');
var m7 = document.getElementById('m7');
var m8 = document.getElementById('m8');
var m9 = document.getElementById('m9');
//账号名
var reg1 = /^[0-9a-zA-Z]{1,8}$/;
aIn[0].onfocus = function () {
    if (this.value == ' 限8位，含数字及字母') {
        this.value = '';
    }
};
aIn[0].onblur = function () {
    if (this.value != '') {
        if (!reg1.test(this.value)) {
            //   alert(1);
            m1.getElementsByTagName('img')[0].style.display = 'none';
            m1.getElementsByTagName('img')[1].style.display = 'inline-block';
            m1.getElementsByTagName('span')[0].innerHTML = '<red>' + '限8位,含数字及字母' + '</red>'
            m1.getElementsByTagName('span')[0].style.display = 'block';
            m1.getElementsByTagName('span')[1].style.display = 'none';
        } else {
            m1.getElementsByTagName('img')[0].style.display = 'inline-block';
            m1.getElementsByTagName('img')[1].style.display = 'none';
            m1.getElementsByTagName('span')[0].style.display = 'none';
            m1.getElementsByTagName('span')[1].style.display = 'none';
        }
    } else {
        this.value = ' 限8位，含数字及字母';
    }
};
//设置密码
var reg2 = /^[0-9a-zA-Z]{6,16}$/;
aIn[1].onfocus = function () {
    if (this.value == ' 6-16个数字或者字母') {
        this.value = '';
    }
};
aIn[1].onblur = function () {
    if (this.value != '') {
        if (!reg2.test(this.value)) {
            //   alert(1);
            m2.getElementsByTagName('img')[0].style.display = 'none';
            m2.getElementsByTagName('img')[1].style.display = 'inline-block';
            m2.getElementsByTagName('span')[0].style.display = 'block';
            m2.getElementsByTagName('span')[1].style.display = 'none';
        } else {
            m2.getElementsByTagName('img')[0].style.display = 'inline-block';
            m2.getElementsByTagName('img')[1].style.display = 'none';
            m2.getElementsByTagName('span')[0].style.display = 'none';
            m2.getElementsByTagName('span')[1].style.display = 'none';
        }
    } else {
        this.value = ' 6-16个数字或者字母';
    }
};
//确认密码
aIn[2].onblur = function () {
    if (this.value != '') {
        if (aIn[1].value != this.value) {
            m3.getElementsByTagName('img')[0].style.display = 'none';
            m3.getElementsByTagName('img')[1].style.display = 'inline-block';
            m3.getElementsByTagName('span')[0].style.display = 'block';
        } else {
            m3.getElementsByTagName('img')[0].style.display = 'inline-block';
            m3.getElementsByTagName('img')[1].style.display = 'none';
            m3.getElementsByTagName('span')[0].style.display = 'none';
        }
    }
};
//联系人
aIn[4].onblur = function () {
    if (this.value == '') {
        // m5.getElementsByTagName('img')[0].style.display = 'none';
        // m5.getElementsByTagName('img')[1].style.display = 'inline-block';
        // m5.getElementsByTagName('span')[0].style.display = 'block';
    } else {
        m5.getElementsByTagName('img')[0].style.display = 'inline-block';
        m5.getElementsByTagName('img')[1].style.display = 'none';
        m5.getElementsByTagName('span')[0].style.display = 'none';
    }
};
//所在区域
oSelect.onblur = function () {
    if (this.value == '') {
        // m6.getElementsByTagName('img')[0].style.display = 'none';
        // m6.getElementsByTagName('img')[1].style.display = 'inline-block';
        // m6.getElementsByTagName('span')[0].style.display = 'block';
    } else {
        m6.getElementsByTagName('img')[0].style.display = 'inline-block';
        m6.getElementsByTagName('img')[1].style.display = 'none';
        m6.getElementsByTagName('span')[0].style.display = 'none';
    }
};
//验证手机
var reg3 = /1[3578]\d{9}/;
aIn[5].onblur = function () {
    if (this.value != '') {
        if (!reg3.test(this.value)) {
            //   alert(1);
            m7.getElementsByTagName('img')[0].style.display = 'none';
            m7.getElementsByTagName('img')[1].style.display = 'inline-block';
            m7.getElementsByTagName('span')[0].style.display = 'block';
            m7.getElementsByTagName('span')[1].style.display = 'none';
        } else {
            m7.getElementsByTagName('img')[0].style.display = 'inline-block';
            m7.getElementsByTagName('img')[1].style.display = 'none';
            m7.getElementsByTagName('span')[0].style.display = 'none';
            m7.getElementsByTagName('span')[1].style.display = 'none';
        }
    } else {
        // m7.getElementsByTagName('img')[0].style.display = 'none';
        // m7.getElementsByTagName('img')[1].style.display = 'inline-block';
        // m7.getElementsByTagName('span')[0].style.display = 'none';
        // m7.getElementsByTagName('span')[1].style.display = 'block';
    }
};
//获取短信验证码
message_button.onclick = function () {
    return false;
}
//点击-同意协议并注册
aIn[8].onclick = function () {
    //用户名为空
    if (aIn[0].value == ' 限8位，含数字及字母') {
        m1.getElementsByTagName('span')[0].style.display = 'none';
        m1.getElementsByTagName('span')[1].style.display = 'block';
        m1.getElementsByTagName('img')[0].style.display = 'none';
        m1.getElementsByTagName('img')[1].style.display = 'inline-block';
    }
    //密码为空
    if (aIn[1].value == ' 6-16个数字或者字母') {
        m2.getElementsByTagName('span')[0].style.display = 'none';
        m2.getElementsByTagName('span')[1].style.display = 'block';
        m2.getElementsByTagName('img')[0].style.display = 'none';
        m2.getElementsByTagName('img')[1].style.display = 'inline-block';
    }
    //确认密码为空
    if (aIn[2].value == '') {
        m3.getElementsByTagName('span')[0].style.display = 'block';
        m3.getElementsByTagName('img')[0].style.display = 'none';
        m3.getElementsByTagName('img')[1].style.display = 'inline-block';
    }
    //联系人为空
    if (aIn[4].value == '') {
        m5.getElementsByTagName('img')[0].style.display = 'none';
        m5.getElementsByTagName('img')[1].style.display = 'inline-block';
        m5.getElementsByTagName('span')[0].style.display = 'block';
    }
    //选择区域为空
    if (oSelect.value == '') {
        m6.getElementsByTagName('img')[0].style.display = 'none';
        m6.getElementsByTagName('img')[1].style.display = 'inline-block';
        m6.getElementsByTagName('span')[0].style.display = 'block';
    }
    //手机号为空
    if (aIn[5].value == '') {
        m7.getElementsByTagName('img')[0].style.display = 'none';
        m7.getElementsByTagName('img')[1].style.display = 'inline-block';
        m7.getElementsByTagName('span')[0].style.display = 'none';
        m7.getElementsByTagName('span')[1].style.display = 'block';
    }
    //获取短信验证码
    if (aIn[6].value == '') {
        m8.getElementsByTagName('img')[0].style.display = 'none';
        m8.getElementsByTagName('img')[1].style.display = 'inline-block';
        m8.getElementsByTagName('span')[0].style.display = 'block';
    }
    //验证码
    if (aIn[7].value == ''||aIn[7].value != '4wa6') {
        m9.getElementsByTagName('img')[0].style.display = 'none';
        m9.getElementsByTagName('img')[1].style.display = 'inline-block';
        m9.getElementsByTagName('span')[0].style.display = 'block';
    }
    return false;
}