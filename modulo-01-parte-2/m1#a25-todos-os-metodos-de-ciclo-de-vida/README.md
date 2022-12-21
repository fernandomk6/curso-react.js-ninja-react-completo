# Resumo de todos os metodos de ciclo de vida dos componentes react

## Métodos de montagem (Inserção no DOM)

mounting ou mount, faz referência a montagem, ou, criação no DOM.
Quando o elemento react é inserido no DOM, ele é montado.

### Contructor

É o primeiro método executado quando um elemento vai ser criado no DOM.
É executado assim que a classe é instanciada, ou seja, antes da renderização.

### ComponentWillMount

É sempre será executado logo após o constructor.
Ésse método é executado antes do componente ser montado.

**Vale lembrar que mountagem é diferente de renderizar**.

- Montagem é a primeira vez que o componente foi inserido no DOM.
- Renderização ocorre quando componente é montado e atualizado.

### Render

- É executado sempre que um componente Stateful, tem o valor de seu
estado alterado.

- É executado sempre que um componente Stateless, tem suas o valor
de suas props, alterada.

Método que é responsavel por criar/atualizar visualmente o elemento no DOM,
com base no seu retorno. Deve ser um método puro.

Renderiza o elemento na tela fazendo as inserções / alterações no DOM necessárias.

*O react não renderiza todo o componente a cada alteração mas sim apenas os dados que mudaram (diff)*

*É feito uma comparação do virtualDOM do react com o DOMreal, e apenas o que estiver diferente é atualizado*

### ComponentDidMount

É semelhante ao `componentWillMount`, porém é executado após a renderização.

## Métodos de atualização (sempre que um state muda)

### shouldComponentUpdate(nextProps, nextState)

Esse método é executado sempre que é solicitado uma atualização do componente,
antes mesmo do método render. Esse método deve retornar um boolean,
indicando se, o componente deve ser atualizado ou não.

**Atualização pode ser traduzida como re-renderização causada pela alteração de um state**.

*Não é recomendado usar esse método*, pois entende se que, se houve uma tentativa de atualização
o componente deve refletir na tela as mudanças de alguma forma.

### ComponentWillUpdate

Método executado antes do componente ser atualizado na tela (re-renderização).
Semelhante ao `componentWillMount`, porém, ao invés de montagem, é ataulização(re-renderização).

### Render

Método responsável por renderizar o componente na tela. Sempre que uma 
tentativa de atualização é feita, o método render é chamado novamente, junto com os métodos
de ciclo de vida de update.

O render tanto é um método de montagem, como um método de atualização.

### ComponentDidUpdate

Método executado depois do componente ser atualizado na tela (re-renderização).
Semelhante ao `componentDidlMount`, porém, ao invés de montagem, é ataulização(re-renderização).

## Método de desmontagem (remoção do DOM)

### componentWillUnmount

Método executado antes do componente ser removido do DOM.
Esse método deve ser usado para evitar vazamento de memória.

Em react é comum remos renderizações condicionais, um elemento que existe no
DOM (está montado), e depois de uma atualização de estado, ele não deve se mais
renderizado (por conta da condição), esse componente é removido do DOM pelo react,
e renderiza apenas o necessário.

Esse processo de remoção do DOM é chamado de unmounting ou desmontagem.

O método `componentWillUnmount` é executado antes do componente ser removido
do DOM.

## Exemplo de componente que testa todos os métodos de ciclo de vida

```js
// App

'use strict'

import React from 'react'
import Component from './component'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'fernando'
    }
    console.log('constructor App')
  }

  componentWillMount () {
    console.log('componentWillMount App')
  }

  componentDidMount () {
    console.log('componentDidMount App')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate App')
    console.log({nextProps, nextState})
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate App')
    console.log({nextProps, nextState, state: this.state})
  }

  componentDidUpdate (nextProps, nextState) {
    console.log('componentDidUpdate App')
    console.log({nextProps, nextState})
  }

  render () {
    console.log('render App')
    console.log(this.state.name)
    return (
      <div>
        <h1>Olá</h1>
        <Component />
        <button onClick={() => this.setState({ name: 'pedro' })}>Alterar estado</button>
      </div>
    )
  }
}

export default App

```

```js
// Component

'use strict'

import React from 'react'

class Component extends React.Component {
  constructor () {
    super()
    console.log('constructor Component')
  }

  componentWillMount () {
    console.log('componentWillMount Component')
  }

  componentDidMount () {
    console.log('componentDidMount Component')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate Component')
    console.log({nextProps, nextState})
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate Component')
    console.log({nextProps, nextState})
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate Component')
    console.log({nextProps, nextState})
  }

  componentWillUnmount () {
    console.log('componentWillUnmount Component')
  }

  render () {
    console.log('render Component')
    return (
      <div>Componente</div>
    )
  }
}

export default Component

```

## Extra

Quando um componente é renderizado referente a montagem, todos os
seus filhos são montados também. Ou seja, todos os métodos de ciclo de vida,
de montagem, são executados nos filhos também.

Quando um componente é renderizado referente a uma atualização, todos os
seus filhos, seão atualizados também. Ou seja, todos os métodos de ciclo de 
vida de atualização serão executados no filhos tambpem.

Quando um componente é removido do DOM (unmounting) todos os filhos são removidos
também, ou seja, os métodos de desmontagem serão executados em todos
os filhos também.

## O setState

O método `setState` quando chamado, inicia o ciclo de vida de atualização do componente
que teve o objeto state alterado.


