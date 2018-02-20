const fs = require('fs')

const rs = fs.createReadStream('./readStream.js')

rs.pipe(process.stdout)