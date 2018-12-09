import React from 'react'
import {
  unstable_renderSubtreeIntoContainer,
  unmountComponentAtNode
} from 'react-dom'

import './Dialog.css'

class Dialog extends React.Component {

  componentDidMount() {
    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)

    this.renderPortal(this.props)
  }

  componentDidUpdate() {
    this.renderPortal(this.props)
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.node)
    window.document.body.removeChild(this.node)
  }

  renderPortal(props) {
    unstable_renderSubtreeIntoContainer(
      this, // 当前组件
      <div className="dialog" >
        { props.children }
      </div>,
      this.node
    )
  }

  render() {
    return null
  }
}

export default Dialog