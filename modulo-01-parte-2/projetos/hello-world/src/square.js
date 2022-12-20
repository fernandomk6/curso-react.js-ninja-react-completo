'use strict'

import React from 'react'

const Square = (props) => {
  return (
    <div style={{
      width: '200px',
      height: '200px',
      backgroundColor: props.color
    }} />
  )
}

export default Square
