# Ao ter objetos como tipo de dado de um estado, é preciso ter alguns cuidados

- Nunca modifique o objeto de estado diretamente
- Sempre reatribua um novo objeto ao `setState` de objeto
- Nunca passe a referência do objeto de estado anterior para o novo setState
- Trabalhe arduamente com imudabilidade e funções puras e assim você
será o bom

Sendo `position` um valor de estado, nunca faça isso:

```js 
position.x = 5;
```

- Sempre trate o estado, independentemente do tipo de dado, como, somente leitura

Você pode mutar objetos dentro do mesmo escopo. *Mas tente evitar*

```js
const nextPosition = {};
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;
setPosition(nextPosition);

// nextPosition é um objeto local, então não terá grandes
// problemas.
// Mastente sempre evitar mutabilidade.
```

Para atualizar objetos de estado com setState, use o spreadOperator, para copiar
os dados anteriores.

```js
setPerson({
  ...person, // Campos anteriores
  firstName: e.target.value // Sobrescreva esse campo
})
```

Atualizando objetos de estados que possuam objetos aninhados

```js
setPerson({
  ...person, // Copia os outros campos
  artwork: { // Sobreescreva esse campo
    ...person.artwork, // Copia esses outros campos
    city: 'New Delhi' // Mas sobreescreva esse
  }
});
```

## Recapitular

- Trate todos os estados em React como imutáveis.
- Quando você armazena objetos em estado, modificá-los não acionará renderizações.
- Você pode usar a {...obj, something: 'newValue'} sintaxe de spread de objetos para criar 
cópias de objetos.
- A sintaxe de propagação é superficial: ela copia apenas um nível de profundidade.
- Para atualizar um objeto aninhado, você precisa criar cópias a partir do 
local que está atualizando

## Teste

Código bugado e suas anotações de erro.

```js
import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    // não pode modificar o estado
    // não aciona nova renderização
    player.score++; 
  }

  function handleFirstNameChange(e) {
    // esse está correto
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    // esse apaga (sobrepõe) o objeto anterior
    // deixando apenas um objeto com a prop lasname
    setPlayer({
      lastName: e.target.value
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
```

Código corrigido:

```js
import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1
    })
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
```

