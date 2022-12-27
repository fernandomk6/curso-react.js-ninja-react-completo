## Async e setState

Geralmente em react quando temos setStates acumulado dentro de código
síncrono, o react, ao fim da execução da função, irá unir todas as atualizações
de estado e fazer apenas um unico render, e não um render para cada setState.

Porém isso não acontece quando temos uma função async, e um código `await`,
entre os seus setState. Quando temos isso, cada setState chama um render.

## componetamente padrão síncrono setState acumulados

Vejamos na prática:

```js
async function handleClick () {
  setColor('red')
  setColor('green')
  setColor('blue')
}
```

Nesse exemplo acima, depois de executar a handleClick, apenas uma renderização
será feita, pois temos setStates acumulados, de forma síncrona. 
Perceba que um vem logo após o outro, e entre eles poderia vir tambem qualquer
codigo síncrono, que não afetaria o fato de, apos a função executada, termos
apenas um render, e não 3.

Sabemos que, cada setState chama um método render, ou executa novametne a função
de seu componente, mas nos casoss citados acima, isso não acontece. Todos
são unificados para um so render.

Vejamos a ordem de execução disso:

1. handleClick é lida.
2. setState red é jogado para ser resolvido depois
3. setState green é jogado para ser resolvido depois
4. setState blue é jogado para ser resolvido depois
5. handleClick encerra
6. Todos os setState atualizam os seus valores, e fazem apenas um render.

## setState acumulados entre codigo assíncrono

```js
async function handleClick () {
  setColor('red')
  const resposne = await fetch(url)
  const data = await response.json()
  setColor('blue')
}
```

Nesse caso acima, ocorrerão duas renderização, uma para o setState red
e outra para o blue. Isso acontece por que entre eles existe um código 
"bloqueante", isso faz com que o react não "una", as atualizações de
estado para fazer um render só.

Vejamos a ordem de execução disso:

1. handleClick é lida.
2. setState red é jogado para ser resolvido depois
3. handleClick é pausada retornando promise undefined
4. setState red resolve mudando o estado e renderizando a tela
5. await resolve e executa o restante da função
6. setState blue é jogado para outro canto
7. setState blue resolve alterando o estado e renderizando novamente
