# Aninhando JSX e criando componentes

## Criando nossos proprios componentes com React.createClass()

Todos os componentes react começão com a primeira letra maiúscula para diferencias 
de tags padrões. Tags começam com letra minúscula, componentes react começam com 
letras maaiúscula.

O método createClass espera receber um objeto como argumento. Esse objeto precisa no mínimo 
ter um método chamado `render`. E esse método render, precisa necessáriamente retornar
um elemento react. Use JSX para retornar o elemento react.

```js
const Title = React.createClass({
  render() {
    return <h1>Hello World React</h1>
  }
})
```

Para renderizar esse componente, fazemos:

```js
ReactDOM.render(
  <Title />,
  document.querySelector('#app')
)
```

Neste caso, a tag `<Title />` faz o seguinte. Quando a tag é um componente react. Ela retorna o
resultado do método render. Ou seja, quando a tag é um comente react, ela se torna uma expressão,
que resulta no resultado do retorno do método render desse componente.

Componentes reacts não podem ter o método render diretamente chamado. 
Compoente react são funções.

## Aninhando JSX

Basta escrever seu JSX com tags aninhadas

```js
const Title = React.createClass({
  render() {
    return <h1>Hello World <em>React</em></h1>
  }
})
```

É possivel utilizar parentesis para resolver o seu jsx e com isso podendo identa-lo de forma mais visivel.

```js
const Title = React.createClass({
  render() {
    return (
      <h1>Hello World <em>React</em></h1>
    )
  }
})
```

O JSX deve retornar apenas um container.

Não é possivel retornar elementos irmãos.

```js
const Title = React.createClass({
  render() {
    return (
      <h1>Hello World <em>React</em></h1>
      <h2>Outro titulo</h2>
    )
  }
})
```

Os elementos devem está englobados em uma unica tag para envolver todos os elementos react.
