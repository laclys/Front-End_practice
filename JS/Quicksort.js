/*
 * @Author: Lac 
 * @Date: 2019-03-11 15:27:44 
 * @Last Modified by: Lac
 * @Last Modified time: 2019-03-11 15:47:50
 */


// Quicksort 复习 (粗暴版本)

function Quicksort(arr) {
  if (arr.length < 2) {
    return arr.slice()
  }

  var pivot = arr[Math.floor(Math.random * arr.length)]
  var left = []
  var middle = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i]
    if (val < pivot) {
      left.push(val)
    }
    if (val === pivot) {
      middle.push(val)
    }
    if (val > pivot) {
      right.push(val)
    }
  }
  return Quicksort(left).concat(middle, Quicksort(right))
}

// 优雅版本
function Quicksort2(arr, comparator = (a, b) => a - b) {
  return partition(arr, comparator)
}
function partition(arr, comparator, start = 0, end = arr.length - 1, ) {
  if (start >= end) {
    return
  }

  var pivotIndex = Math.floor(Math.random() * (end - start + 1) + start)
  var pivot = arr[pivotIndex]

  swap(arr, pivotIndex, end)

  for (var i = start - 1, j = start; j < end; j++) {
    if (comparator(arr[j], pivot) < 0) {
      i++
      swap(arr, i, j)
    }
  }

  swap(arr, i + 1, end)
  partition(arr, comparator, start, i)
  partition(arr, comparator, i + 2, end)
  return arr
}
