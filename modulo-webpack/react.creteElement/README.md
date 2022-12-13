# React.createElement

O React.createElement é a base do react e um dos conceitos mais importantes
quando se está aprendendo react.

Um expressão JSX é uma abstração de um *React.createElement*.

Exemplos

```js
<h1>My Title</h1>
// É igual à:
React.createElement('h1', null, 'My Title')


<h1 className="title">My Title</h1>
// É igual à:
React.createElement('h1', {
  className: 'title'
}, 'My Title')
```

```js
<Title />
// É igual à:
React.createElement(Title, null)

<Title name="fernando" />
// É igual à:
React.createElement(Title, {
  name: "fernando"
})


<Title name="fernando">
  <p>A paragraph</p>
</Title>
// É igual à:
React.createElement(Title, {
  name: "fernando"
}, React.createElement('p', null, 'A paragraph'))
```

A `react.createElement` pode receber como primeiro argumento, uma string tag html válida,
ou um elemento react.

O React.createElement também pode receber como primeiro argumento, uma class react. Essa
class será passada como primeiro argumento para React.createElement, e class resultará no
elemento react retornado pelo método render. 

## Outros exemplos 

```js
React.createElement(<h1>Title</h1>, {
  data: {
    js: 'title'
  }
}, <p>Paragraph</p>)

// Equivale à:

React.createElement(react.createElement('h1', null, 'Title'), {
  data: {
    js: 'title'
  }
}, react.createElement('p', null, 'Paragraph'))
```

Um elemento react custom, sempre será processado em alguma função. Seja o método render
de uma classe react ou, um componente de função.

