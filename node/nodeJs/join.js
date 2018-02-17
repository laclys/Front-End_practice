// 拼接文件路径（内部调用normalize）

const {join} = require('path')

console.log(join('/usr', 'local', 'bin/'))