const EventEmitter = require('events')

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent()
// once 只执行一次
ce.once('test', () => {
  console.log('hahaha')
})

setInterval(() => {
  ce.emit('test')
}, 500)