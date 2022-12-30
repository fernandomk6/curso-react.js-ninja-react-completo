# Enfileirando uma série de atualizações de estado

- Definir o estado não altera a variável na renderização existente, mas solicita uma nova renderização.
- O React processa atualizações de estado depois que os manipuladores de eventos concluem a execução. 
Isso é chamado de lote.
- Para atualizar algum estado várias vezes em um evento, você pode usar 
setNumber(n => n + 1) a função do atualizador.

```js
export const getFinalState = (baseState, queue) =>
  queue.reduce(
    (acc, state) => (typeof state === "function" ? state(acc) : state),
    baseState
  );
```

Esse exemplo acima mostra como, os `setState` são executados após a execução
do componente. Perceba que um valor de estado apenas é retornado `finalState`,
após esse valor ser recebido, o componente é renderizado novamente, com os
novos dados de state.
