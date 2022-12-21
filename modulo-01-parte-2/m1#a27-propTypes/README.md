# PropTypes

Componentes de função podem ter uma propriedade estática
chamada `propTypes` que vai mapear o tipo de dado esperado 
para cada propriedade. Caso o tipo de dado não seja o esperado, um
erro será lançado.

**Válido apenas para componentes de função**

```js
Component.propTypes = {
  propName: React.PropTypes.func.isRequired,
  propName2: React.PropTypes.string.isRequired,
  propName3: React.PropTypes.number.isRequired
  // ...etc
}
```

