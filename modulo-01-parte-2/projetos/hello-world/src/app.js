'use strict'

import React from 'react'
import Square from './square'

class App extends React.Component {
  render () {
    return (
      <div>
        {['blue', 'red', 'yellow', 'green'].map((color, index) => (
          <Square color={color} key={index} />
        ))}
      </div>
    )
  }
}

export default App
