// throttle 策略的电梯。保证如果电梯第一个人进来后，50毫秒后准时运送一次，不等待。如果没有人，则待机。

let throttle = (fn, delay = 50) => {
  let startTime = 0
  return function (...args) {
    let currentTime = new Date()
    if (currentTime - startTime >= delay) {
      fn.apply(this, args)
      startTime = currentTime
    }
  }
}
