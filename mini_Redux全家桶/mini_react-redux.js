/**
 * mini react-redux
 */
import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from './mini_Redux'

// connect 负责链接组件，给到redux里的数据放到组件的属性里
// 1. 负责接收一个组件，把state里的一些数据房间去，返回一个组件
// 2. 数据变化的时候，能够通知组件

// function写connect  高阶组件
// export function connect (mapStateToProps, mapDispatchToProps) {
//   return function (WrapComponent) {
//     return class ConnectComponent extends React.Component {

//     }
//   }
// }

// 箭头函数版
export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
  return class ConnectComponent extends React.Component {
    static contextTypes = {
      store: PropTypes.object
    }
    constructor (props,context) {
      super(props, context)
      this.state = {
        props: {}
      }
    }
    // 组件加载完成之后将mapStateToProps、mapDispatchToProps注入进去
    componentDidMount () {
      const {store} = this.context
      store.subscribe(() => this.update())
      this.update()
    }

    update () {
      // 获取mapStateToProps、mapDispatchToProps 放入props里
      const {store} = this.context
      const stateProps = mapStateToProps(store.getState())
      // 方法不能直接给 因为需要dispatch
      const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
      this.setState ({
        props: {
          ...this.stat.props,
          ...stateProps,
          ...dispatchProps
        }
      })
    }

    render () {
      return <WrapComponent {...this.state.props} />
    }
  }
}

// Provider,把store放到context里，所有子元素可以直接取到store
class Provider extends React.Component {

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {store: this.store}
  }

  constructor(props, context) {
    super (props, context)
    this.store = props.store
  }

  render () {
    return this.props.children
  }
}