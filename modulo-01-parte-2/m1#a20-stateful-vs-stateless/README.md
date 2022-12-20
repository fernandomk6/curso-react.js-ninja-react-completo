# Staeful vs Stateless

## O que é um componente statefull

Um componente é stateful quando manipula o state.

Componentes stateful não são componentes puros.
Funções puras não manipulam estado.

## O que é um componente stateless

São componentes que não manipulam o state.

Componentes stateless são puros.
Funções/componentes puros não usam `this`.

## Como as coisas funcionam no react

Flow inidirecional.
Começa no componente principal.

- Index.js

O componente principal do React é, geralmente, o componente `App`.

O fluxo de informações sempre são passadas do componente pai
para o componente filho, via props (argumentos).

## Exemplo de aplicação que altera estado

```js
import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'green'
    }
  }
  render () {
    console.log('conponente renderizado')
    console.log(this.state)
    return (
      <div>
        <h1>My React App</h1>
        <Square color={this.state.color} />
        <Button handleClick={() => this.setState({ color: 'blue' })}>Azul</Button>
        <Button handleClick={() => this.setState({ color: 'red' })}>Vermelho</Button>
        <Button handleClick={() => this.setState({ color: 'yellow' })}>Amarelo</Button>
      </div>
    )
  }
}

export default App
```

Sobre o setState

- É agenda uma alteração do valor do state
- Após o valor do state ser alterado, o método render do objeto que tem a propriedade state alterada
é executado novamente, refletindo as alterações de estado na tela

## Mais sobre o fluxo de dados em react

```js
import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'gray'
    }
  }
  render () {
    console.log('render executado')
    const colors = ['red', 'blue', 'yellow', 'orange', 'black', 'purple', 'pink', 'crimson']

    return (
      <div>
        <h1>My React App</h1>
        <Square color={this.state.color} />
        {colors.map((color, index) => (
          <Button
            key={index}
            handleClick={() => this.setState({ color })}
          >
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
```

Percebemos que todos os dados fluem de cima para baixo via props. E quando
executado o `this.setState`, todo o componente que possuí o objeto `state`, que
foi alterado pelo `setState`, é rerenderizado. O método render é executado,
sempre que o estado é alterado pelo `setState`.

- `setState` é assincrono
- Executado antes do componente ser montado no DOM
- `setState` altera o objeto `state` do componente
- `setState` executa o método render novamente
- `props` não são mutáveis
- `state` é mutável
- `render` método deve ser sempre puro. Independentemente de componente ser 
stateful ou stateless


