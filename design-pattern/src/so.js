
// SO:
// 单一职责原则： 每个then中的逻辑制作好一件事

// 开放封闭原则： 如果新增需求，扩展then

// 对扩展开放 对修改封闭

function loadImg(src) {
  let promise = new Promise(function (resolve, reject) {
    let img = document.createElement('img')
    img.onload = function () {
      console.log(111)
      resolve(img)
    }
    img.onerror = function () {
      reject('error')
    }
    img.src = src
  })
  return promise
}

let src = 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511811355.webp'
let result = loadImg(src)
result.then(function (img) {
  console.log(img)
  alert(`width ${img.width}`)
  return img
}).then(function (img) {
  alert(`height ${img.height}`)
}).catch(function (err) {
  console.log(err)
})