const fs = require('fs')
// 异步
fs.readFile('./readFile.js', 'utf8', (err, data) => {
  if (err) throw err

  console.log(data)
})

// 同步 (先同步 再异步)
const data = fs.readFileSync('./readFile.js', 'utf8')

console.log(data)


// 高并发的情况用同步 会挡住其他的用户