import React, { Component } from 'react';


class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  componentWillMount () {
    setInterval ( () =>{
      this.setState({
        time : new Date()
      })
    },1000);
  }

  render() {
    return (
      <div>
        <span>{`
          ${this.getHour()}:
          ${this.getMin()}:
          ${this.getSec()}
          `}</span>
      </div>
    )
  }
  getHour() {
    return this.Dub(this.state.time.getHours());
  }
  getMin() {
    return this.Dub(this.state.time.getMinutes());
  }
  getSec() {
    return this.Dub(this.state.time.getSeconds());
  }
  Dub(n) {
    return n<10?'0'+n:''+n
  }
}

export default Clock;
