'use strict'

import React from 'react'
import Component from './component'
import Button from './button'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <Component />
        <Button handleClick={() => console.log('clicou no botão')}>
          Click aqui
        </Button>
      </div>
    )
  }
}

export default App
