const nodemailer = require('nodemailer')

const conf = require('../config/emailDefault')

const transporter = nodemailer.createTransport({
  service: conf.emailService,
  auth: {
    user: conf.emailAdr,
    pass: conf.emailPass // 授权码
  }
})

module.exports = function (orderData) {
  let postcardLink = ''
  orderData.postcard_array.forEach((result, index, arr) => {
    let tmp = `
    <div>(${index + 1}):
      <a href="${result}">
      ${result}
      </a>
    </div>
    `
    postcardLink = postcardLink + tmp
  })

  const mailOptions = {
    from: conf.emailAdr, // 发送者
    to: conf.emailAdr, // 接受者,可以同时发送多个,以逗号隔开
    subject: 'APP明信片订单', // 标题
    html: `
    <h2>APP明信片订单:</h2>
    <div>订单号: ${orderData._id}</div>
    <div>订单手机号: ${orderData.user_phone}</div>

    <div>时间: ${new Date(orderData.create_time)}</div>
    <div>正面:
      ${postcardLink}
    </div>
    <div>背面:编号${orderData.postcard_back_no}
    </div>
    <div>数量:${orderData.postcard_num}</div>
    <h3>收件地址:</h3>
    <div>收件人: ${orderData.buyer_name}</div>
    <div>收件电话: ${orderData.adr_phonenum}</div>
    <div>收件地址: ${orderData.buyer_adr}</div>
    <h3>总价: ${orderData.price}</h3>
      `
  }
  sendMailAsync(mailOptions)
  .then(info => {
    console.log('发送成功')
    // console.log(info)
  })
  .catch(err => {
    console.log(err)
  })
}

function sendMailAsync (mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) reject(err)
      else resolve(info)
    })
  })
}
