'use strict'

import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <label>
          <input
            type='checkbox'
            checked={this.state.showContent}
            onChange={(e) => this.setState({
              showContent: e.target.checked
            })}
          /> Mostrar conteúdo
        </label>

        {this.state.showContent && <div>Olha eu aqui</div>}
      </div>
    )
  }
}

export default App
