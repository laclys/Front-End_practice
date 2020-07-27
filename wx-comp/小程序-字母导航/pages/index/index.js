//index.js
//获取应用实例
const app = getApp()

const LEFT = ["A", "B", "C", "D", "E", "F", "G"]

const CONTENT = [
  {
    group: "A",
    name: "阿里"
  },
  {
    group: "A",
    name: "阿克苏"
  },
  {
    group: "A",
    name: "阿勒泰"
  },
  {
    group: "A",
    name: "安顺"
  },
  {
    group: "B",
    name: "白城"
  },
  {
    group: "B",
    name: "毕节"
  },
  {
    group: "B",
    name: "北海"
  },
  {
    group: "C",
    name: "长沙"
  },
  {
    group: "C",
    name: "常德"
  },
  {
    group: "C",
    name: "长春"
  },
  {
    group: "C",
    name: "朝阳"
  },
  {
    group: "C",
    name: "承德"
  },
  {
    group: "D",
    name: "大连"
  },
  {
    group: "D",
    name: "大理"
  },
  {
    group: "D",
    name: "丹东"
  },
  {
    group: "D",
    name: "敦煌"
  },
  {
    group: "D",
    name: "稻城"
  },
  {
    group: "D",
    name: "稻城"
  },
  {
    group: "E",
    name: "鄂尔多斯"
  },
  {
    group: "F",
    name: "佛山"
  },
  {
    group: "F",
    name: "阜阳"
  },
  {
    group: "F",
    name: "福州"
  },
  {
    group: "G",
    name: "赣州"
  },
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    left: [],
    content: CONTENT
  },

  onLoad: function() {
    app.getSysInfo().then(sysInfo => {
      console.log('sysInfo', sysInfo.windowHeight)
      this.setData({
        left: this.formatLeftData(),
        windowHeight: sysInfo.windowHeight
      })
    })
    console.log('this.formatLeftData()', this.formatLeftData())
  },

  scroll: function (e) {
    console.log(e)
    this.setData({
      intoindex: e.currentTarget.dataset.key.name
    })
  },

  scrollContent: function (e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
  },

  formatLeftData: function() {
    let prev = 0
    let sum = 0
    return LEFT.map(item => {
      let counts = CONTENT.filter(j => j.group === item).length
      prev = sum
      sum = sum + counts * 104
      return {
        name: item,
        counts,
        regions: [prev, sum]
      }
    })
  }
})