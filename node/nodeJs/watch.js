
// 监视文件变化
const fs = require('fs')

fs.watch('./', {
  recursive: true   // 循环递归
}, (eventType, filename) => {
  console.log(eventType, filename)
})