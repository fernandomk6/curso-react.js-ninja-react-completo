# Manipulando o DOM com Refs

## O que iremos aprender 

- Como acessar um no dom gerenciado pelo react usando o atributo ref
- Como o ref atributo jsx se relaciona com o hook useRef do react
- Como acessar o no dom de outro componente 
- Em quais casos é seguro manipular o dom

## Obtendo uma referência para um no dom

Primeiro crie uma constante para armazenar um objeto de referência com useRef.

```js
const myRef = useRef(null)
```

Depois passe esse objeto como valor da prop `ref` de um componente

```js
<Component ref={myRef}></Component>
```

Lembre-se o useRef retorna um objeto com uma única propriedade chamada `current`.

- Inicialmente myRef será null
- Quando o react criar o no no dom, o react atribuirá a propriedade current de myRef
a referência ao no dom

## Exemplo focando em uma entrada de texto

```js
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
```

Ao declarar `<Component ref={anyRef} />` ou melhor, `ref={anyRef}`, é a mesma coisa que fazer:

```js
const myRef = useRef(null)
// ...
<Comp ref={myRef} />

// É semelhante à:
const myRef = useRef(null)
myRef.current = document.getElementById('you-componet')
```

Quando um objeto de retorno de useRef é usado como valor da prop ref,
a referencia desse componente vai ser atribuída a propriedade current
do objeto retornado pela useRef quando o componente for criado.

*Você pode declarar quantas refs quiser.*

## Como gerenciar uma lista de referência quando não sabemos exatamente quantas refs precisaremos?

Imagine que você precisa armazenar cada referência de uma LI, porém, você
não tem como saber quantas LIs você terá, pois serão criadas dinâmicamente.

- A primeira forma de resolver isso é armazenando apenas a ref do componente pai

Com a referencia do no dom do componente pai, você consegue encontrar as referência dos filhos,
com o bom e velho `Element.children` ou coisas do tipo. Porém essa abordagem é **desencorajada**
pois pode ser facilmente quebrada.

- Outra opção é passar uma função para o ref atributo:

Vamos ver um exemplo para entender como isso funciona.

```js
import { useRef } from 'react';

export default function CatFriends() {
  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  // Adiciona um objeto Map na prop current do objeto ref
  // Retorna o objeto Map (referência) que foi atribuído a current prop do objeto ref
  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    // retorna um objeto Map do javascript puro (Map constructor)
    return itemsRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>
          Tom
        </button>
        <button onClick={() => scrollToId(5)}>
          Maru
        </button>
        <button onClick={() => scrollToId(9)}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          {catList.map(cat => (
            <li
              key={cat.id}
              {/* Uma função foi passada como valor do atributo ref */}
              ref={(node) => {
                // map === itemsRef.current, que é um objeto Map
                const map = getMap();
                if (node) {
                  // Se existir o no, cria um item no objeto Map
                  // com a chave id e o valor sendo a referência do no
                  map.set(cat.id, node);
                } else {
                  // Se não existir no, remove o item do objeto map que está
                  // armazenado em itemsRef.current
                  map.delete(cat.id);
                }
              }}
            >
              <img
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}
```

Você pode passar um callback para a prop ref. Esse callback recebe como argumento o no dom
da iteração atual. Lembre-se de usar callback refs apenas quando for renderizar um array de elementos.

## Acessando os no dom de outro componente

Até agora apenas usamos o ref prop em elementos HTML, não usamos prop ref em componentes.
A prop ref não funciona da mesma forma em componentes.

```js
<Component ref={myRef} /> // Não funcionará
<input ref={myRef} /> // Funciona como explicado anteriormente
```

Agora iremos aprender a armazenar o no dom de um componente.

Os componentes da função não podem receber refs. 
As tentativas de acessar esta referência falharão.

Isso acontece por que por padrão o react não permite que um componente acesse os nós
dom de outro componente.

```js
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```

O MyInputcomponent é declarado usando forwardRef. 
Isso o habilita a receber o inputRef de cima como o segundo ref argumento que é 
declarado após props

MyInputela mesma passa o refque recebeu para `<input>` dentro dela.

```js
import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
```

## Quando o react anexa o ref

- Durante a renderização, o react chama os componentes para descobrir o que deve aparecer na tela
- O commit, react aplica as alterações no dom

*Você não deve acessar as refs durante a renderização*

O ref são atribuídos depois do react atualizar o DOM, ou seja depois da fase commit.

*Geralmente você acessará as refs em um manipulador de evento*.

## Práticas recomendadas para manipulação de dom

- React é uma saída de emergencia, use-o apenas quando precisar sair do react. Exemplos
de uso são: gerenciamento de foco, posição de rolagem ou chamadas de API externas
como id de timers do navegador
- Limite-se a ações não destrutivas ao manipular dom com ref, foco e rolagem são exemplos de
ações não destrutivas. *Nunca altere o conteúdo do objeto dom diretamente via refs*.

## Recapitular 

- As refs são genéricas, variaveis que são persistidas entre renderizações, mas geralmente 
são usadas para armazenar referências a objetos do DOM para ações não destrutivas
- Refs com nos dom são válidos apenas para elementos HTML e não componentes, para obter a referência
de um componente use `forwardRef`
- Nunca altere o dom diretamente com refs
- Use forwardRef função importada do react para poder obter referencia do no de um
componente
- Use flushSync para executar alterações de state de forma síncrona
