// 迭代器模式： 顺序访问一个集合； 使用者无需知道集合的内部构造（封装）

class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }
  next() {
    if(this.hasNext()) {
      return this.list[this.index++]
    }
    return null
  }
  hasNext() {
    return this.list.length > this.index
  }
}

class Container {
  constructor(list) {
    this.list = list
  }
  getIterator() {
    return new Iterator(this)
  }
}

// test
var arr = [1,2,3,4,5,6]
let container = new Container(arr)
let iterator = container.getIterator()

while(iterator.hasNext()) {
  console.log(iterator.next())
}