# Arrays de estado como modifica-los

- Arrays em estado devem ser tratados como somente leitura
- E não deve usar `pop(), ou shift()` pois esses mutam o array
- Array é um objeto e você sabe disso!
- Sempre que precisar atualizar um estado, que o seu tipo de dado seja um array,
você deve passar um novo array para a função `setSomething`
- Para gerar um novo array apartir do original, use, `map, ou filter`

Trablhe sempre com os métodos 

- Map
- Filter
- Concat
- Spread (preferível)(cópia raza, apenas primeiro nível)
- Slice

Infelizmente `slice` e `splice` são nomeados de formas semelhantes mas fazem,
coisas bem diferentes:

- slice: permite copiar um array ou parte dele. (imutabilidade)
- splice: transforma a matriz (para inserir ou excluir itens) (mutabilidade)

Usando Spred

```js
setArtists( // Sobreescrevendo o estado
  [ // Com um novo array
    ...artists, // Copiando todos os itens do array original
    { id: nextId++, name: name } // Adicionando um novo item ao final
  ]
);
```

Usando Spred ao invés de pop e shift

```js
// Adicionando um novo item ao final do array
setArtists( // Sobreescrevendo o estado
  [ // Com um novo array
    ...artists, // Copiando todos os itens do array original
    { id: nextId++, name: name } // Adicionando um novo item ao final
  ]
);

// Adicionando um novo item ao inicio do array
setArtists( // Sobreescrevendo o estado
  [ // Com um novo array
    { id: nextId++, name: name } // Adicionando um novo item ao final
    ...artists, // Copiando todos os itens do array original
  ]
);
```

## Removendo itens de uma matriz

A maneira mais facil e imutável de remover itens de uma matriz é filtra-la.
Em outras palavras, você ira criar uma nova matriz que não contem aquele item.

```js
setArtists(
  artists.filter(a => a.id !== artist.id)
);
```

## Transformando um array

Se quiser alterar algum dado dentro do seu array, sem modificar o numero de itens,
use o método map.

```js
const nextShapes = shapes.map(shape => {
  if (shape.type === 'square') {
    // Nenhuma mudança
    return shape;
  } else {
    // Retorna um novo circulo 50px abaixo
    return {
      ...shape,
      y: shape.y + 50,
    };
  }
})
```

## Substituindo itens em um array

É particularmente comum querer substituir um ou mais itens em uma matriz. 
Atribuições como `arr[0]` = 'bird'estão mudando o array original, então 
você vai querer usar mappara isso também.

Você precisará identificar o index do elemento a ser substituído.

```js
function handleIncrementClick(index) {
  const nextCounters = counters.map((c, i) => {
    if (i === index) {
      // Incrementa o counter clicado
      return c + 1;
    } else {
      // O restante não muda
      return c;
    }
  });
  setCounters(nextCounters);
}
```

## Inserindo em um array

As vezes você precisará inserir um item a um array em uma posição específica que não
seja no inicio nem no final.

Para fazer isso, você pode usar a ...sintaxe de distribuição de matriz junto com o 
slice() método.

O método slice, retorna um pedaço (fatia) de um array.
Para inserir um item, você criará uma matriz que espalha a fatia antes 
do ponto de inserção, depois o novo item e o restante da matriz original.

```js
function handleClick() {
  const insertAt = 1; // Pode ser qualquer index
  const nextArtists = [
    // Itens antes do ponto de inserção
    ...artists.slice(0, insertAt),
    // Novo item
    { id: nextId++, name: name },
    // Items depois do ponto de inserção
    ...artists.slice(insertAt)
  ];

  setArtists(nextArtists);
}
```

## Fazendo outras alterações em um array

Por exemplo, você pode querer inverter ou classificar uma matriz. 
O JavaScript reverse()e sort()os métodos estão alterando o array original, 
então você não pode usá-los diretamente.

No entanto, você pode copiar a matriz primeiro e, em seguida, fazer alterações nela.

```js
function handleClick() {
  const nextList = [...list]; // copiando array original
  nextList.reverse(); // modificando a copia e não o array original
  setList(nextList); // setando o estado com a copia alterada
}
```

Lembre-se não tem problema modificar variaveis locais.
Nunca modifique variaveis externas ou o state. Isso deixará sua
função impura e causará bugs.

Lmebre-se que o spred faz uma copia raza, cuidado com objetos aninhados!

## Atualizando objetos dentro de arrays

Os objetos não estão realmente localizados “dentro” de arrays. 
Eles podem parecer estar “dentro” no código, mas cada objeto em uma matriz é 
um valor separado, para o qual a matriz “aponta”. É por isso que você precisa 
ter cuidado ao alterar campos aninhados como list[0].

```js
setMyList(myList.map(artwork => {
  if (artwork.id === artworkId) {
    // Cria um novo objeto com as mudanças
    return { ...artwork, seen: nextSeen };
  } else {
    // No changes
    return artwork;
  }
}));

```

- É feito uma copia do array original
- Encontro a referencia do objeto alvo e crio uma copia do objeto
- Retorna o novo objeto ao inves do anterior
- setState recebe o novo array como argumento

## Recapitular 

- Você pode colocar arrays em estado, mas não pode alterá-los.
- Em vez de transformar uma matriz, crie uma nova versão dela e atualize o estado dela
- Você pode usar a [...arr, newItem] sintaxe de distribuição de array para criar arrays 
com novos itens.
- Você pode usar filter()e map()para criar novos arrays com itens filtrados ou transformados.




