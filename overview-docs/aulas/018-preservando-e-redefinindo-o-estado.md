# PReservando e redefinindo o estado

Quando você dá um estado a um componente, você pode pensar que o 
estado “vive” dentro do componente. 

Renderizações condicionais provocarão uma nova renderização inicial do
componente (mount).

```js
isSend 
? <FeedbackMessage>Enviado</FeedbackMessage>
: <SendingMessage>Enviando mensagem</SendingMessage>
```

Apartir do momento que um dos dois componentes não for renderizado,
ele é removido do DOM (unmount). Caso seja renderizado novamente, ele
será montado. O estado inicial é setado durante o mount.

Tome cuidado com renderizações condicionais pois elas podem redefinir o estado.

