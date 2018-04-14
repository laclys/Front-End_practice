function throttle (func, interval) {
  let identify = 0
  return (...args) => {
    if (identify) return
    identify = setTimeout(() => {
      identify = 0
    }, interval)
    func.apply(this, args)
  }
}

function throttle(func, wait){
  var timer;
  return function() {
    var context = this;
    var args = arguments;
    if(!timer) {
      timer = setTimeout(function() {
        timer = null;
        func.apply(context, args)
      },wait)
    }
  }
}

function throttle(func, wait, leading, trailing) {
  var timer, lastCall = 0, flag = true
  return function() {
    var context = this
    var args = arguments
    var now = + new Date()
    flag = now - lastCall > wait
    if (leading && flag) {
      lastCall = now
      return func.apply(context, args)
    }
    if (!timer && trailing && !(flag && leading)) {
      timer = setTimeout(function () {
        timer = null
        lastCall = + new Date()
        func.apply(context, args)
      }, wait)
    } else {
      lastCall = now
    }
  }
}