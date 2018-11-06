const EventEmitter = require('events').EventEmitter

/* const emitter1 = new EventEmitter()

// 监听 some 事件
emitter1.on('some', info => {
  console.log('fn1', info)
}
)
// 监听 some 事件
emitter1.on('some', info => {
  console.log('fn2', info)
})

// 触发 some 事件
emitter1.emit('some', 'xxxx') */

/* // 继承
class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

let simon = new Dog('simon')
simon.on('bark', function() {
  console.log(this.name, 'barked')
})

setInterval(function() {
  simon.emit('bark')
}, 1000) */

// stream 
const fs = require('fs')
const readStream = fs.createReadStream('./data/file1.txt')

let len = 0
readStream.on('data', function(chunk) {
  let temp = chunk.toString().length
  len += temp
})

readStream.on('end', function() {
  console.log('length', len)
})