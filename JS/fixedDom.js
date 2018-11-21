import { getStyle, setStyle } from '../../utils/style-utils.js'
import { addClass, removeClass  } from 'front/src/common/utils/classname-utils'

const DEFAULT_CONFIG = {
  'target': null,
  'fixedClassName': 'fixed',
  'fixedStyle': {},
  'fixedBound': () => {},
  'throttle': 0
}

class FixedDOM {
  constructor(config) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config)
    this.targetDom = this.config.target
    let fixedStyle = this.config.fixedStyle
    let { left } = this.targetDom.getBoundingClientRect()
    this.throttle = this.config.throttle
    this.fixedTop = fixedStyle.top ? fixedStyle.top.slice(0, -2) : 0
    this.targetLeft = left + 'px'
    this.initStyle = getStyle(this.targetDom) || {}
    this.addStyle = Object.assign({
      position: 'fixed',
      left: this.targetLeft,
    }, fixedStyle)
  }

  bindScroll() {
    window.addEventListener('scroll', this._throttle(this._fixedToggle.bind(this), this.throttle))
  }

  _fixedToggle() {
    let scroll = Math.max(document.body.scrollTop || document.documentElement.scrollTop)
    let fixedBound = typeof(this.config.fixedBound) === 'function' ? 
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
    let styleObj = Object.assign(styleTemp, this.addStyle)
    setStyle(this.targetDom, styleObj)
  }

  _clearStyle() {
    setStyle(this.targetDom, this.initStyle)
  }

  _addClass () {
    addClass(this.targetDom, this.config.fixedClassName)
  }

  _removeClass () {
    removeClass(this.targetDom, this.config.fixedClassName)
  }

  _throttle(fn, interval=100) {
    let flag = true
    return function () {
      if (!flag) return
      flag = false
      setTimeout(() => {
        fn.apply(this, arguments)
        flag = true
      }, interval)
    }
  }
}

export default FixedDOM