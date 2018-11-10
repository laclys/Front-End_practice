// promise
import StateMachine from 'javascript-state-machine'

let fsm = new StateMachine({
  init: 'pedding',
  transitions: [{
      name: 'resolve',
      from: 'pedding',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pedding',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve: function (state, data) {
      console.log(data)
      // state:当前状态金实例；data -fsm。resolve（xxx）
      data.succesList.forEach(fn => fn())
    },
    onRejected: function (state, data) {
      data.failList.forEach(fn => fn())
    }
  }
})

class MyPromise {
  constructor(fn) {
    this.succesList = []
    this.failList = []

    fn(() => {
      fsm.resolve(this)
    }, () => {
      fsm.reject(this)
    })
  }
  then(succesFn, failFn) {
    console.log(succesFn)
    this.succesList.push(succesFn)
    this.failList.push(failFn)
  }
}

// test
function loadImg(src) {
  const promise = new MyPromise(function (resolve, reject) {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject()
    }
    img.src = src
  })
  return promise
}

let src = 'http://ww2.sinaimg.cn/mw690/68f74d54jw8f22cfa95ijj20ku0kumy7.jpg'

let result = loadImg(src)

result.then(function () {
  console.log('ok')
}, function () {
  console.log('fail')
})

result.then(function () {
  console.log('ok2')
}, function () {
  console.log('fail2')
})