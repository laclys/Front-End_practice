// 状态模式： 一个对象有状态在变化
// 每个状态变化都会触发一个逻辑
// 不能总用if···else控制

class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`turn to ${this.color} light`)
    context.setState(this)
  }
}

class Context {

  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
}

//test

let context = new Context()

let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

green.handle(context)
console.log(context.getState())

yellow.handle(context)
console.log(context.getState())

red.handle(context)
console.log(context.getState())