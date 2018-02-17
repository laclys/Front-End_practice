window.onload = function () {
    var ibox = document.getElementById('imgbox1').getElementsByTagName('li');
    var ibtn = document.getElementById('imgbtn1').getElementsByTagName('li');
    for (var i = 0; i < ibtn.length; i++) {
        ibtn[i].index = i;
        ibtn[i].onclick = function () {
            for (var i = 0; i < ibtn.length; i++) {
                ibtn[i].className = '';
                ibox[i].style.display = 'none';
            }
            this.className = 'on';
            ibox[this.index].style.display = 'block';
        }
    }
}