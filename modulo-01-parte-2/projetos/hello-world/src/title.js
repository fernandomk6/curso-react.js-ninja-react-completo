'use strict'

import React from 'react'

const Title = (props) => (
  <h1>Olá eu sou o {`${props.name} ${props.lastname}`}!</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}

export default Title
