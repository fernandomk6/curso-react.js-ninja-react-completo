'use strict'

import React from 'react'
import Component from './component'
import Button from './button'

class App extends React.Component {
  constructor () {
    super()
    console.log('constructor App')
  }

  componentWillMount () {
    console.log('componentWillMount App')
  }

  componentDidMount () {
    console.log('componentDidMount App')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate App')
    console.log({
      nextProps,
      nextState
    })
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate App')
    console.log({
      nextProps,
      nextState,
      state: this.state
    })
  }

  componentDidUpdate (nextProps, nextState) {
    console.log('componentDidUpdate App')
    console.log({
      nextProps,
      nextState
    })
  }

  render () {
    console.log('render App')
    return (
      <div>
        <h1>Olá</h1>
        <Component />
        <Button handleClick={() => console.log('clicou no botão')}>Click aqui</Button>
      </div>
    )
  }
}

export default App
