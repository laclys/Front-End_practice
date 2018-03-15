function* fn(a) {
  a = yield a
  let b = yield 2
  let c = yield 3
  return a + b + c
}

function co (fn, ...args) {
  let g = fn(...args)
  return new Promise((resolve, reject) => {
    function next (lastValue) {
      let {value, done} = g.next(lastValue)
      if (done) {
        resolve(value)
      } else {
        if (value instanceof Promise) {
          value.then(next, (val) => reject(val))
        } else {
          next(value)
        }
      }
    }
    next()
  })
}

co(fn, 100).then(value => {
  console.log(value); // 105
})