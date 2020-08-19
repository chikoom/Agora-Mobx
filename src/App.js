import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './App.css'

@observer
class App extends Component {
  render() {
    return (
      <div>
        <div>Hello!</div>
      </div>
    )
  }
}

export default App
