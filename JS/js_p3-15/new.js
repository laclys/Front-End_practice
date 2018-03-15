/**
 * new2 new关键字的代码实现演示
 * @param {function} func 被new的类 (构造函数)
 */
function new2(func) {
  // 创建了一个实例对象 o，并且这个对象__proto__指向func这个类的原型对象 
  let o = Object.create(func.prototype); 
  // (在构造函数中this指向当前实例)让这个类作为普通函数值行 并且里面this为实例对象 
  let k = func.call(o);
  // 最后再将实例对象返回 如果你在类中显示指定返回值k，
  // 注意如果返回的是引用类型则将默认返回的实例对象o替代掉
  return typeof k === 'object' ? k : o;
}

// 实验
function M() { // 即将被new的类
  this.name = 'liwenli';
}

let m = new2(M); // 等价于 new M 这里只是模拟
console.log(m instanceof M); // instanceof 检测实例
console.log(m instanceof Object);
console.log(m.__proto__.constructor === M)