    function Tab(id){
        this.box=document.getElementById(id);
        this.aInp=this.box.getElementsByTagName('input');
        this.aDiv=this.box.getElementsByTagName('div');
        this.init();
    }
    Tab.prototype.init=function(){
        var _this=this;
        for(var i=0;i<this.aInp.length;i++){
            this.aInp[i].index=i;
            this.aInp[i].onclick=function(){
                _this.fnClick(this.index);
            }
        }
    };
    Tab.prototype.fnClick=function(index){
        for(var i=0;i<this.aDiv.length;i++){
            this.aInpt[i].className='';
            this.aDiv[i].className='';
        }
        this.aInp[index].className='on';
        this.aDiv[index].className='on'
    }
    window.onload=function(){
        new Tab('box1');
    }
