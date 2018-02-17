setImmediate(() => {
  console.log('setImmediate')
}) // 等下一个事件队列（异步）

process.nextTick(() => { //放入当前队列，队尾
  console.log('nextTick')
})

// nextTick比setImmediate执行的早