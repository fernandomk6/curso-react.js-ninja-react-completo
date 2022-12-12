# Criando elementos aninhados

Vimos na aula anterior que podemos criar elementos react usando o `React.createElement`, passando
o tipo, as props, e a prop childre como terceiro argumento.

## O ReactDOM.render

O ReactDOM.render renderiza o elemento na tela dentro de outro elemento.
Caso exista algum conteudo dentro desse outro elemento, o conteudo existente
é removido e adicionado apenas o novo.

```js
const h1 = React.createElement('h1', null, 'Hello World React')
const h2 = React.createElement('h2', null, 'Título secundário')

// h1 renderizado na tela
ReactDOM.render(h1, document.getElementById('app')) 
// h2 rederizado na tela e removido conteudo anterior (h1)
ReactDOM.render(h2, document.getElementById('app')) 
```

## Como fazemos para criar um elemento dentro do outro?

No exmplo anterior criamos apenas um h1 com um texto dentro, mas se quisermos criar uma ul
e dentro dela vários li. Como faremos?

Criando um span dentro do h1.

```js
const app = document.querySelector('#app')
const span = React.createElement('span', null, 'texto do span')
const h1 = React.createElement('h1', null, span)

ReactDOM.render(h1, app)
```

Basta inserir o reactElement como argumento (children) do elemento que ela será filho.

Um elementoReact que contém outros elementos react, pode ser chamado de **componente**.
Um componente é um reactElement formado por varios children reactElement.

## Criando uma lista com react

```js
const app = document.querySelector('#app')
const item1 =  React.createElement('li', null, 'Item1')
const item2 = React.createElement('li', null, 'Item2')

const items = React.createElement('ul', null, item1, item2)

ReactDOM.render(items, app)
```

## Reanderização React

O react renderiza arrays. Cada item do array será renderizado, sem divisiores.

```js
const app = document.querySelector('#app')
const item1 =  React.createElement('li', { key: 1 }, 'Item1')
const item2 = React.createElement('li', { key: 2 }, 'Item2')

const items = React.createElement('ul', null, [item1, item2])

ReactDOM.render(items, app)
```

Perceba que o chidren do items é um array. E esse array está sendo renderizado.
Quando um array é renderizado, cada item do array é renderizado sem separador.

## Tipos dados e renderização React

- Null: Não é renderizado
- Undefined: Não é renderizado
- Booleans: Não são renderizados
- Strings: São renderizadas como esperado
- Numbers: São renderizados como string
- BigInt: Não renderizado
- Symbol: Não são renderizados
- Objetos: Lança um erro, objetos não são permitidos como childrens
- Arrays: Renderiza cada item de acordo com o tipo, sem semparadores
- Funções (referencias/declarações): Não são renderizadas

| São renderizados | Não são renderizados |
| --- | --- |
| Strings | Null |
| Numbers | Undefined |
| Array (Itens sem separador) | Booleans |
| | BigInt |
| | Symbol |
| | Objetos (Error) |
| | Funções (Referencias) |

