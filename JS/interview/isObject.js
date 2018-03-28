function isObj (value) {
  if (Object.prototype.toString.call(value) === '[object Array]') {
    console.log(`${value}是数组`)
  } else if (Object.prototype.toString.call(value) === '[object Object]') {
    console.log(`${value}是对象`)
  } else {
    console.log('其他')
  }
}

isObj([1, 2, 3])
