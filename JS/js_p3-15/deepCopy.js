function deepCopy (obj) {
  if (typeof obj !== 'object') return obj
  if (typeof window !== 'undefined' && window.JSON) { // 浏览器环境并支持window.JSON ,则使用JSON
    return JSON.parse(JSON.stringify(obj))
  } else {
    let newObj = obj.constructor ===Array ? [] : {}
    for (let key in obj) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
    return newObj
  }
}


let obj = {a: 1, b: [12]};
let newObj = deepCopy(obj);
newObj.b[1] = 100;
console.log(obj);
console.log(newObj);