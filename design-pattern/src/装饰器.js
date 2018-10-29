// 装饰器模式： 为对象添加新功能；不改变其原有的结构和功能
class Circle {
  draw() {
    console.log('draw~')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(circle) {
    console.log('set red border')
  }
}

// test
let circle = new Circle()
circle.draw()
console.log('-----')
let dec = new Decorator(circle)
dec.draw()