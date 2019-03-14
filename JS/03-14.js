
let arr = [
  [
    ['1-7', '2-6'],
    '4-6',
    [
      ['2-0', '1-4'],
      ['3-9'],
      '4-5',
    ],
  ]
]
// arr flat
const flat = (arr) => [].concat(...arr.map(item => Array.isArray(item) ? flat(item) : item))

// arr flat by toString
const flat2 = (arr) => arr.toString().split(',')

// '1-7' => 1 * 7 = 7
const calc = (arr) => arr.map(item => item.split('-')[0] * item.split('-')[1])

// soft && reduce
const sortAndReduce = (arr) => {
  let tmepArr = [...new Set(arr)]
  return soft(tmepArr)
}

const soft = (arr) => {
  if (tmepArr.length < 2) return arr.slice()
  var pivot = arr[Math.floor(arr.length * Math.random)]
  var left = []
  var middle = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i]
    if (val < pivot) {
      left.push(val)
    }
    if (val = pivot) {
      middle.push(val)
    }
    if (val > pivot) {
      right.push(val)
    }
  }
  return soft(left).concat(middle, soft(right))
}