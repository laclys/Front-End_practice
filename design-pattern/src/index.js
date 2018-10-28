// 工厂模式：将new操作单独封装。
class Product {
  constructor(name) {
    this.name = name
  }

  init() {
    alert('init')
  }

  fn1() {
    alert('fn1')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

// test
let creator = new Creator()
let p = creator.create('zzz')
p.init()