const express = require('express')
const multer = require('multer')
const fs = require('fs')
const Router = express.Router()
const model = require('../model/model')
const Postcard = model.getModel('postcard')

// 定义图片上传的临时目录
const upload = multer({dest: './uploads'})

const cpUpload = upload.fields([{ name: 'imageFile', maxCount: 1 }, { name: 'postcardFile', maxCount: 1 }])

// 上传又拍云
const upyun = require('node-upyun-sdk')
const instance = upyun('mobile-app', 'zhangyangyang', 'uniqueway')

// Postcard.remove({}, function (e, d) {})

// Hello skywalker
Router.get('/luke', (req, res) => {
  res.send('<h1>May the Force be with you!</h1>')
})

// show all data
Router.get('/all-list', (req, res) => {
  Postcard.find({})
    .sort({'create_time': -1})
    .then(doc => {
      res.json({code: 0, data: doc})
    })
    .catch(err => res.json({code: 1, msg: err}))
})

// delete one data by user_id
Router.get('/delete-pic', (req, res) => {
  const {user_id} = req.query
  Postcard.update({_id: user_id}, {is_delete: true})
    .then(doc => {
      res.json({code: 0, data: doc})
    })
    .catch(err => {
      res.json({code: 1, msg: err})
    })
})

// show selected data
Router.get('/user-data-list', (req, res) => {
  const {user_phone} = req.query
  Postcard.find({user_phone, is_delete: false})
    .sort({'create_time': -1})
    .then(doc => {
      res.json({code: 0, data: doc})
    })
    .catch(err => res.json({code: 1, msg: err}))
})

// show selected data by phone num and postcard_pic
Router.get('/user-have-postcardpic-list', (req, res) => {
  const {user_phone} = req.query
  Postcard.find({user_phone, is_delete: false, postcard_pic: {'$exists': true}})
    .sort({'create_time': -1})
    .then(doc => {
      res.json({code: 0, data: doc})
    })
    .catch(err => res.json({code: 1, msg: err}))
})

// get a postcard data
Router.post('/get-postcard', cpUpload, (req, res) => {
  const {user_phone, content, place_name, place_length, place_axis, weather, weather_icon, edit_time, create_time} = req.body

  let timeStamp = new Date().getTime()
  let year = new Date().getFullYear()
  let mon = new Date().getMonth() + 1
  let day = new Date().getDate()
  const imageFile = req.files['imageFile'][0]
  const imageOriginalname = `show${timeStamp}.${imageFile.mimetype.split('/')[1]}`
  const postcardFile = req.files['postcardFile'][0]
  const postcardOriginalname = `postcard${timeStamp}.${postcardFile.mimetype.split('/')[1]}`

  try {
    fs.renameSync(imageFile.path, `uploads/${imageOriginalname}`)
    fs.renameSync(postcardFile.path, `uploads/${postcardOriginalname}`)
  } catch (err) {
    res.json({code: 1, msg: err})
  }

  // 图片上传
  instance.upload(`/postcard_img/${year}/${mon}/${day}/`, `uploads/`)
    .then(() => {
      console.log('upload success')
      try {
        fs.unlinkSync(`uploads/${imageOriginalname}`)
        fs.unlinkSync(`uploads/${postcardOriginalname}`)
        let pic = `https://mobile-app.uniqueway.com/postcard_img/${year}/${mon}/${day}/${imageOriginalname}`
        let postcard_pic = `https://mobile-app.uniqueway.com/postcard_img/${year}/${mon}/${day}/${postcardOriginalname}`
        const postcardModel = new Postcard({user_phone, pic, content, place_name, place_length, place_axis, weather, weather_icon, edit_time, create_time, postcard_pic})
        postcardModel.save((err, doc) => {
          if (err) return res.json({code: 1, msg: '后端出错了'})
          return res.json({code: 0})
        })
      } catch (err) {
        res.json({code: 1, msg: err})
      }
    })
})

module.exports = Router
