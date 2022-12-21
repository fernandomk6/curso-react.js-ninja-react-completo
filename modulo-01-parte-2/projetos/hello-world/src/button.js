'use strict'

import React from 'react'

class Button extends React.Component {
  render () {
    console.log('render Button')
    const { handleClick, children } = this.props
    return (
      <button onClick={handleClick}>{children}</button>
    )
  }
}

export default Button
