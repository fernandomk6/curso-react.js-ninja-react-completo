# O todo poderoso state

Em React, o estado é um objeto que armazena informações dinâmicas ou mutáveis 
em um componente. Ele é usado para gerenciar o estado interno de um componente 
e controlar sua renderização e comportamento.

O estado pode ser acessado e modificado pelo componente através do método 
`this.setState()`. Quando o estado é alterado, o componente é **renderizado** 
novamente para refletir as alterações.

## State é

- Um Objeto
- Gerencia o estado de um compoente
- Gerencia quando o componente deve ser renderizado novamente/atualizado
- Quando o stado é alterado, o componente é renderizado novamente

## Observações avançadas sobre o state

- `setState()` **agenda** (assíncrono) uma atualização para o objeto state de um componente.
- Quando o state muda, o componente responde renderizando novamente
- props são passados para o componente como parâmetros de funções
- state é gerenciado de dentro do componente como variáveis declaradas dentro de uma função

## Problemas ao obter valor do this.state

Em React, tanto `this.props` quanto `this.state` representam os valores **renderizados**, 
ou seja, o que está atualmente na tela.

- Chamadas para `setState` são assíncronas 
- Não confie que `this.state` vá refletir o novo valor imediatamente após chamar `setState`

Use uma **função de atualização** ao invés de um objeto se você precisa calcular 
valores baseado no state atual.

Exemplo que não funciona:

```js
incrementCount() {
  // Nota: isso *não* vai funcionar como esperado.
  this.setState({count: this.state.count + 1});
}

handleSomething() {
  // Digamos que `this.state.count` começa em 0.
  this.incrementCount();
  this.incrementCount();
  this.incrementCount();
  // Quando o React renderizar novamente o componente, `this.state.count` será 1, mas você esperava 3.

  // Isso é porque a função `incrementCount()` usa `this.state.count`,
  // mas o React não atualiza `this.state.count` até o componente ser renderizado novamente.
  // Então `incrementCount()` acaba lendo `this.state.count` como 0 todas as vezes, e muda seu valor para 1.

  // A solução é exibida abaixo!
}
```

O ponto chave aqui é: `this.state` retorna o valor atualmente em tela. Nesse caso, o state está sempre
retornando 0, pois é seu valor padrão, o componente ainda não foi renderizado, para atualizar o seu state.
Lembre-se que setState é assincrono. O `this.state` só terá seu valor atualizado, quando o componente
renderizar novamente. Como o `this.state.count` foi chamado várias vezes simultaneamente, antes do componente
ser renderizado novamente, cada execução retornou o mesmo valor, que no caso era 0. Por isso o resultado final
foi 1.

Vejamos agora como corrigir.

Exemplo que funciona:

```js
incrementCount() {
  this.setState((state) => {
    // Importante: use `state` em vez de `this.state` quando estiver atualizando.
    return {count: state.count + 1}
  });
}

handleSomething() {
  // Digamos que `this.state.count` começa em 0.
  this.incrementCount();
  this.incrementCount();
  this.incrementCount();

  // Se você ler `this.state.count` agora, ele ainda seria 0.
  // Mas quando o React renderizar novamente o componente, ele será 3.
}
```

Essa abordagem passando uma função para o state, é altamente recomendada quando, você precisa
atualizar o state, baseado em seu valor anterior, sem correr o risco, não obter o valor esperado,
por conta do componente não ter sido renderizado.

- Componente é renderizado, state é setado.
- `setState` é invocada, **agenda** uma alteração de state, renderiza o componente e em 
seguida, atualiza o state.

## props X state

- Ambos props e state são objetos JS simples
- Tanto as props quanto as mudanças de estado acionam uma atualização de renderização
- Ambos props e state são determinísticos. Se o seu componente gera saídas diferentes 
para a mesma combinação de props e state, você está fazendo algo errado (funções puras).

### Isso vai dentro de props ou state

- Se um componente precisa alterar um de seus atributos em algum momento, 
esse atributo deve fazer parte de seu estado (state);
- caso contrário, deve ser apenas um suporte para esse componente (props).

### Props

