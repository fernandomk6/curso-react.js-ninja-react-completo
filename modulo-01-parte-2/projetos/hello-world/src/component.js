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

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate Component')
    console.log({nextProps, nextState})
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate Component')
    console.log({prevProps, prevState})
  }

  componentWillUnmount () {
    console.log('componentWillUnmount Component')
  }

  render () {
    console.log('render Component')
    return (
      <div>Componente</div>
    )
  }
}

export default Component
