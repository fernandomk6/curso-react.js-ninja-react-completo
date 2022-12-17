'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps () {
    return {
      name: 'Desconhecido',
      lastname: 'Sem sobrenome'
    }
  },
  render () {
    return <h1>Olá eu sou o {`${this.props.name} ${this.props.lastname}`}!</h1>
  }
})

export default Title
