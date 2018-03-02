
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: '126',
  auth: {
    user: 'laclys@126.com',
    pass: 'z421084802' // 授权码

  }
})

const mailOptions = {
  from: 'laclys@126.com', // 发送者
  to: 'laclys@126.com', // 接受者,可以同时发送多个,以逗号隔开
  subject: '通过nodemailer邮件发送', // 标题
  html: `
  <h2>nodemailer基本使用:</h2>
  <h3>
    <a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">
    http://blog.csdn.net/zzwwjjdj1/article/details/51878392</a>
  </h3>
    `
}

// transporter.sendMail(mailOptions, function (err, info) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('发送成功')
// })

function sendMailAsync (mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) reject(err)
      else resolve(info)
    })
  })
}

sendMailAsync(mailOptions)
  .then(info => {
    console.log('发送成功')
    console.log(info)
  })
  .catch(err => {
    console.log(err)
  })
