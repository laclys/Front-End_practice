### JS Array拾遗

- 用splice截取数组，原数组会发生变化，可用来删除数组中的元素

```javascript
var b1 = [1,2,3,4,5];
var b2 = b1.splice(3,3); // 将b1数组中的从索引3开始截取最多3个元素，然后将截取的子数组赋值给b2
console.log(b1); // [ 1, 2, 3 ] b1数组会发生改变，截去splice的部分
console.log(b2); // [ 4, 5 ] b2数组获取splice(3,3)截取的子数组

```

- ES6 创建数组的两个API

Array.of

返回由所有参数值组成的数组，如果没有参数，就返回一个空数组

```javascript
var a = Array.of(1,2,3,4,5) // [1,2,3,4,5]
var b = Array.of(7) // [7]

```
Array.from

定义：用于将两类对象转为真正的数组（不改变原对象，返回新的数组）。
参数：
第一个参数(必需):要转化为真正数组的对象。
第二个参数(可选): 类似数组的map方法，对每个元素进行处理，将处理后的值放入返回的数组。
第三个参数(可选): 用来绑定this。

```javascript
// 类数组是索引是 0 1 2 3... 并且有length属性的对象
let obj = {0: 'a', 1: 'b', 2:'c', length: 3};
let arr = Array.from(obj); // ['a','b','c'];

```
- splice
`splice`有多个元素， 第一个固定为索引，删除或者添加的位置。第二个是删除的元素个数，是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。第三个之后则是添加进数组的元素
```javascript
// 类数组是索引是 0 1 2 3... 并且有length属性的对象
var d = ['a','b','c']
d.splice(3,0,4); // splice有3个元素， 第一个是索引，删除或者添加的位置， 第二个是删除的元素个数，第三个是添加的元素
console.log(d); // [ 'a', 'b', 'c', 4 ]
```

- slice
slice(start,end)获取原数组的部分作为子数组返回，原数组不发生改变。截取的时候遵循左闭右开原则。
```javascript
var a = [1,2,3,4,5,6,7];
var b = a.slice(0,5); // 包含start，不包含end 左闭右开
console.log(a); // [ 1, 2, 3, 4, 5, 6, 7 ] 原数组不发生改变
console.log(b); // [ 1, 2, 3, 4, 5 ]

```

- reduce

求元素出现次数
```javascript
var words = ["apple","hello","orange","apple"]

var wordsCount = function(prev, next) {
  prev[next] = (prev[next] + 1) || 1
  return prev
}

var obj = words.reduce(wordsCount, {})
console.log(obj) // { apple: 2, hello: 1, orange: 1 }
```

reduce(callback,initiaValue)会传入两个变量，回调函数(callback)和初始值(initiaValue)。如果不设置初始值，则第一次执行的时候，callback的第一个参数是数组的第一个元素，第二个参数是数组的第二个元素。有初始值则prev为初始值，next为数组第一个元素。

- 数组去重
```javascript
// set
Array.from(new Set(arr))

// reduce

function compare(num1, num2) {
  return num1 - num2
}

var res = arr.reduce(function(init, current){
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current)
  }
  return init
}, [])

// filter

arr.filter((item, index, arr) => {
  return arr.indexOf(item) === index
})

```