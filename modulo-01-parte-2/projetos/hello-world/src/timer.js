'use strict'

import React from 'react'

class Timer extends React.Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
  }

  componentDidMount () {
    console.log('componentDidMount')

    this.interval = setInterval(() => this.setState({
      time: this.state.time + 1
    }), 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>Timer: {this.state.time}</div>
    )
  }
}

export default Timer
