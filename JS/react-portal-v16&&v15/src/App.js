import React, { Component } from 'react'
import Dialog from './Dialog'
import DialogV16 from './DialogV16'

class App extends Component {
  render() {
    return (
      <div className="App">
        root container
        <Dialog>
          dialog
          <p>Hello Portal</p>
        </Dialog>

        <DialogV16>
          dialog in react v16
          <p>Hello,Portal</p>
        </DialogV16>
      </div>
    );
  }
}

export default App;
