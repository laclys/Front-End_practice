import React from 'react'
import {connect} from 'react-redux'
import {addCount, minuxCount, asyncAddCount}  from './index.redux'

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Show:{this.props.state}</h1>
        <button onClick={this.props.addCount} >ADD 1</button>
        <button onClick={this.props.minuxCount} >MINUS 1</button>
        <button onClick={this.props.asyncAddCount} >asyncAdd 1</button>
 
      </div>
    )
  }
}
const mapStateProps = (state) => {
  return {state}
}
App = connect(
  mapStateProps,
  {addCount, minuxCount, asyncAddCount}
)(App)
export default App