/**
 * model层
 */
const mongoose = require('mongoose')

const models = {
  postcard: {
    'user_phone': {
      type: String,
      require: true
    },
    'pic': {
      type: String,
      require: true
    },
    'postcard_pic': {
      type: String,
      require: true
    },
    'content': {
      type: String,
      default: ''
    },
    'place_name': {
      type: String,
      default: ''
    },
    'place_length': {
      type: String,
      default: ''
    },
    'place_axis': {
      type: String,
      default: ''
    },
    'weather': {
      type: String,
      default: ''
    },
    'weather_icon': {
      type: String,
      default: ''
    },
    'edit_time': {
      type: String,
      default: ''
    },
    'create_time': {
      type: Number,
      default: new Date().getTime()
    },
    'is_delete': {
      type: Boolean,
      default: false
    }
  },
  cardOrder: {
    'user_phone': {
      type: String,
      require: true
    },
    'postcard_array': {
      type: Array,
      require: true
    },
    'postcard_back_no': {
      type: String,
      require: true
    },
    'postcard_num': {
      type: String,
      require: true
    },
    'buyer_name': {
      type: String,
      require: true
    },
    'buyer_adr': {
      type: String,
      require: true
    },
    'adr_phonenum': {
      type: String,
      require: true
    },
    'price': {
      type: String,
      require: true
    },
    'create_time': {
      type: Number,
      default: new Date().getTime()
    },
    'note': {
      type: String,
      default: ' '
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
