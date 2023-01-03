# Preservando e redefinindo o estado

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

## O statdo vive na posição da arvore react

O react cria uma arvore de componentes com base em seu jsx. O reactDOM compara
essa árvore com o DOM real, e faz as alterações no DOM real para ele refletir
as informações contidas na árvore react.

- O estado fica armazenado na possicão da arvore.

Ou seja, o state não vive extamente no componente, mas sim, em sua posição
dentro da árvore react.

- Com isso, cada componente pode ter o seu estado completamente isolado

```js
import { useState } from 'react';

export default function App() {
  // Perceba que estou renderizando o mesmo componente porém, cada um terá o seu estado
  // Porém ambos são referencias diferentes e ocupam espaços diferentes na arvore do dom
  // Lembre que o estado vive na posição da arvore do dom e não no componente
  // Se a posição da arvore mudar, o estado será redefinido para o valor inicial
  return (
    <div>
      {/*veja isso como o resultado de uma expressão que resulta em um objeto de marcação*/}
      <Counter /> 
      {/* Esse é outro objeto com uma referência diferente do primeiro */}
      <Counter />
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
```

```js
{<Component /> === <Component /> ? 'sim' : 'não'} // não
```

## Mantendo o estado

- O react manterá o estado quando: **Você renderizar o mesmo componente na mesma posição**
- Se a posição mudar, o estado será redefinido

## Removendo componente

Quando um componente é removido do DOM, geralmente por conta de uma renderização condicional,
ele perde a sua posição no DOM e consequentemente seu estado. Isso é chamado de unmount.

Lembre que o react tem a sua arvore de objetos jsx e essa arvore é refletida no dom,
se um componente jsx é removido dessa arvore do react, ele é removido do dom.
E consequentemente perderá o seu estado.

- Tudo que causar mudança na posição do componente na arvore react, fará o estado ser
redefinido.

O React preserva o estado de um componente enquanto ele estiver sendo renderizado 
em sua posição na árvore da interface do usuário. Se ele for removido ou um componente 
diferente for renderizado na mesma posição, o React descarta seu estado.

## Mesmo componente na mesma posição, preserva o estado

```js
import { useState } from 'react';

export default function App() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {isFancy ? (
        {/* Mesmo compoente, porém a renderização condicional adiciona o mesmo compoente */}
        {/* Isso faz com que, o componente sempre se mantenha na mesma posição por isso o estado */}
        {/* é preservado, porém o componente é executado novamente.  */}
        {/* É como se ele não fosse removido do DOM, apenas sua prop que muda. */}
        {/* O estado é preservado por que a sua posição na árvore se mantém a mesma. */}
        <Counter isFancy={true} /> 
      ) : (
        <Counter isFancy={false} /> 
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
```

Independente mente da condição, você sempre terá a `<Counter />` como o primeiro filho do div 
retornado do componente raiz App:

É o mesmo componente na mesma posição, portanto, da perspectiva do React, é o mesmo contador.

Lembre-se de que é a posição na árvore da interface do usuário 
— não na marcação JSX — que importa para o React!

Você pode entender que o react ver cada componente com um endereço, o estado é 
atrelado a esse endereço. Se o mesmo componente renderiza no mesmo endereço
o estado é mantido, se não o estado é descartado.

Sendo o endereço a posição do componente na interface do usuário e não na marcação JSX
de retorno. Você pode basear a posição ou endereço, pelo local que o componente renderiza
na árvore do dom.

## Componentes diferentes na mesma posição gera redefinição de estado

```js
import { useState } from 'react';

export default function App() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div>
      {isPaused ? (
        <p>See you later!</p> 
      ) : (
        <Counter /> 
      )}
      <label>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={e => {
            setIsPaused(e.target.checked)
          }}
        />
        Take a break
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
```

Aqui, você alterna entre diferentes tipos de componentes na mesma posição. 
Inicialmente, o primeiro filho do `<div>` continha um arquivo Counter. 
Mas quando você trocou um p, o React removeu o Counter da árvore da interface do 
usuário e destruiu seu estado.

Além disso, quando você renderiza um componente diferente na mesma posição, 
ele redefine o estado de toda a sua **subárvore**.

```js
import { useState } from 'react';

export default function App() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {/* Perceba que counter é renderizado em ambas as condições porém */}
      {/* em endereços diferente. Em uma condição ele está dentro de uma div */}
      {/* em outra está dentro de uma section, isso faz com que o endereço seja perdido */}
      {/* sua posição é perdida e com isso o estado é redefinido para o valor inicial. */}
      {/* O componente é desmontado quando ele é removido de sua posição na arvore da interface */}
      {/* do usuário. */}
      {isFancy ? (
        <div>
          <Counter isFancy={true} /> 
        </div>
      ) : (
        <section>
          <Counter isFancy={false} />
        </section>
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
```

Como a div foi substituída por section, toda a subarvore da div, foi removida.
E consequentemente seu estados foram removidos (unmout). Cada componente foi removido do
dom, e depois foi criado uma nova arvore, partindo de uma section (mount).

Remover um ancestral, irá resetar todos os estados de seus decendentes e remover
toda a subarvore da interface do usuário (unmount).

