const {basename, dirname, extname, parse} =require('path')

const filePath = '/usr/local/bin/no.txt'

console.log(basename(filePath)) // 文件名 no.txt
console.log(dirname(filePath)) // 路径名 /usr/local/bin/
console.log(extname(filePath)) // 扩展名 .txt

console.log(parse(filePath)) //解析路径所有属性组合