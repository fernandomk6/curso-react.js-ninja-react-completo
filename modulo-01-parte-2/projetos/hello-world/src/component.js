'use strict'

import React from 'react'

class Component extends React.Component {
  constructor () {
    super()
    console.log('constructor Component')
  }

  componentWillMount () {
    console.log('componentWillMount Component')
  }

  componentDidMount () {
    console.log('componentDidMount Component')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate Component')
    console.log({nextProps, nextState})

    return true
  }

  componentWillUpdate () {
    console.log('componentWillUpdate Component')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate Component')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount Component')
  }

  render () {
    console.log('render Component')
    return (
      <div>Componente {this.props.name}</div>
    )
  }
}

export default Component
