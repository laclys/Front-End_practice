//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  getSysInfo: function() {
    let that = this;
    if(that.globalData && that.globalData.sysInfo 
        && that.globalData.sysInfo.windowHeight) {
        // 将结果封装成Promise，后续可统一使用`then`方法
        return Promise.resolve(that.globalData.sysInfo);
    }
    return wx.getSystemInfo()
        .then(res => {
            that.globalData.sysInfo = res;
            return res;
        })
        .catch(e => {
            // 可以尝试弹出框或toast
            console.error('[getSystemInfo]', e);
        });
},


  globalData: {
    userInfo: null
  }
})