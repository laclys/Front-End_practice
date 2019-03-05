/*
 * @Author: Lac 
 * @Date: 2019-03-05 16:31:54 
 * @Last Modified by: Lac
 * @Last Modified time: 2019-03-05 16:34:17
 */

/**
 * react-file-selector
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import uuid from 'uuid/v1'

class FileSelectComp extends Component {

  static propTypes = {
    className: PropTypes.string,
    multiple: PropTypes.bool,
    limit: PropTypes.number,
    accept: PropTypes.string,
    text: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    multiple: true,
    limit: 10,
    accept: 'image/*',
    text: '选择文件',
    onChange: (files) => {}
  }

  constructor (props) {
    super(props)
    this.state = {
      $UUID: uuid()
    }
  }

  onClick = () => {
    const el = this.fileInput
    if (!el) {
      return;
    }
    el.click()
  }

  onChange = (e) => {
    const { onChange } = this.props
    const files = e.target.files
    onChange(files)
    this.reset()
  }

  reset = () => {
    this.setState({
      uuid: uuid()
    })
  }

  render () {
    const { className, multiple, accept, text } = this.props
    return (
      <div className={ classnames('file-select-button', className) }
        onClick={ this.onClick }>
        <input type="file"
          multiple={ multiple }
          key={ this.state.$UUID }
          ref={(el) => this.fileInput = el}
          style={{ display: 'none' }}
          accept={ accept }
          onChange={ this.onChange } />
        { text }
      </div>
    )
  }

}

export default FileSelectComp