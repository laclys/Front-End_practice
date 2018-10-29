// core-decorators: 提供常用的装饰器
import { deprecate } from 'core-decorators'

class Person {

  @deprecate('即将废弃')
  name() {
    return 'Bill'
  }
}

let p = new Person()
p.name()