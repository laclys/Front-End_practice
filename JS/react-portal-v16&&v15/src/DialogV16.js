// React V16 对Portal有了更好地支持
import React from 'react'
import { createPortal } from 'react-dom'

import './Dialog.css'

class DialogV16 extends React.Component {
  constructor(props) {
    super(props)
    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node)
  }

  render() {
    return createPortal(
      <div className="dialog">
        {this.props.children}
      </div>, 
      this.node
    )
  }
}

export default DialogV16