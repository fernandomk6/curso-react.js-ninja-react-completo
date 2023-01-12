# Hooks personalizados

Os hooks personalizados devem reaproveitar alguma lógica
repetitiva, feita em efeitos.

- São funções declarados em um arquivo separado.
- Devem podem conter estado. Esses estados funcionarão da mesma
forma como nos componentes.
- Invocar o hook custom, irá executar o codigo dentro do hookCustom.
Imagine funcionando realmente como uma cópia de código, um "include".
Como se o código dentro do hook custom, fosse incluído naquele local. É
isso que acontece por baixo dos panos.
- Você não deve precisar de effeitos e de hooks personalizados com
muita frequência.
- Assim como efeitos hooks também são usados para sincronizar seus
componentes com sistemas externos.

## Exemplo, transformando efeito em custom hook

### Código antes, com efeito hardcode

```js
import { useState, useEffect } from 'react';

export default function Counter() {
  // Estados
  const [count, setCount] = useState(0);

  // Efeito
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Render
  return <h1>Seconds passed: {count}</h1>;
}

```

### Código, usando o hook custom

```js
export default function Counter() {
  // Custom hook (abstração de efeito)
  const count = useCounter();

  // Render
  return <h1>Seconds passed: {count}</h1>;
}
```

- Perceba que a declaração dos estados foram removidas

### Como o hook custom deve ficar

- Lembre-se que os estados foram removidos do componente, então devem está no
hook custom

```js
import { useState, useEffect } from 'react';

// Hook custom que nada mais é uma função que usa os estados que precisa
// e um useEffect
export function useCounter() {
  // Declaração dos efeitos (que antes estavam no componente e eram necessário no efeito)
  const [count, setCount] = useState(0);

  // Perceba que o efeito é exatamente igual ao de antes, porém agora
  // dentro de uma função
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Deve ainda retornar a função de limpeza
    return () => clearInterval(id);
  }, []);

  // Deve retornar o valor do estado, esse será usado como estado no componente
  // ao invés do valor retornado direto pela useState.
  // Perceba que a setState foi usada apenas aqui.
  return count;
}
```

## As dependencias de um hook personalizados.

As dependencias de um hook personalizados devem ser passadas como
argumento para o hook personalizado, e dentro do hook personalizados,
devem ser setadas no array de dependencias. Segue um exemplo de como
fazer isso:

Componente:

```js
import { useState } from "react";
import { useCounter } from "./useCounter.js";

export default function Counter() {
  const [delay, setDelay] = useState(1000);
  // Delay é a dependencia do efeito. pois, sempre que
  // daley mudar, o feito deve ser executado.
  // delay é um reativo. Reativo é tudo o que pode mudar dependendo
  // da renderização. Geralmente props, estados e variaveis criadas 
  // usado um desses
  const count = useCounter(delay);

  return (
    <>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>
      <hr />
      <h1>Ticks: {count}</h1>
    </>
  );
}
```

O hook personalizado fica assim:

```js
import { useState, useEffect } from "react";

export function useCounter(delay) {
  // Pega o estado e sua função de alteração
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Corpo do efeito
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // Função de limpeza
    return () => clearInterval(id);

    // Dependencia setada. Agora sempre que o valor de delay
    // for diferente, o efeito é executado.
    // Altamente simples my friend.
  }, [delay]);

  // Retorna o valor do estado
  return count;
}
```