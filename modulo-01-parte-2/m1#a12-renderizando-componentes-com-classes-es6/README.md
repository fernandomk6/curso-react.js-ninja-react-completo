# Renderizando componentes com classes ES6

## transformando react.createClass para Class componente

Para visualizar as alterações vamos transformar nosso componente `App`
que foi criado usando createClass, em um componente que seja criado usando
a sintaxe de `class` do ES6.

```js
// React.createClass ES5
var App = React.createClass({
  render: function () {
    return (
      <div>
        <Title
          name='Fernando'
          lastname='Henrique'
        />
      </div>
    )
  }
})
```

Traduzindo para a sintaxe class fica dessa forma

```js
class App extends React.Component {
  render () {
    // this.props pode ser acessado aqui
    return (
      <div>
        <Title
          name='Fernando'
          lastname='Henrique'
        />
      </div>
    )
  }
}
```

*Componentes de class precisam necessáriamente extender React.Component*

## DefaultProps em componentes de class

```js
MyClassComponent.defaultProps = {}
```