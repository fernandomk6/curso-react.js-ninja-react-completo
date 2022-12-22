'use strict'

import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = { name: 'pedro' }
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  handleChangeName (e) {
    const { value: name } = e.target
    console.log(e.currentTarget)

    this.setState((prevState) => {
      console.log({ prevState: prevState.name })
      console.log({ newState: name })

      return { name }
    })
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <form>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </form>
      </div>
    )
  }
}

export default App
