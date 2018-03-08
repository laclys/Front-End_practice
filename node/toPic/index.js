const fs = require('fs')

const gm = require('gm')

// test.jpg 600*600 1.jpg 140*140

var _name = "China中文";

gm('./test.jpg')
  .draw('image Over 460, 460, 140, 140 "./1.jpg"')
  .drawText(100, 100, '哇')
  .fontSize(36)
  .font('./font/微软雅黑.ttf')
  .write(`./output/${Date.now()}.jpg`, function(err) {
    if (!err) {console.log('done')}else{
      console.log(err.message || "出错了！");
    }
    
  })