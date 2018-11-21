import { addClass, removeClass } from 'front/src/common/utils/classname-utils'
import { getElementTop } from 'front/src/common/utils/style-utils'

const BUFFER = 50

const DEFAULT_CONFIG = {
  'activeClassName': 'active',
  'menuItemsDom': null,
  'contentItemsDom': null
}

class Scrollspy {
  constructor(config) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config)
    this.contentItems = [].slice.call(this.config.contentItemsDom)
    this.menuItems = [].slice.call(this.config.menuItemsDom)
  }

  _bindWinScroll() {
    window.addEventListener('scroll', this._handleScroll.bind(this), false)
  }

  _handleScroll(e) {
    let top = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop
    let currentAnchor = ''
    this.contentItems.every((item) => {
      let itemTop = getElementTop(item)
      if (top > itemTop - BUFFER) {
        currentAnchor = item.dataset.anchor
        return true
      } else {
        return false
      }
    })
    this._checkedCurrentMenuItem(currentAnchor)
  }

  _checkedCurrentMenuItem(currentAnchor) {
    this.menuItems.forEach((el) => {
      let href = decodeURI(el.href).split('#')
      if (href[href.length - 1] !== currentAnchor) {
        removeClass(el, this.config.activeClassName)
      } else {
        addClass(el, this.config.activeClassName)
      }
    })
  }

  init() {
    this._bindWinScroll()
  }

}

export default Scrollspy