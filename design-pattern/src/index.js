// 中介者模式
class A {
  constructor() {
    this.number = 0
  }
  setNumber(num, m) {
    this.number = num
    if (m) {
      m.setB()
    }
  }
}

class B {
  constructor() {
    this.number = 0
  }
  setNumber(num, m) {
    this.number = num
    if (m) {
      m.setA()
    }
  }
}

// 中介者
class Mediator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  setA() {
    let number = this.a.number
    this.b.setNumber(number * 100)
  }
  setB() {
    let number = this.b.number
    this.a.setNumber(number / 100)
  }
}