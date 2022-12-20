'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'gray'
    }
  }
  render () {
    console.log('render executado')
    const colors = ['red', 'blue', 'yellow', 'orange', 'black', 'purple', 'pink', 'crimson']

    return (
      <div>
        <h1>My React App</h1>
        <Square color={this.state.color} />
        {colors.map((color, index) => (
          <Button
            key={index}
            handleClick={() => this.setState({ color })}
          >
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
