const fs = require('fs')

const gm = require('gm')

// test.jpg 600*600 1.jpg 140*140


gm('./test.jpg')
  .draw('image Over 460, 460, 140, 140 "./1.jpg"')
  
  .write(`./output/${Date.now()}.jpg`, function(err) {
    if (!err) {console.log('done')}
  })