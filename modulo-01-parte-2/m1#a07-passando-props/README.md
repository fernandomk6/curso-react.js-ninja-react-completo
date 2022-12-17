# Passando props

## O que são props 

São basicamente atributos HTML.

Pode se entender a props como propriedades do componente. As props irão definir quais dados
devem ser usados no componente que está recebendo as props. Na sintaxe JSX, as props são 
passadas como atributos HTML.

```js
<Title name="Fernando" />
```

O componente title está recebendo a prop name. Props é um objeto vazio a principio.
Nesse caso acima, o objeto props agora possui uma propriedade name armazenando a string 
fernando.

## Javascript no meio do JSX

Uma expressão javascript pode ser inserida em uma expressão JSX. Basta usar `{ sua-expressao }`,
no meio de sua expressão JSX.

```JSX
<h1>Olá {name}</h1>
```

O que está dentro das chaves `{}` será interpretado como uma expressão javascript.

## Passando props

As props são passadas como argumentos para o componente react. As props irão definir o comportamento
do componente. As props servem para deixar alguns dados do componente dinâmico. O que for estático,
não precisa ser passado como props. As props são passadas como atributos html, na chamada JSX do componente.
Da seguinte forma:

```jsx
<Title name='Fernando Henrique' age='24' />
```

`name` e `age`, foram passadas para o componente `Title` como props.

No componente Title, o objeto `props` agora possi a propriedade `name` e `age`, armazenando
`fernando` e `24`, respectivamente.

As props podem ser acessadas dentro do componente da seguinte forma: `this.props.propName`

```jsx
'use strict'

import React from 'react'

const Title = React.createClass({
  render () {
    return (
      <h1>Olá {this.props.name}</h1>
    )
  }
})

export default Title
```

## Mais sobre props

Em React, props são propriedades que são passadas para um componente como argumentos. 
Elas podem ser usadas para passar dados ou configurações para o componente. 
Aqui estão alguns exemplos de como os props podem ser usados em React:

```jsx
// Definindo o componente:
function MyComponent(props) {
  return <h1>{props.message}</h1>;
}

// Usando o componente:
<MyComponent message="Hello World" />
```

Para exercitar a didática, vamos traduzir as sintaxes JSX para React.createElement.
Use o site [https://babeljs.io/](https://babeljs.io/) para traduzir sintaxes JSX em sintaxe 
javascript.

```jsx
function MyComponent(props) {
  return React.createElement('h1', null, props.message) 
  // return <h1>{props.message}</h1>;
}

React.createElement(MyComponent, { message: 'Hello World' }) 
// <MyComponent message="Hello World" />
```