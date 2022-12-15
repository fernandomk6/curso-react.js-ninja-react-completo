# Usando sistema de módulos do ES6 

## E se quisermos usar o ES6/ES2015?

- Testar `import / export`
- `import` usando `shorthand notation`

## Primeiro vamos intalar algumas dependências necessárias

- Babel - (*babeljs.io*) babel-core, babel-loader e alguns babel-preset

`npm install --save-dev babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6`

O babel será necessário para transpilar o nosso código ES6 em ES5.

Babel é uma cadeia de ferramentas usada principalmente para converter o código 
ECMAScript 2015+ em uma versão compatível com versões anteriores do JavaScript 
em navegadores ou ambientes atuais e mais antigos. Aqui estão as principais coisas 
que Babel pode fazer por você: O babel também interpreta JSX.

- Configurar o babel

Criar arquivo `.babelrc` (dotfile)
Adicionar as entradas que usaremos nesse arquivo

- Atualizar o webpack.config.js para que ele faça a utilização do babel para poder conpilar
o arquivo que será usado no broser.

Ou seja, o nosso arquivo será transformado pelo babel, e depois, pelo webpack, gerando assim
o arquivo final (finalmente...).

```js

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  }
  module: {
    loaders: [{
      
    }]
  }
}
```

Cada loader vai dizer para o webpack o que ele deve fazer com cada tipo de arquivo.
Vai ignorar o repositorio node_modules.
Include é de onde serão lido os arquivos.
Loader especifica qual loader iremos usar, no caso o loader do babel.

```js
// webpack.config.js

'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
}
```

- Atualização do projeto

Atualizar `src/app.js` para usar *export do ES2015*
Atualizar `src/index.js` para usar *import do ES2015*

*Os imports devem está na primeira linha do seu código*

Ao invés de usar module.exports usaremos *export default*

- Usando o *export default*, você pode importalos usando *import Title from './app'*

Caso não especifique um caminho, o import irá buscar uma dependencia na *node_module*.

- `import` usando `shorthand notation` para o método render do DOM

`import React from 'react'` Se não for passaod `./` ou um caminho de diretorio,
o javascript irá buscar um diretorio com esse nome na node_module.

