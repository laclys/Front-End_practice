//ref: https://zh.javascript.info/custom-elements

class LiveTimer extends HTMLElement {
  constructor() {
    super()
    // 元素在这里创建
  }

  render() {
    this.innerHTML = `<time-formatted class="timer" hour="numeric" minute="numeric" second="numeric"/>`
    this.timerEle = this.getElementsByClassName('timer')?.[0]
  }

  // 在元素被添加到文档之后，浏览器会调用这个方法
  connectedCallback() {
    if (!this.rendered) {
      this.render()
      this.rendered = true
    }
    this.timer = setInterval(() => {
      this.date = new Date()
      // console.log('timerEle', this.timerEle)
      this.timerEle.setAttribute('datetime', this.date)
    }, 1000)
  }

  // 在元素从文档移除的时候，浏览器会调用这个方法
  disconnectedCallback() {
    clearInterval(this.timer)
  }
}

customElements.define('live-timer', LiveTimer)
