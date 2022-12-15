# Configurando o react hot loader

## O que é o react hot loader?

Ele serve para que suas mudanças no arquivo fonte do react sejam
imediatamente refletidas no navegador sem que precise recarregar a página.

Quando estivermos trabalhando com componentes em react, sempre que um componente
seja atualizado, apenas aquele componente seja atualizado no browser.

## O que precisamos para usar?

- Instalar o react hot loader

`npm install --save-dev react-hot-loader@3.0.0-beta.2`

- Atualizar o webpack.config

Quando o webpack gerar seus arquivos, ele possa atualizar a interface de acordo
com o react-hot-loader.

No final das contas seu `webpack.config` deve ficar assim:

```js
module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch', // react-hot-loader config
    'webpack-dev-server/client?http://localhost:3000', // react-hot-loader config
    'webpack/hot/only-dev-server', // react-hot-loader config
    path.join(__dirname, 'src', 'index')
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin() // react-hot-loader config
  ],
  
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  },
}
```

- Atualizar babelrc

```json
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": ["react-hot-loader/babel"] // react-hot-loader config
}
```

- Crair aquivo server.js para rodar com o node
- Crar a entrada `start` no package.json

Faremos isso para não depender de ficar sempre rodando o webppack-dev-server.