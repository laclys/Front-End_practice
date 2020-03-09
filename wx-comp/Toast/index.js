/*
显示toast提示:
title:    提示的内容 必填
icon:     图标，//请指定正确的路径，选填
duration: 提示的延迟时间，单位毫秒，默认：1500
cb:       接口调用成功的回调函数 选填

usage:
// wxml
<Toast id='toast' />

// js
this.toast = this.selectComponent("#toast")
this.toast.showToast({
  title: 'XXXX',
  duration: 1500，
  cb: () => {}
})
this.toast.hideToast()
 */


Component({
  data: {
    toastObj: {}
  },

  methods: {
    showToast: function (obj) {
      if (this._showTimer) {
        clearTimeout(this._showTimer)
      }
      if (typeof obj === 'object' && obj.title) {
        if (!obj.duration || typeof obj.duration != 'number') {
          obj.duration = 1500 // toast默认显示1.5s
        }
        obj.isShow = true
        this.setData({
          toastObj: obj
        })
        this._showTimer = setTimeout(() => {
          obj.isShow = false
          obj.cb && typeof obj.cb == 'function' && obj.cb()
          console.log(12312, this.data.toastObj)
          this.setData({
            'toastObj.isShow': obj.isShow
          })
        }, obj.duration)

      } else {
        console.info(`showToast fail:请确保传入的是对象并且title必填!`)
      }
    },

    hideToast: function () {
      if (this._showTimer) {
        clearTimeout(this._showTimer)
      }
      this.setData({
        'toastObj.isShow': false
      })
    }
  }
})