- `props` (abreviação de properties) são a **configuração** de um Componente.
- Eles são recebidos de cima e imutáveis ​​no que diz respeito ao Componente que os recebe.
- Um Componente não pode mudar suas props, mas é responsável por juntar as props 
de seus Componentes filhos.

### State

- O estado começa com um valor padrão quando um Componente é montado e depois sofre mutações 
no tempo (principalmente geradas por eventos do usuário);
- É uma representação serializável* de um ponto no tempo; um mutável;
- Um componente gerencia seu próprio estado **internamente**;
- Mas - além de definir um estado inicial - não tem nada a ver com o estado de seus filhos. 
- Você poderia dizer que o estado é privado.

| | Props | State |
| --- | --- | --- |
| Pode obter o valor inicial do componente pai? |	Sim |	Sim |
| Pode ser alterado pelo componente pai? | Sim | Não |
| Pode definir valores padrão dentro do componente? |	Sim | Sim |
| Pode mudar dentro do componente? | Não | Sim |
| Pode definir o valor inicial para componentes filhos? |	Sim |	Sim |
| Pode mudar em Componentes filhos? |	Sim	|Não |

## Este componente deve ter estado

- `state` é opcional. 

Como o estado aumenta a complexidade e reduz a previsibilidade, é preferível um 
componente sem estado.

Mesmo que você claramente não possa ficar sem estado em um aplicativo interativo, 
você deve evitar ter muitos *Stateful* Components (componentes com estado).

## Tipos de componente

- Stateless Components (Componente sem estado); Apenas props, sem estado. 
Não há muito acontecendo além da `render()` função e toda a lógica deles 
gira em torno das props que recebem. Isso os torna muito fáceis de 
seguir (e testar).

- Stateful Component (componente com estado); Ambos props e state. Também os 
chamamos de gerentes de estado. Eles são responsáveis ​​pela comunicação 
cliente-servidor (XHR, web sockets, etc.), processando dados e respondendo a 
eventos do usuário. Esse tipo de logística deve ser encapsulado em um número 
moderado de Stateful Components, enquanto toda a lógica de visualização e 
formatação deve ser transferida para o maior número 
possível de Stateless Components.

## Props vs state 2

### Props

- props são passados ​​para o componente
- OK, então os props "vêm de cima"
- É possivel setar props padrão `Component.defaultProps = {}`
- O valor das props nunca devem mudar durante o ciclo de vida dos componetes
- Um componente que usa apenas props são puros

### State

Como props, statecontém informações sobre o componente. 
No entanto, o tipo de informação e como ela é tratada é diferente.

Por padrão, um componente não tem estado.

Quando devo usar o state em um componente?

> Quando um componente precisa acompanhar as informações entre as renderizações, 
o próprio componente pode criar, atualizar e usar o estado.

O state é setado diretamente no estado, e deve ser alterado por ele, ou um de seus
filhos.

Exemplo de uso do de um state: Botão que registra quantas vezes você
clicou nele.

```js
class Button extends React.Component {
  constructor () {
    super()
    // estado inicial (pode ser setado com uso dos dados passados como props)
    this.state = {
      count: 0,
    }
  }

  updateCount () {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    })
  }

  render () {
    return (
      <button onClick={() => this.updateCount()}>
        Clicked {this.state.count} times
      </button>
    )
  }
}
```

- state é criado no componente
- stateé mutável, props não
- setState deve receber uma função como callback, pois ele é assíncrono
- setState atualiza o objeto de estado e renderiza novamente o componente automaticamente

Nunca faça `this.state.count = this.state.count + 1`, pois alterar o estado dessa forma,
não fará o componente renderizar novamente. Sem use `setState` para alterar o estado,
recebendo um callback.

Também não faaça isso:

```js
// Não faça isso
this.setState({
  count: this.state.count + 1
})
```

Atualizar o estado dessa forma, não leva em conta a natureza assíncrona do `setState`,
e pode em alguns momentos gerar resultados indesejados.

Ao invés use:

```js
// Faça isso
// this.setState({
//   count: this.state.count + 1
// })

this.setState((prevState) => {
  return { count: prevState.count + 1 }
})
```

