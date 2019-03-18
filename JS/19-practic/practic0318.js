//请实现如下函数，可以批量请求数据,所有的 url 地址在 urls 参数中，
// 同时可以通过 max 参数控制请求的并发数，当所有请求结束之后，
// 需要执行 callback 回调函数，发送请求的函数可以直接使用 fetch 即可

let bodyElement = document.body
let urls = [
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2580986389,1527418707&fm=27&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1995874357,4132437942&fm=27&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2640393967,721831803&fm=27&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1548525155,1032715394&fm=27&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2434600655,2612296260&fm=27&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2160840192,133594931&fm=27&gp=0.jpg'
]
let max = 4
let callback = () => {
  console.log('所有请求完成了')
}
// 定义一个分组函数 已 max 为最大个数存储在一个对象中
let group = (urls, max) => {
  let groupObj = {}
  
  urls.forEach((item, index) => {
    let group = parseInt(index / max)
    if (groupObj[group]) {
      return groupObj[group].push(item)
    }
    groupObj[group] = [item]
  })
  
  return groupObj
}

/**
 * 
 * @param urls string Array
 * @param max number
 * @param callback () => void
 */
function sendRequest(urls, max, callback) {
  let groupResult = group(urls, max)
  let currentIndex = 0
  // 使用 fetch 封装请求
  let getFetch = source => {
    return source.map(item => fetch(item).then(res => res.blob()))
  }
  let send = () => {
    groupResult[currentIndex] &&
    Promise.all(getFetch(groupResult[currentIndex]))
      .then((body) => {
        callback()
        currentIndex++
        console.log(body, `第${currentIndex}次批量请求成功`)
        
        let html = ''
        
        body.forEach(item => {
          html += `<img src=${URL.createObjectURL(item)} />`
        })
        bodyElement.innerHTML += html
        
        // 用延时器是因为反应接口太快 以便于观察
        setTimeout(() => {
          send()
        }, 1000)
      })
      .catch((err) => {
        console.log('error')
      })
  }

  send()
}

sendRequest(urls, max, callback)
