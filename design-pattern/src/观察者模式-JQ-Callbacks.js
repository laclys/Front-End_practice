// 观察者模式 ： JQ Callbacks
var callbacks = $.Callbacks()

callbacks.add(function(info) {
  console.log('fn1', info)
})
callbacks.add(function(info) {
  console.log('fn2', info)
})
callbacks.add(function(info) {
  console.log('fn3', info)
})

callbacks.fire('gogogo')
callbacks.fire('fire')