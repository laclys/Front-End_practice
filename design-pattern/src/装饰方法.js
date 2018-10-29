/* class Person {
  constructor() {
    this.first = 'a'
    this.last = 'b'
  }

  @readonly
  name() {
    return `${this.first} - ${this.last}`
  }

}

function readonly(target, name, descriptor) {
  console.log(target)
  console.log(name)
  console.log(descriptor)
  descriptor.writable = false
  return descriptor
}

let p = new Person()
console.log(p.name()) */

class Math {

  @log
  add(a, b) {
    return a + b
  }
}

function log(target, name, descriptor) {
  console.log(target)
  console.log(name)
  console.log(descriptor)
  let oldValue = descriptor.value
  descriptor.value = function() {
    console.log(`calling ${name} with`, arguments)
    return oldValue.apply(this, arguments)
  }
  return descriptor
}

let m = new Math()
m.add(2, 4)