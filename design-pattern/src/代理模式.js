// 代理模式：使用者无权访问目标对象； 中间加代理，通过代理做授权和控制


// 适配器模式 vs 代理模式 ： 
// 适配器模式： 提供不同的接口
// 代理模式: 提供一模一样的接口

// 装饰器模式 vs 代理模式 ： 
// 装饰器模式 扩展功能 原有功能不变且可直接使用
// 代理模式: 显示原有功能 但是经过限制或者阉割之后的

class ReadImg {
  constructor(filename) {
    this.fileName = filename
    this.loadFromDisk()
  }

  loadFromDisk() {
    // 模拟
    console.log('loading...' + this.fileName )
  }

  display() {
    console.log('display...' + this.fileName )
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new ReadImg(fileName)
  }

  display() {
    this.realImg.display()
  }
}

// test

let proxyImg = new ProxyImg('1.png')
proxyImg.display()