Se você deseja preservar o estado entre novas renderizações, a estrutura da sua árvore, 
precisa combinar entre uma renderização e outra. Se a estrutura for diferente 
o estado será destruido e os componentes removidos (unmount).

- É por isso que você não deve aninhar definições de função de componente.

```js
import { useState } from 'react';

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState('');

    return (
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    );
  }

  return (
    <>
      <MyTextField />
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Clicked {counter} times</button>
    </>
  );
}
```

A cada rerenderização do componente MyComponent, o componente MyTextField
é criado novamente, ou seja uma nova referencia. 
Você está renderizando um componente diferente na mesma posição, então o 
React redefine todos os estados abaixo.

Para evitar esse problema, sempre declare funções de componente no nível 
superior e não aninhe suas definições.

## Reiniciando o estado na mesma posição

```js
import { useState } from 'react';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {/* Posição 1 */}
      {/* isPlayer é um bolean e por padrão nao renderiza na tela, mas ocupa um lugar na  */}
      {/* árvore */}
      {isPlayerA &&
        <Counter person="Taylor" />
      }
      {/* Posição 2 */}
      {/* A mesma coisa nesse exmplo. Os componentes estão sendo removidos e adicionado um boolean */}
      {/* a posição deles */}
      {!isPlayerA &&
        <Counter person="Sarah" />
      }
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{person}'s score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
```

Essa solução é conveniente quando você tem apenas alguns componentes independentes 
renderizados no mesmo local. Neste exemplo, você só tem dois, então não é complicado 
renderizar ambos separadamente no JSX.

## redefinindo o estado com uma chave key

Você pode usar chaves para fazer o React distinguir entre quaisquer componentes.
Por padrão o react atribui uma propriedade key com base na posição
em relação ao pai, index 1, 2, que é exatamente o endereço que vinhamos
comnetando nas seções anteriores.

As chaves permitem que você diga ao react que esse componente é especifico e não
tem relação com a sua ordem no na arvore de interface do usuario.

Se você adicionar uma key `key='fernando'`, esse componente aonde quer
que ele seja renderizado na arvore, se for renderizado com essa key, o seu
estádo será preservado. A `key` substitui a posição do componente, o endereço.
O torna independente da ordem da arvore.

Neste exemplo, os dois `<Counter />` não compartilham o estado, embora 
apareçam no mesmo lugar no JSX:

```js
import { useState } from 'react';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter key="Taylor" person="Taylor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}
```

Alternar entre Taylor e Sarah não preserva o estado. Isso ocorre porque 
você deu a eles diferentes keys:

```js
{isPlayerA ? (
  <Counter key="Taylor" person="Taylor" />
) : (
  <Counter key="Sarah" person="Sarah" />
)}
```

*Lembre-se de que as chaves não são globalmente exclusivas. Eles apenas especificam a posição dentro do pai.*

## Redefinindo um formulário com uma chave

Redefinir o estado com uma chave é particularmente útil ao lidar com formulários.

## Mantendo o estado de componentes que foram removidos

Em alguns momentos você vai querer remover alguns componentes mas quando
quiser cria-los novamente, você desejará recuperar o estado anterior.

Existem algumas opções para fazer isso.

- Renderize todos os componentes e o que quiser "remover", oculte da tela com uma regra CSS
- Você pode levantar o estado para que o estado não fique vinculado a posição do componente atual
mas sim o de um de seus ancestrais, se esse componente ancestral não for alterado de sua posição 
o estado se manterá.
- Você pode usar uma font diferente do react para armazenar as informações e depois resgata-las
novamnte, como o todo e poderoso e altamente lindo, Local Sto, rage =D.

Não importa qual estratégia você escolha, um bate-papo com Alice é conceitualmente distinto 
de um bate-papo com Bob , portanto, faz sentido atribuir um key à `<Chat>`árvore com base 
no destinatário atual.

## Recapitular tudo na tora

- O react manterá o estado quando o mesmo componente for renderizado na mesma posição
na UI
- O estádo não é mantido na tag JSX, mas sim associado a posição do componetne na árvore de UI
- Você pode forçar uma subarvore redefinir o seu estado, atribuindo uma key prop a esse componente
- Não aninhe definições de componentes

- Para manter o mesmo estado em diferentes posições renderizadas, use a prop key e a mantenha
igual a anterior
- Alterar o key nas renderizações, reseta o estate

- A prop key, pode ser usada para, resetar o estado inicial, e para preservar o estado
em posições diferentes na arvore de UI
- Por padrão o estado é preservado quando, o componente é renderizado na mesma posição
na arvore UI.

- Existe uma maneira de dizer ao React para recriar o DOM em vez de reutilizá-lo?

Existe sim, lembre que, renderizar um compoente ou elemento com key diferente
irá recria-lo no DOM, pois são objetos de posições diferentes. Lembre que o key,
substitui a posição.

- Key diferente, recria o componente (unmount e mount)
- Key iguais mantem o estado do componente (não executa unmount mesmo sendo posição na arvore UI
diferente)

**State não é vinculado ao componente e sim a posição na arvore UI**

- Para preservar o state independente da posição, use key
- Quando a prop key existe, ela se torna o endereço do componente
- Alterar o endereço do componente redefine o estado
- Manter o endereço mantem o estado
- Sendo endereço a posição ou o valor da prop key



