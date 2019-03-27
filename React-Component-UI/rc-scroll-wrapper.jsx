/**
 * React 滚动对象
 * 提供 onTop, onBottom 两个回调
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'


@autobind
class Scroll extends Component {

  static propTypes = {
    disabled: PropTypes.bool, // 是否禁用
    limit: PropTypes.number, // 时间 limit
    distance: PropTypes.number, // 距离top/bottom 的阈值, 小于这个阈值将触发相应的回调
    onTop: PropTypes.func,
    onBottom: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    limit: 30,
    distance: 50,
    onTop: () => {},
    onBottom: () => {}
  }

  onWheel = () => {
    const { disabled } = this.props;
    if (disabled) {
      return false
    }
    if (this.timer) {
      this.stopTimer()
    }
    this.startTimer()
  }

  startTimer = () => {
    const { limit, distance, onTop, onBottom } = this.props;
    this.timer = setTimeout(() => {
      const scrollY = this.scroll.scrollTop;
      const scrollHeight = this.scroll.scrollHeight;
      const selfHeight = this.scroll.offsetHeight;
      // on top
      if (scrollY <= distance) {
        onTop(this.scroll, scrollY)
      } else if (scrollHeight - (scrollY + selfHeight) <= distance) {
        // on bottom
        onBottom(this.scroll, scrollY)
      }
    }, limit)
  }

  stopTimer = () => {
    clearTimeout(this.timer)
    this.timer = null;
  }

  render () {
    return (
      <div className='scroll'
        ref={(el) => { this.scroll = el }}
        onWheel={ this.onWheel }>
        { this.props.children }
      </div>
    )
  }
}

export default Scroll