// 代理模式：使用者无权访问目标对象； 中间加代理，通过代理做授权和控制
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