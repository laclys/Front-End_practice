/**
 *  model层
 */
const mongoose = require('mongoose')
// 新建dbapi-test
const DB_URL = 'mongodb://127.0.0.1:27017/api-test'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
  console.log('mongo connect success')
})

const models = {
  user: {
    'phonenum': {
      type: String,
      require: true
    },
    'pic': {
      type: String,
      require: true
    },
    'text': {
      type: String
    }
  }
}
for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (params) {
    return mongoose.model(params)
  }
}