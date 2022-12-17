'use strict'

import React from 'react'

const Title = React.createClass({
  render () {
    return (
      <h1>Olá eu sou o {this.props.name} e tenho {this.props.age} anos</h1>
    )
  }
})

export default Title
