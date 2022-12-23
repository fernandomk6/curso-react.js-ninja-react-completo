'use strict'

import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      rememberPassword: false,
      sex: 'male'
    }
    this.handleChangeRememberPassword = this.handleChangeRememberPassword.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangeSex = this.handleChangeSex.bind(this)
  }

  handleChangeRememberPassword (e) {
    const { checked: rememberPassword } = e.target
    this.setState({ rememberPassword })
  }

  handleChangeUsername (e) {
    const { value: username } = e.target
    this.setState({ username })
  }

  handleChangeSex (e) {
    const { value: sex } = e.target
    this.setState({ sex })
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <form>
          <label>
            <span>Usuário</span>
            <input
              type='text'
              onChange={this.handleChangeUsername}
            />
          </label>

          <label>
            <input
              type='checkbox'
              checked={this.state.rememberPassword}
              onChange={this.handleChangeRememberPassword}
            />
            <span>Lembrar senha</span>
          </label>

          <label>
            <input
              type='radio'
              name='sex'
              value='male'
              checked={this.state.sex === 'male'}
              onChange={this.handleChangeSex}
            />
            <span>Masculino</span>
          </label>
          <label>
            <input
              type='radio'
              name='sex'
              value='female'
              checked={this.state.sex === 'female'}
              onChange={this.handleChangeSex}
            />
            <span>Feminino</span>
          </label>

        </form>
      </div>
    )
  }
}

export default App
