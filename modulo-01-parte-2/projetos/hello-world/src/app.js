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

  render () {
    console.log('render App')
    return (
      <div>
        <h1>Olá</h1>
        {this.state.name && <Component name={this.state.name} />}
        <button onClick={() => this.setState({ name: 'pedro' })}>Altrar nome</button>
        <button onClick={() => this.setState({ name: !this.state.name })}>Remover texto</button>
      </div>
    )
  }
}

export default App
