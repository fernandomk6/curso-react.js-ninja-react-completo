'use strict'

import React from 'react'
import Component from './component'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'fernando'
    }
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
    console.log({nextProps, nextState})
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate App')
    console.log({nextProps, nextState, state: this.state})
  }

  componentDidUpdate (nextProps, nextState) {
    console.log('componentDidUpdate App')
    console.log({nextProps, nextState})
  }

  render () {
    console.log('render App')
    console.log(this.state.name)
    return (
      <div>
        <h1>Olá</h1>
        <Component />
        <button onClick={() => this.setState({ name: 'pedro' })}>Alterar estado</button>
      </div>
    )
  }
}

export default App
