# Configurando ferramenta lint

## Adicionar dependencias `standard` e `standard-loader`

```
npm install --save-dev standard standard-loader@4
```

## Editar o webpack.config para usar o `standard`

Pre loaders são executado antes dos loaders. Os loaders são executados
antes do webpack.

```js
'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  
  module: {
    // new
    preLoaders: [{ 
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  },
}
```

## Instalar webpack-validator para validar erros no webpack e mapear com o lint

```
npm install webpack-validator -D
```

Configurar webpack.config para validar o objeto exportado

```js
'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator') // new

// agora o objeto exportado é o retorno da função validate
module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  },
})
```

