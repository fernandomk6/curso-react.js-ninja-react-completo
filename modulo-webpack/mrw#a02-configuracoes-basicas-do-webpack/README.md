# Configuraçãoes básicas do webpack

## Instalando as dependências do webpack

- Criar package.json
- Instalar webpack como dependência de desenvolvimento

- Criar package.json (npm init)
- Instalar webpack `npm install --save-dev webpack@1`

## Configurações básicas do webpack

- Criar arquivo webpack.config.js
- Configurar para ler um arquivo e gerar o bundle (ler um arquivo fonte, e gerar um pacote ES5 estático)

```js
'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index')
}
```

Usamos path para configurar o caminho para qualquer sistema operacional.
Entry é o arquivo js de entrada, apartir dele será gerado o bundle.

- Uma breve explicação sobre exports e module.exports do node.

```js
// user.js

module.exports.getName = () => {
  return 'Fernando'
}

// index.js

const user = require('user')

console.log(user.getName)
```

Require retorna o valor do objeto module.exports no arquivo especificado.

O require vai resgatar o "module.export" valor do arquivo que tiver o caminho expecificado.
Caso seja um caminho inválido o arquivo será procurado dentro da pasta node_modules.

module.exports, também pode ser substituído por exports.

Esse sistema é chamado de "commomJS", usa require para importar valores e "module.exports" ou apenas
"exports", para exportar valores.

exports é uma referência a module.exports.

- Configuração final do webpack.config.js

```js
'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'src', 'dist'),
    filename: 'bundle.js' 
  }
}
```

Sendo entry o arquivo que será interpretado pelo webpack,
o arquivo de resultado será gerado no que for especificado
na propriedade output.

- Precisamos criar nosso src/index.js
- Gerar um bundle com o webpack

Sete um script webpack em seu package.json para executar o comando `webpack`.
Execute `npm run webpack`

- Criar o arquivo index.html e adicionar o bundle
