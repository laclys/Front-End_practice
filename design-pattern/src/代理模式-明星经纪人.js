// 代理模式 实例：
// 网页事件代理； Jq $.proxy; ES6 proxy

// 代理模式设计原则： 代理类和目标类分离，隔离开目标类和使用者   符合开放封闭原则


// 明星经纪人

let star = {
  name: 'Lac',
  age: 26,
  phone: '13023091'
}

let agent = new Proxy(star, {
  get: function(target, key) {
    if (key === 'phone') {
      return 'agent:000000'
    }
    if (key === 'price') {
      return 120000
    }
    return target[key]
  },
  set: function(target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        throw new Error('price is too low')
      } else {
        target[key] = val
        return true
      }
    }
  }
})


// test
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
// 报价
agent.customPrice = 150000

console.log(agent.customPrice)