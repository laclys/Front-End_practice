import React  from  'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render() {
    return (
      <React.Fragment>
        {/* <div className={this.state.show ? 'show' : 'hide'}>Hello</div> */}
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit // dom被移除
          onEntered={(el) => {el.style.color = 'green'}} //动画钩子
          appear= {true} //第一次显示也要有动画效果
        >
          <div>Hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
        <p></p>
        <button onClick={this.handleAddItem} >add</button>
        <TransitionGroup>
          {this.state.list.map(((item, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={1000}
                classNames='fade'
                unmountOnExit // dom被移除
                onEntered={(el) => {el.style.color = 'green'}} //动画钩子
                appear= {true} //第一次显示也要有动画效果
              >
                <div>{item}</div>
              </CSSTransition>
            )
          }))}
        </TransitionGroup>
      </React.Fragment>
    )
  }
  handleToggle() {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }
  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}


export default App
