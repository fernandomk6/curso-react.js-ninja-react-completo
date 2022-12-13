# Criando uma aplicação em react

- Instalar as dependencias do react e react-dom
- Criar um componente em `src/app.js`
- Importar esse componente em `src/index.js`

```js
// app.js

'use strict'

const React = require('react')

const Title = React.createClass({
  render() {
    return React.createElement('h1', null, 'React Webpack')
  }
})

module.exports = Title
```

```js
// index.js

'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const Title = require('./app')

ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)
```