# Renderizando componentes com funções puras

## O que são funções puras?

Em javascript uma função pode ser considerado pura quando: retorna
sempre os mesmo valores para os mesmos argumentos e não causa efeito colateral.

### Efeito colaretal:

Em JavaScript, um efeito colateral é qualquer alteração no estado externo de 
um programa que é causada por uma função. 
Isso pode incluir, por exemplo, modificar uma variável global, escrever em 
um arquivo ou fazer uma chamada de rede (requests).

Pode se resumir efeito colateral como qualquer:

- Alteração de estado externo da função
- Modificar uma variavel global
- Criar/alterar ou deletar um arquivo
- Fazer requisições

Se a sua função faz alguma coisa dessas, ela está causando efeito colateral, logo
não é uma função pura. Função pura não causam efeitos colaterais.

Em outras palavras uma função pura 

- Não altera o estado externo
- Não depende de nenhum valor externo que esteja fora da propria função.

### O que é estado em javascript

Em JavaScript, o estado é qualquer informação que é mantida e alterada pelo 
seu programa durante a execução. O estado pode ser armazenado em variáveis, 
objetos e outras estruturas de dados.

Por exemplo, o seguinte código cria uma variável counter que é incrementada a 
cada vez que a função incrementCounter é chamada. Nesse caso, o estado é 
representado pelo valor da variável counter:

```js
let counter = 0;

function incrementCounter() {
  counter++;
}

```

O estado é importante em JavaScript porque permite que o seu programa mantenha e altere 
informações ao longo do tempo. No entanto, é importante gerenciar o estado de maneira 
eficiente e evitar dependências excessivas entre as partes do seu programa, 
pois isso pode tornar o código mais difícil de entender e manter.

### Exemplos de funções puras

Por exemplo, a seguinte função é pura, pois sempre retorna o quadrado de um número:

```js
function square(x) {
  return x * x;
}
```

Por outro lado, a seguinte função não é pura, pois depende de um valor externo y 
e também altera o estado externo, atribuindo um novo valor a y:

```js
let y = 10;

function addToY(x) {
  y = y + x;
  return y;
}
```

### Por que usar funções puras?

As funções puras são úteis porque são mais fáceis de testar e depurar, pois o resultado 
sempre será o mesmo para os mesmos argumentos e não dependem de nenhum estado externo. 
Além disso, as funções puras também são mais fáceis de entender, pois não há efeitos 
colaterais que possam afetar o comportamento da função de maneira inesperada.

## Formas de renderizar componentes no react

- React.createClass
- Funções puras
- Classes ES2015

## Sobre funções puras

- O que são funções puras
- Como criar nossos componentes usando funções puras

Funções puras vem do conceito de programação funcional e ela deve retornar o mesmo
valor sempre que você passar os mesmos parametros.

Em resumo definifivo, funções puras não modificam nada externo a ela, nem usam nada
externo a ela. Seu escopo é totalmente fechado. Ela deve retornar um valor puro. Um valor
que dependa apenas das variaveis de seu escopo incluindo os parametros recebidos.
Não deve usar nenhum dado externo. Dado externo incluem qualquer variavel vinda de um 
escopo diferente do atual ou valores vindo de requisições.

Função pura depende apenas dos dados criados nela mesmo, não de pendende de nenhum
dado externo, sendo dado externo uma variavel de escopo superior ou o resultado
de um request.

Qualquer função que não é pura, é impura.

*Funções puras não modificam nada externo a ela, nem usam nada
externo a ela e sempre retornam o mesmo valor para o mesmos dados.*

## Funções puras dentro do react

**Importante**:

O método render deve ser um método puro. Não deve modificar nem usar dados externos.
Deve retornar sempre o mesmo resultado para o mesmo argumentos. O método render
pode ser entendido como o retorno de sua função-componente.

## Tranformando componentes class em componentes de funções

Com classes:

```js
'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps () {
    return {
      name: 'Desconhecido',
      lastname: 'Sem sobrenome'
    }
  },
  render () {
    return <h1>Olá eu sou o {`${this.props.name} ${this.props.lastname}`}!</h1>
  }
})

export default Title
```

Com função:

```js
const Title = (props) => {
  return <h1>Olá eu sou o {`${props.name} ${props.lastname}`}!</h1>
}

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}
```

`Title.defaultProps` deve receber um objeto propsDefault, caso alguma
das props usados no objeto não exista no objeto props recebido como parametro,
o dado do defaultProps será usado. Caso não exista na porp parametro nem na defaultProps
propriedade do componente, undefinend será atrivuido a prop usada.
