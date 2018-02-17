console.log(Buffer.alloc(10))
console.log(Buffer.allocUnsafe(10))
console.log(Buffer.from([1,2,3]))
console.log(Buffer.from('test'))


console.log(Buffer.byteLength('张'))  // 一个中文占三个字节，不是偶数