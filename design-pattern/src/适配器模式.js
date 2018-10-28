// 适配器模式 ： 旧接口格式和使用者不兼容； 中间加一个适配转换接口
class Adaptee {
  specificRequest() {
    return '111'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }

  request() {
    let info = this.adaptee.specificRequest()
    return `info-222`
  }
}

// test
let target = new Target()
let res = target.request()
console.log(res)