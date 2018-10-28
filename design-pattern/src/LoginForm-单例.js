// 单例 LoginForm

class LoginForm {
  constructor() {
    this.state = 'hide'
  }
  show() {
    if (this.state === 'show') {
      console.log('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框显示成功')
  }
  hide() {
    if (this.state === 'hide') {
      console.log('已经隐藏')
      return
    }
    this.state = 'show'
    console.log('登录框隐藏')
  }

}

LoginForm.getInstance = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()

// test
let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login1.hide()
