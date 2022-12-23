'use strict'

import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      initialText: 'Olá eu me chamo...'
    }
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <form>
          <label>
            Sua história
            <textarea
              value={this.state.initialText}
              onChange={(e) => this.setState({
                initialText: e.target.value
              })}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default App
