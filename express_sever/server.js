var multer = require('multer');//接收图片
var fs = require("fs");//操作文件
const express = require('express')
const bodyParser = require('body-parser')
const model = require('./model')
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
const User = model.getModel('user')

var upload = multer({
  dest: './uploads'
});//定义图片上传的临时目录


//新建app
const app = express()
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/',function (req, res) {
  res.send('<h1>Hello world</h1>')
})

app.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    return res.json({code: 0, data: doc})
  })
})



// app.post('/send', function(req, res) {
//   const {phonenum, pic, text} = req.body
//   const userModel = new User({phonenum, pic, text})
//   userModel.save(function(err, doc) {
//     if (err) {
//       return res.json({code: 1, msg: 'error!!!'})
//     }
//     return res.json({
//       code: 0,
//       data: doc
//     })
//   })
// })

app.post('/getpicUri', function(req, res) {
  console.log(req.body, req.files);
  return res.json({
    code: 10
  })
})
// fs.unlink('./uploads/22010181.png', function(err) {

// })
app.post('/upload', upload.single('imageFile'), function(req, res, next) {
  console.log(req.body)
  console.log(req.file)
  fs.rename(req.file.path, "uploads/" + req.file.originalname, function(err) {
    if (err) {
      console.log(err)
    }
    console.log('上传成功!');
})
  // fs.rename(req.file.path, "upload/" + req.file.originalname, function(err) {
  //     if (err) {
  //         throw err;
  //     }
  //     console.log('上传成功!');
  // })
  // res.writeHead(200, {
  //     "Access-Control-Allow-Origin": "*"
  // });
  // res.end(JSON.stringify(req.file)+JSON.stringify(req.body));
  res.json({})
})


app.listen(9093, function () {
  console.log('Node app start at 9093')
})