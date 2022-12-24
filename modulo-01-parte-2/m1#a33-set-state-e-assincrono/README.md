# setState é assíncrono

`setState` é um método assíncrono, vamos ver agora como isso
afeta a nossa aplicação react.

Quando `setState` é chamado, o seu estado não é alterado logo em seguida.
Tome muito cuidado para não usar o novo state, logo apos chamar `setState`.

`setState` apenas mudará o estado, depois de toda a função (`onClick` por exemplo) 
ter sido processada pelo javascript. Depois, a `setState` resolverá, alterando
o estado, e invocando o método render, para refletir na tela as alterações
de estado.

## Callback do setState

`setState` pode receber como segundo argumento, uma função, que será executado, logo
após o `setState` set resolvido assíncronamente (não sei se essa palavra existe).

```js
this.setState({
  aState: true
}, () => {
  console.log('executado após o setState resolver')
})
```

Também é possivel passar apenas um callback, que tem `prevState` como parametro.

```js
this.setState((prevState) => {
  return {
    count: prevState.count + 1
  }
})
```

O objeto retornado pelo callback (primeiro argumento callback) de `setState`, será mesclado,
ao objeto state.

## state

O state sempre retornará o que está renderizado na tela. Tome cuidado para não, "acumular"
chamadas de `setState` e uso de `this.state`.

## Em resumo

`setState` resolve após a função ser executada pelo javascript. Quando `setState` é resolvida,
ela invoca o método render para refletir as alterações de estado na tela.

