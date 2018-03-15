let obj1 = {id: 1}

Object._create = (o) => {
  let Fn = function() {}
  Fn.prototype = o
  return new Fn
}

let obj2 = Object._create(obj1)
console.log(obj2.__proto === obj1)  //true
console.log(obj2.id)  //1
