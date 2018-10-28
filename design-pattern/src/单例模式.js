// 单例模式 一个类只有一个实例  (JS没有private关键字，不能避免他人去new，无法控制)
class SingleObject {
  login() {
    console.log('login...')
  }
}

SingleObject.getInstance = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

// test
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log(`obj1 === obj2`, obj1 === obj2)