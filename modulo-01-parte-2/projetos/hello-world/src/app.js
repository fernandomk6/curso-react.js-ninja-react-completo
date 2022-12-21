'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer: true,
      time: 0
    }
    console.log('constructor')
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        <h1>Olá</h1>
        {this.state.showTimer && <Timer time={this.state.time} />}
        <button onClick={() => this.setState({ showTimer: !this.state.showTimer })}>
          Show / hide timer
        </button>
      </div>
    )
  }
}

export default App
