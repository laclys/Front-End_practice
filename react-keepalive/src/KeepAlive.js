import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()
const withScope = WrappedComponent => props => (
  <Consumer>{keep => <WrappedComponent {...props} keep={keep} />}</Consumer>
)

export class AliveScope extends Component {
  nodes = {}
  state = {}

  keep = (id, children) =>
    new Promise(resolve =>
      this.setState(
        {
          [id]: { id, children }
        },
        () => resolve(this.nodes[id])
      )
    )

  render() {
    return (
      <Provider value={this.keep}>
        {this.props.children}
        {Object.values(this.state).map(({ id, children }) => (
          <div
            key={id}
            ref={node => {
              this.nodes[id] = node
            }}
          >
            {children}
          </div>
        ))}
      </Provider>
    )
  }
}

@withScope
class KeepAlive extends Component {
  constructor(props) {
    super(props)
    this.init(props)
  }

  init = async ({ id, children, keep }) => {
    const realContent = await keep(id, children)
    this.placeholder.appendChild(realContent)
  }

  render() {
    return (
      <div
        ref={node => {
          this.placeholder = node
        }}
      />
    )
  }
}

export default KeepAlive
