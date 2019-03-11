/*
 * @Author: Lac 
 * @Date: 2019-03-12 01:02:03 
 * @Last Modified by: Lac
 * @Last Modified time: 2019-03-12 01:04:29
 */

// react-errorBoundary

import React, { Component } from 'react'

export default (message = '出错啦!') => (TargetComponent) => {

  class ErrorBoundary extends Component {

    constructor (props) {
      super(props)
      this.state = {
        hasError: false,
        error: null,
        info: null
      }
    }
    
    componentDidCatch (error, info) {
      this.setState({
        hasError: true,
        error,
        info
      })
    }

    render () {
      const { hasError } = this.state

      if (hasError) {
        return (
          <div className='error-boundary'>
            <p className='error-boundary-message'>
              { message }
            </p>
            { this.renderError() }
            { this.renderComponentStack() }
          </div>
        )
      }

      return (
        <TargetComponent { ...this.props } />
      )
    }

    renderError () {
      const { error } = this.state

      if (!error) {
        return null
      }

      return (
        <div className='error-boundary-info'>
          <h6>Error Stack:</h6>
          <div>
            {
              error.stack.split('\n').map((line, index) => {
                return (
                  <p key={ index }>{ line }</p>
                )
              })
            }
          </div>
        </div>
      )
    }

    renderComponentStack() {
      const { info } = this.state

      if (!info || !info.componentStack) {
        return null
      }

      return (
        <div className='error-boundary-info'>
          <h6>ErrorInfo componentStack:</h6>
          <div>
            {
              info.componentStack.split('\n').map((line, index) => {
                return (
                  <p key={ index }>{ line }</p>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
  return ErrorBoundary
}
