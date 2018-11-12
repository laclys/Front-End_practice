// 命令模式：执行命令时，发布者和执行者分开；中间加入命令对象当中转站

// 设计原则验证： 命令对象和执行命令对象分开 解耦

// 接受者

class Receiver {
  exec() {
    console.log('exec')
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.receiver = receiver
  }
  cmd() {
    console.log('do it')
    this.receiver.exec()
  }
}

// 触发者
class Invoker {
  constructor(command) {
    this.command = command
  }
  invoke() {
    this.command.cmd()
  }
}

// test

// soldier
let soldier = new Receiver()
// trumpeter
let trumpeter = new Command(soldier)
// general
let general = new Invoker(trumpeter)

general.invoke()