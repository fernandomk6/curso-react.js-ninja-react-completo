## Começo rápido

### Criando e aninhando componentes

- Componentes

Os aplicativos react são feitos por componentes. Componente é uma parte, da interface do
usuário, que possuí sua prória lógia e aparência. 

Um componente pode ser pequeno como um botão, ou grande como uma página inteira.

Componentes react são funções que retornam uma marcação JSX.

```js
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

Componentes podem ser aninhados.

```js
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

Observe que `MyButton` começa com letra maiúscula, é dessa forma que identificamos um componentes react.

Os componentes react são escrito sempre com a primeira letra maiúscula. Enquanto as tags HTML,
são sempre escritas com a primeira letra minúscula.

### Escrevendo marcação com JSX

Como já vimos anteriormente, uma aplicação react é formada por componentes. 
Componentes são funções que retornam uma marcação JSX.

Mas afinal, o que é esse JSX?

Em JSX todas as tags devem ser sempre ter fechamanto. Mesmo que no HTML não precise informar, como
por exemplo a tag `<img src="" >` pode ser escrita dessa forma, sem fechamento. Já em JSX
isso **não é possível**. 

Em JSX, todas as tags devem ter fechamento.

Como já vimos, um componente é uma função que retorna uma marcação JSX.
Essa marcação retornada não pode ter 2 elementos containers, ou, ser dois irmãos.
Devem obrigatóriamente, conter apenas um container, um pai. Dessa forma:

```js
function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </div>
  );
}
```

### Adicionando estilos

No react, especificamos uma class, usando a palavra `className` ao invés de `class` padrão HTML.

```js
<img className="avatar" />
```

Então, em um arquivo separado, você escreve suas regras de estilo CSS.

```css
/* no arquivo CSS */
.avatar {
  border-radius: 50%;
}
```

O react não exige uma forma padrão para adicionar o CSS em seu projeto.
A forma mais simples é, adicionar uma tag link css, em seu index.html.
Porém, existem outras formas de adicionar css, mas, por hora, focaremos na
forma mais simples, pois nosso foco é apenas react.

### Exibindo dados

JSX premite que você escreva, marcações, em arquivos js. Porém, existe uma forma, de,
dentro da marcação, "escapar de volta", ao javascript. Usando a sintaxe de `{ expressão }`.

```js
return (
  <h1>
    {user.name}
  </h1>
);
```

Tudo o que está dentro do par de chaves, será interpretado como javascript, e seu valor de retorno,
será exibido dentro da marcação.

Você também pode "escapar para o javascript", em atributos.

```js
return (
  <img
    className="avatar"
    src={user.imageUrl} // aqui
  />
);
```

Perceba que, o atributo `src`, agora recebe o resultado de uma interpretação javascript `user.imageUrl`.

Perceba também que não foi passado aspas, para o atributo, pois, a interpretação do javascript
por meio do par de chaves, já adiciona implicitamente as aspas.

Isso aqui não é necessário e é um erro.

```js
return (
  <img
    className="avatar"
    src="{user.imageUrl}" // Não funcionará como esperado
  />
);
```

Valores dinâmicos, atribuidos a atributos JSX, devem ser sempre passados sem aspas, usando
apenas o par de chaves, e deixando-o retornar o valor.
O JSX implicitamente colocará as aspas.

Qualquer tipo de expressão javascript é permitida dentro dos par de chaves, desde que, claro, retornem
um valor válido a ser usado na marcação.

JSX trabalha sempre com: 

- strings
- numbers
- componentes
- arrays dos tipos acima

Todos os outros tipos de dados, não serão renderizados em tela, ao usar a marcação.

Veja a lista abaixo:

- Strings: São renderizadas como esperado
- Numbers: São renderizados como string
- Componentes/elementos: São renderizados conforme marcado em JSX
- Arrays: Renderiza cada item de acordo com o tipo 
(strings, numbers e componentes), **sem semparadores**

- Null: Não é renderizado
- Undefined: Não é renderizado
- Booleans: Não são renderizados
- BigInt: Não renderizado
- Symbol: Não são renderizados
- Objetos: Não são renderizados e lança um erro.

- Funções (referencias/declarações): Não são renderizadas

Veja a tabela abaixo:

