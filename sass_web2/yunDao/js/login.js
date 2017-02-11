var userName = document.getElementById('username1');
var nameImg = userName.getElementsByTagName('img')[0];
var nameInput = userName.getElementsByTagName('input')[0];
var nameDiv = userName.getElementsByTagName('div')[0];

var userPas = document.getElementById('password1');
var pasImg = userPas.getElementsByTagName('img')[0];
var pasInput = userPas.getElementsByTagName('input')[0];
var pasDiv = userPas.getElementsByTagName('div')[0];

nameInput.onfocus = function () {
    nameInput.value = '';
    nameDiv.style.background = '#e9f3fd';
    nameImg.src = nameImg.getAttribute('_src');
}
nameInput.onblur = function () {
    nameInput.value = '账户名';
    nameDiv.style.background = '#f3f4f4';
    nameImg.src = './img/login_3.png';
}
pasInput.onfocus = function () {
    pasInput.value = '';
    pasDiv.style.background = '#e9f3fd';
    pasImg.src = pasImg.getAttribute('_src');
}
pasInput.onblur = function () {
    pasInput.value = '密码';
    pasDiv.style.background = '#f3f4f4';
    pasImg.src = './img/login_4.png';
}