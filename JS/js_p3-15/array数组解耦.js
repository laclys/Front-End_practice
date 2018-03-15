// 将[[1, 2], 3, [[[4], 5]]] 展平为 [1, 2, 3, 4, 5]

let arr = [[1, 2], 3, [[[4], 5]]]

function flatten(arr) {
  return [].concat(
    ...arr.map(x => Array.isArray(x) ? flatten(x) : x)
  )
}