setState é assíncrono, e lidamos com ele com callbacks!

## Overview passos renderização com state

1. O componente é inicializado e state.countdefinido como 0

```js
this.state = {
  count: 0,
};
```

2. O componente renderiza, com “Clicado 0 vezes” como o texto do botão

`Clicked {this.state.count} times`
  
3. O usuário clica no botão

**clique!**

4. updateCounté chamado, vinculado a esta instância do componente

```js
onClick={() => this.updateCount()}
```

5. updateCountchama setStatecom um retorno de chamada para aumentar o contador do valor do contador do estado anterior

```js
this.setState((prevState, props) => {
  return { count: prevState.count + 1 }
});
```

6. setStatedispara uma chamada pararender

**Mágica react**

7. O componente é renderizado, com "Cliquei 1 vez" como o texto do botão

`Clicked {this.state.count} times`

## Resumo

`props` contém informações definidas pelo componente pai (embora os padrões possam ser definidos) 
e não devem ser alterados.

`state` contém informações “privadas” para o componente inicializar, alterar e usar por 
conta própria.

> ...props são uma maneira de passar dados de pai para filho. 
...O estado é reservado apenas para interatividade, ou seja, dados 
que mudam com o tempo.

## Boas práticas no uso do state

O state deve ser definido no elemento pai mais comum a todos os elementos que consomem 
o state.

## De volta ao daciuk...

## Acessando o state

Em componente de class, podemos acessar o state, como acessamos as `props`, por meio
do `this.state`.

O objeto `this.state` é um objeto, e ele deve representar o estado do componente.
Sendo estado um ponto no tempo, que pode ser alterado. Algo interativo, que, geralmente
será alterado de acordo com alguma ação do usuário.

Tudo que muda, que é dinâmico, faz parte do estado. E esse estado deve ser gerenciado
pelo objeto `state`, que é propriedade do `this`, dentro da declaração da class do
componente. 

- Componente *stateful* é um componente que manipula estado, possí estado.
- Componente *stateLess* é um componente que não tem estado.
- Estado é pertencente ao componente no qual ele é declarado.
- Mas pode ser alterado pelos componentes filhos.
- Quando um state é alterado, todo o componente que possui aquele state
é renderizado novamente.

## Exemplo, inicializando o state em um componente e usando-o em componente de class

- O constructor é o primeiro método executado quando uma classe é instânciada
- O state inicial do componente é setado no constructor

O estado inicial é chamado de *InitialState*.

```js
class App extends Component {
  constructor () {
    // Obrigatorio invocar o super para executar o constructor
    // do Component que está sendo extendido
    super()
    // state inicial
    this.state = {
      text: 'Fernando'
    }
  }

  render () {
    // Renderização usando o state
    return (
      <div>
        <h1>Olá {this.state.text}</h1>
      </div>
    )
  }
}
```

- Nunca altere um estado manualmente `this.state.count = 1`
- Sempre use `this.setState` ou o hook `setState` retornado pelo hook `useState`

## Exemplo alterando state em class components

```js
class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Fernando'
    }
  }

  render () {
    console.log('método render executado')
    return (
      <div>
        <h1>Olá {this.state.name}</h1>
        <button onClick={() => {
          console.log('executando setState')
          this.setState({
            name: 'Rogério Ceni'
          })
        }}>Me chame de Rogério Ceni</button>
      </div>
    )
  }
}
```

*Click*

1. Função setState é executada
2. Valor do state muda
3. Componente renderizado novamente (método render executado novamente para refletir na
tela as alterações de state)

## Erro comum ao usar setState

```js
<button onClick={() => {
  console.log('incrementar m 2')
  
  // this.state.count retorna 0, agenda a alteração do state a rerenderização
  this.setState({
    count: this.state.count + 1
  })

  // this.state.count continua retornando 0 pois o valor ainda não foi alterado
  this.setState({
    count: this.state.count + 1
  })
}}>Incrementar</button>
```

- `this.state.data` sempre vai retornar o dado renderizado em tela no momento da execução

