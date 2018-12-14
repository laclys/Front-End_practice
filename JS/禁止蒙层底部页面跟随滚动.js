// 禁止蒙层底部页面跟随滚动

let bodyEl = document.body
let toTop = 0

const stopBodyScroll = (isFixed) => {
  if (isFixed) {
    toTop = window.scrollY
    bodyEl.style.position = 'fixed'
    bodyEl.style.top = -toTop + 'px'
  } else {
    bodyEl.style.position = ''
    bodyEl.style.top = ''

    window.scrollTo(0, toTop) // 回到原先的top
  }
}