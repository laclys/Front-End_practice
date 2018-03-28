const express = require('express')
const Router = express.Router()
const model = require('../model/model')
const Order = model.getModel('cardOrder')
const multer = require('multer')
const upload = multer()
const sendEmail = require('../helper/sendEmail')

// Order.remove({}, function (e, d) {})

// Hello skywalker
Router.get('/luke', (req, res) => {
  res.send('<h1>May the Force be with you!</h1>')
})

// show all data
Router.get('/all-list', (req, res) => {
  Order.find({})
    .sort({'create_time': -1})
    .then(doc => {
      res.json({code: 0, data: doc})
    })
    .catch(err => res.json({code: 1, msg: err}))
})

// show selected data
Router.get('/id', (req, res) => {
  const {order_id} = req.query
  Order.find({_id: order_id})
    .sort({'create_time': -1})
    .then(doc => {
      res.json({code: 0, data: doc})
    })
    .catch(err => res.json({code: 1, msg: err}))
})

// save order data
Router.post('/buy', upload.array(), (req, res) => {
  const {user_phone, postcard_src, postcard_back_no, postcard_num, buyer_name, buyer_adr, adr_phonenum, price} = req.body
  let postcardArray = postcard_src.split(';')
  console.log(postcardArray)
  const orderModel = new Order({user_phone, postcard_array: postcardArray, postcard_back_no, postcard_num, buyer_name, buyer_adr, adr_phonenum, price})
  orderModel.save((err, doc) => {
    if (err) return res.json({code: 1, msg: '后端出错了'})
    sendEmail(doc)
    return res.json({code: 0})
  })
})

module.exports = Router
