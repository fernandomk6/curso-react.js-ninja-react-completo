# flushSync 

**O uso flushSyncé incomum e pode prejudicar o desempenho do seu aplicativo.**

`flushSync` permite forçar o React a liberar quaisquer atualizações dentro do 
retorno de chamada fornecido de forma síncrona. Isso garante que o DOM seja 
atualizado imediatamente.

```js
import { flushSync } from 'react'

flushSync(callback)
```

Chame `flushSync` para forçar o React a liberar qualquer trabalho pendente (setStates) e 
atualizar o DOM de forma síncrona.

```js
import { flushSync } from 'react-dom';

flushSync(() => {
  setSomething(123);
});
```

Geralmente o seu código vai ter state, e esse state vai alterar o dom quando for alterado,
por padrão os setStates são assincronos. Usando flushSync você pode tornar as alterações
feitas pelo setState síncrono. Todo o código executado abaixo do flushSync, será executado
após todos o código presente no seu callback, set executado, inclusive, os setStates. Lembre-se
que os setState, chamam uma renderização, e essa renderização altera o DOM, portanto,
todo o código executado abaixo do flushSync, será executado apenas após o estado atualizado e o
DOM atualizado.

Use-o com moderação e cuidado. Geralmente é possível evita-lo. Geralmente use o flushSync para
usar algum recurso de API externa ao react.

## Callback

A flushSync tem apenas um argumento um callback:

O React chamará imediatamente esse callback e liberará todas as atualizações que ele contém de forma 
síncrona. Ele também pode liberar quaisquer atualizações pendentes (setStates), ou Efeitos (useEffects callbacks), 
ou atualizações dentro de Efeitos. Se uma atualização for suspensa como resultado dessa flushSync chamada, os 
fallbacks poderão ser exibidos novamente.

**flushSync pode prejudicar significativamente o desempenho. Use moderadamente.**

## Uso

```js
flushSync(() => {
  setSomething(123);
});
```

Isso garante que, quando a próxima linha de código for executada, o React já tenha atualizado o DOM.
E, já tenha alterado o valor do estado.

## Exemplo de uso

```js
import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

export default function PrintApp() {
  const [isPrinting, setIsPrinting] = useState(false);
  
  useEffect(() => {
    function handleBeforePrint() {
      flushSync(() => {
        setIsPrinting(true);
      })
    }
    
    function handleAfterPrint() {
      setIsPrinting(false);
    }

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    }
  }, []);
  
  return (
    <>
      <h1>isPrinting: {isPrinting ? 'yes' : 'no'}</h1>
      <button onClick={() => window.print()}>
        Print
      </button>
    </>
  );
}
```