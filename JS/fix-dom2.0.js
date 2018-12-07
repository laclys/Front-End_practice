/*
 * @Author: Lac 
 * @Date: 2018-12-07 22:14:28 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-12-07 22:19:38
 */


// fix-dom2.0

const DEFAULT_CONFIG = {
  'target': null,
  'fixedClassName': 'fixed',
  'fixedStyle': {},
  'fixedBound': () => {},
  'throttleTimer': 30
}

class FixedDOM {
  constructor(config) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config)
    let {
      fixedStyle,
      target
    } = this.config
    this.targetDom = target
    this.fixedTop = fixedStyle.top ? fixedStyle.top.slice(0, -2) : 0

    this._bindWindowResize()
    this._bindScroll()
    this._setFixdStyle()
    return this
  }

  _setFixdStyle() {
    // 先清除fixed, 用于重新计算位置
    this._clearStyle()
    this._removeClass()

    let {
      left
    } = this.targetDom.getBoundingClientRect()
    let targetLeft = left + 'px'
    this.initStyle = getStyle(this.targetDom) || {}
    this.fixedStyle = Object.assign({
      left: targetLeft,
    }, this.config.fixedStyle)

    // 再重新加上 fixed
    this._fixedToggle()
  }

  _bindWindowResize() {
    let _throttle = throttle(this._setFixdStyle.bind(this), this.config.throttleTimer)
    window.addEventListener('resize', _throttle)
  }

  _bindScroll() {
    let _throttle = throttle(this._fixedToggle.bind(this), this.config.throttleTimer)
    window.addEventListener('scroll', _throttle)
    return this
  }

  _fixedToggle() {
    let scroll = Math.max(document.body.scrollTop || document.documentElement.scrollTop)
    let fixedBound = typeof (this.config.fixedBound) === 'function' ?
      this.config.fixedBound(this.targetDom) :
      parseInt(this.config.fixedBound, 10)

    let isFixed = scroll >= fixedBound - this.fixedTop
    if (isFixed) {
      this._setStyle()
      this._addClass()
    } else {
      this._clearStyle()
      this._removeClass()
    }
  }

  _setStyle() {
    let styleTemp = JSON.parse(JSON.stringify(this.initStyle))
    let styleObj = Object.assign({}, styleTemp, this.fixedStyle)
    setStyle(this.targetDom, styleObj)
  }

  _clearStyle() {
    setStyle(this.targetDom, this.initStyle)
  }

  _addClass() {
    addClass(this.targetDom, this.config.fixedClassName)
  }

  _removeClass() {
    removeClass(this.targetDom, this.config.fixedClassName)
  }

}

export default FixedDOM

//helper
function getStyle(el) {
  let styleObj = {}
  let styleAttr = el.getAttribute('style')
  if (!styleAttr) {
    return null
  }
  let tempArr = styleAttr.split(';').slice(0, -1)
  tempArr.forEach((item) => {
    let keyAndVal = item.split(': ')
    styleObj[camelize(keyAndVal[0])] = keyAndVal[1]
  })
  return styleObj
}

function setStyle(el, styleObj) {
  el.style = ''
  for (var key in styleObj) {
    el.style[key] = styleObj[key]
  }
  return el
}

function addClass(dom, cls) {
  if (!dom || dom.nodeType !== 1) {
    throw new Error(`error in addClass, dom must be a HtmlElement`)
    return false
  }

  let defaultCls = dom.className.split(' ')
  if (defaultCls.indexOf(cls) < 0) {
    dom.className = [...defaultCls, cls].join(' ')
  }
  return dom
}

function removeClass(dom, cls) {
  if (!dom || dom.nodeType !== 1) {
    throw new Error(`error in removeClass, dom must be a HtmlElement`)
    return false
  }

  let defaultCls = dom.className.split(' ')
  if (cls && defaultCls.length) {
    dom.className = defaultCls.filter((_cls) => {
      return _cls !== cls
    }).join(' ')
  }
}