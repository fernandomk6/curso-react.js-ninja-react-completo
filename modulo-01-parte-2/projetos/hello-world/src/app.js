'use strict'

import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      rememberPassword: false,
      sex: 'male',
      targets: [ '0', '1' ],
      level: 1
    }
    this.handleChangeRememberPassword = this.handleChangeRememberPassword.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangeSex = this.handleChangeSex.bind(this)
    this.handleChangeTargets = this.handleChangeTargets.bind(this)
    this.handleChangeLevel = this.handleChangeLevel.bind(this)
  }

  handleChangeRememberPassword (e) {
    console.log('trigou atualização', e.target.type)
    const { checked: rememberPassword } = e.target
    this.setState({ rememberPassword })
  }

  handleChangeUsername (e) {
    console.log('trigou atualização', e.target.type)
    const { value: username } = e.target
    this.setState({ username })
  }

  handleChangeSex (e) {
    console.log('trigou atualização', e.target.type)
    const { value: sex } = e.target
    this.setState({ sex })
  }

  handleChangeTargets (e) {
    console.log('trigou atualização', e.target.type)
    const newTargets = Array.from(e.target.selectedOptions, option => option.value)
    this.setState({ targets: newTargets })
  }

  handleChangeLevel (e) {
    console.log('trigou atualização', e.target.type)
    const { value: level } = e.target

    this.setState({ level: Number(level) })
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

          <label>
            <span>Alvos</span>
            <select multiple value={this.state.targets} onChange={this.handleChangeTargets}>
              <option value={0}>React</option>
              <option value={1}>Ingles</option>
              <option value={2}>PHP</option>
              <option value={3}>Databases</option>
              <option value={4}>Python</option>
              <option value={5}>Java</option>
            </select>
          </label>

          <label>
            Nível
            <select value={this.state.level} onChange={this.handleChangeLevel}>
              <option value={0}>Júnior</option>
              <option value={1}>Pleno</option>
              <option value={2}>Senior</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default App