| São renderizados | Não são renderizados |
| --- | --- |
| Strings | Null |
| Numbers | Undefined |
| Componentes/elementos | Objetos (Error) |
| Array (Itens sem separador) | Booleans |
| | BigInt |
| | Symbol |
| | Funções (Referencias) |

### Renderização condicional

no react, você pode usar qualquer sintaxe de condição válida, em javascript. Como `ifs`,
curtos circuitos, ou ternários.

Usando ifs.

```js
let content;

if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

return (
  <div>
    {content}
  </div>
);
```

Usando ternário:

```js
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

Caso não precise de else, pode usar um curto circuito:

```js
// isLoggedIn === true
// <AdminPanel /> será renderizado
<div>
  {isLoggedIn && <AdminPanel />} 
</div>
```

*Consulte operações de curto circuito para mais detalhes.*

Toda essa abordagem condicional para renderização, atambém funciona para
atribuir valores de à atributos de seus componentes.

```js
<Button color={user.adm ? 'red' : 'blue'}>Click</Button>
```

### Renderizando listas (arrays)

Como já dito anteriormente, arrays, quando renderizadas, renderizarão todos os seus itens,
**sem separadores**.

Lembrando que apenas alguns tipos de dados podem ser renderizados.

- Strings
- Numbers
- Componentes/elementos

Veja um exemplo:

```js
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}> {/* Observe o atributo key */}
    {product.title}
  </li>
);

// listItems, armazena um array de elementos

return (
  <ul>{listItems}</ul>
);

// A ul acima, renderizará o array "listItems". O array renderizará cada
// elemento sem separados, ou seja, todos os lis, serão renderizados,
// como filhos do ul.
```

Cada item de um array, deve obrigatóriamente ter o atributo `key`, contendo um valor único,
dentre os items do array. 

A ausência desse atributo em items de array, ou a duplicação
de valores de atributos `key` dentro do mesmo elemento, gerarão um erro.

Veja outro exemplo de renderização de arrays:

```js
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

### Respondendo a eventos

Podemos responder a eventos por passar um atributo de evento, em nossos componentes ou elementos.

```js
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

Perceba que foi setado uam propriedade de evento de forma inline, no button, na marcação JSX.
Quando esse evento acontecer, a função que foi passada como referência, será executada.

### Atualizando a tela

Para atualizar um informação de forma dinâmica na tela, você deve, atribuir
essa informação a um `state`.

Primeiro, importe o `useState` do react.

```js
import { useState } from 'react';
```

Agora você pode declarar variáveis de estado, em seu compoente.

`state`, é um estado, que pode ser observado em seu componente. 
Como po exemplo, o estado ligado, desligado, claro, escuro e etc.
Tudo o que pode ser alterado, e observado, é um estado.

Declarando uma variável de estado:

```js
function MyButton() {
  const [count, setCount] = useState(0);
```

Você obterá duas coisas:

- O estado atual (count) 
- E a função que permite atualizá-lo (setCount). 

Você pode dar a eles qualquer nome, mas a convenção é chamá-los como [something, setSomething].

A primeira vez que o botão for exibido, count será 0 porque você passou 0 para useState(). 

Quando você quiser mudar de estado, chame setCount() e passe o novo valor para ele. 
Clicar neste botão incrementará o contador:

```js
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

O React chamará sua função de componente novamente. 
Desta vez, countserá 1. Então será 2. E assim por diante.

Cada vez que `setSomething()` é executada, seu componente será, renderizado
na tela novamente.

A renderização é, a atualização do retorno JSX de seu componente, em relação ao
que está sendo exibido na tela anteriormente.

O estado é pertencente ao componente em que é declardo, e só pode ser manipulado
por ele. Mas pode ser compartilhado com elementos filhos, a fim de customizar
a exibição das informações de estado.

```js
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

### Usando hooks

As funções que começam com `use`, são chamadas de hooks. `useState` é um hook integrado,
fornecido pelo react.

Você também pode criar seus próprios hooks customizados.

- Você só pode chamar Hooks no nível superior de seus componentes (ou outros Hooks). 
- Se você quiser usar useStateem uma condição ou loop, extraia um novo componente 
e coloque-o lá.

Sempre mova o estado para cima, para o pai, comum entre todos os filhos, que necessitam 
daquele estado. E apenas, compatilhe os dados e as funções de alteração, entre os
filhos.

Os pai mais antigo, comum a todos os filhos deve, criar os estados e as funções
de manipula-los, e compartilhar ambos com os filhos.

