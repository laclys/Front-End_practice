const {StringDecoder} =require('string_decoder')

const decoder = new StringDecoder('utf8')

const buf = Buffer.from('中文字符串哈哈哈')

for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.allocUnsafe(5)
  buf.copy(b, 0, i)

  console.log(decoder.write(b))
}