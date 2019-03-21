// function machine() {
    
// }
// machine('ygy').execute() 
// // start ygy
// machine('ygy').do('eat').execute(); 
// // start ygy
// // ygy eat
// machine('ygy').wait(5).do('eat').execute();
// // start ygy
// // wait 5s（这里等待了5s）
// // ygy eat
// machine('ygy').waitFirst(5).do('eat').execute();
// // wait 5s
// // start ygy
// // ygy eat


function machine() {
  new Action()
}

const defer = (time, cb) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb())
    }, time * 1000)
  })
}

class QueueItem {
  constructor(defer, cb) {
    this.defer = defer
    this.cb = cb
  }
}

class Action {
  queue = []
  constructor(name) {
    this.name = name
    this.queue.push(new QueueItem(0, () => { console.log(`start ${ this.name }`) }))
  }

  do(eat) {
    this.queue.push(new QueueItem(0, () => { console.log(`${ this.name } ${ eat }`) }))
    return this
  }

  wait(time) {
    this.queue.push(new QueueItem(5, () => { console.log(`wait ${ time }s`) }))
    return this
  }

  waitFirst(time) {
    this.queue.unshift(new QueueItem(5, () => { console.log(`wait ${ time }s`) }))
    return this
  }

  async execute() {
    while(this.queue.length > 0) {
      const curItem = this.queue.shift()
      if (!curItem.defer) {
        curItem.cb()
        continue
      }
      await defer(curItem.defer, curItem.cb)
    }
  }
}