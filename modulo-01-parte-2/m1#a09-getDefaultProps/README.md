# getDefaultProps

`getDefaultProps` é uma função estática que pode ser usada em componentes de classe 
em React para definir os valores padrão das propriedades de um componente.

Quando um componente é chamado e não é passado nenhuma prop, o valor de retorno 
da função `getDefaultProps` será usado.

Aqui está um exemplo de como a getDefaultProps pode ser usada em um componente de classe:

```js
import React from 'react';

class MyComponent extends React.Component {
  /*
    Caso nenhuma prop seja passada como argumento para esse componente,
    o objeto retornado pela função getDefaultProps será usado como
    o valor da props.

    getDefaultProps deve retornar sempre um objeto.
  */
  static getDefaultProps() {
    return {
      name: 'John Doe',
      age: 30,
      favoriteColor: 'blue'
    };
  }

  render() {
    return (
      <div>
        <p>My name is {this.props.name}</p>
        <p>I am {this.props.age} years old</p>
        <p>My favorite color is {this.props.favoriteColor}</p>
      </div>
    );
  }
}
```

## Exemplo

```js
// title.js component

const Title = React.createClass({
  getDefaultProps () {
    return {
      name: 'Fernando Henrique',
      age: 24
    }
  },
  render () {
    return (
      <h1>Olá eu sou o {this.props.name} e tenho {this.props.age} anos</h1>
    )
  }
})

// Usando o componente Title
<Title name='Pedro Emanoel' />

// Resultado renderizado

// Olá sou o Pedro Emanoel e tenho 24 anos
```

Perceba que a prop name passada como argumento para o componente Title, sobre
escrever o valor retornado pela `getDefaultProps`. Já como não foi passado
uma prop `age` como argumento, o uso da propriedade `age` do objeto
retornado pela `getDefaultProps` foi usado.

