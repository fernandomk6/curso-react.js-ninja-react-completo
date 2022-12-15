# Configurando JSX no babel e sourcemap no webpack

- Babel

Transforma o ES6 (import export) em commonJS e JSX em react elements

- Webpack

Transforma o arquivo gerado pelo babel em um arquivo que possa ser lido pelo navegador.

## Fazendo babel reconhecer JSX

- Primeiro instalamos o babel preset react `npm install --save-dev babel-preset-react@6`.
- Adicionamos o preset ao `.babelrc`

```json
{
  "presets": ["es2015", "stage-0", "react"]
}
```

- Atualizar o `src/app` e `src/index` para usar o JSX.

## Utilizando sourcemaps

Sourcemaps serve para ajudar a debugar o código. Como o nosso codigo final é o codigo
gerado pelo babel. Caso exista algum erro no codigo do babel, o navegador vai lançar um erro 
indicando uma linha e coluna no arquivo bundle.js e não não fazemos ideia de como aquilo nasceu.

O source map vai fazer com que ao inves do navegador monstrar a linha do erro no bundle, ele mostre a linha
do erro no arquivo original codados por nós. O sourcemaps basicamente linka o arquivo final compilado
com o arquivo original. Ou seja erro na linha 10 do arquivo bundle, equivale a linha 22 no arquivo original.
Ele identifica o codigo de origem do bundle.

## Adicionando a entrada do sourcemaps no webpack.config

No arquivo `webpack.config` adicione a propriedade `devtool: 'source-map'`

```js
module.exports = {
  devtool: 'source-map', // isso aqui

  entry: path.join(__dirname, 'src', 'index'),
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  
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

Quando o webpack gerar o seu bundle, será gerado um sourcemaap daquele arquivo. É um mapa do arquivo
principal.