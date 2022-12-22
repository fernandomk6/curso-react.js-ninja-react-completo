# Introdução a formulários

- inputs em JSX devem sempre ter fechamento `<input />`

## Inputs

Em formulários DOM, elementos como `input` e `textarea`, tem o seu estado
atualizado automáticamente, a cada interação do usuário. Em react, essa
atualização de estado não ocorre automáticamente. Você precisa inplmentar
um evento, que lide com a interação do usuário em seus "inputs". Use
`setState` para atualizar o estado do input (ou qualquer outro campo de entrada 
de formulários) a cada iteração.

Um componente de entrada de dado em formulários, que tem seu estado atualizado
pelo react e não pelo navegador, é chamado de "componente controlado" ou 
*controlled component*.

## Exemplo de uso de formulário com component controlados

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    )
  }
}
```

Perceba que o estado do componente é alterado no evento `onChange` do input.

## Lidando com alteração de um input e verificando o valor anterior e o valor novo

```js
class App extends React.Component {
  constructor () {
    super()
    this.state = { name: 'pedro' }
    this.handleChangeName = this.handleChangeName.bind(this)
  }

  handleChangeName (e) {
    const { value: name } = e.target
    this.setState((prevState) => {
      console.log({ prevState: prevState.name })
      console.log({ newState: name })

      return { name }
    })
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <form>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </form>
      </div>
    )
  }
}
```

## SyntheticEvent

Em eventos javascript puro, cada dunção atrelada a um evento, recebe como argumento,
um objeto event. Em react isso também acontece, porém, o objeto "event" que é parassado
para as funções de evento, é um "synthetic event", ou seja é um objeto diferente do event do
javascript puro.

A maioria das propriedade do objeto event "normal", existe no "synthetic event" do react, como
`stopPropagation` e `preventDefault`.

Cada objeto "synthetic event" tem as seguintes propriedades:

- boolean | bubbles
- boolean | cancelable
- DOMEventTarget | currentTarget
- boolean | defaultPrevented
- number | eventPhase
- boolean | isTrusted
- DOMEvent | nativeEvent * (objeto nativo de evento do navegador)
- void | preventDefault()
- boolean | isDefaultPrevented()
- void | stopPropagation()
- boolean | isPropagationStopped()
- void | persist()
- DOMEventTarget | target
- number | timeStamp
- string | type * (tipo de evento click, change etc)

[Eventos suportados](https://pt-br.reactjs.org/docs/events.html#supported-events)


