# Formulários: Checkbox e radio

Nessa sessão veremos as diferenças entre os checkbox e radio padrões do
navegador, e os do react.

Elementos de formulários tem uma diferença das tags nomais, pois eles 
permitem uma interatividade com o usuário. E essa interatividade, causa
uma alteração de estado que, nativamente, é controlada pelo browser, mas em
react, deve ser controlado pelo react. Vamos ver como o react controla
os elementos de formuláario checkbox e radio.

## Controlled component

Antes de seguir, vamos especificar mais detalhadamente o que são componentes
controlados. Componetes controlados são componentes que, tem o seu estado
controlado pelo react ao invés de pelo browser.

Um componente se torna controlado quando possúi a props `value` setada.

Se o componente tem a prop `value`, ele deve ser controlado pelo react.
E você deve obrigatóriamente implementar uma formar do react atualizar o estado,
caso contrário, o componente nunca poderá ser alterado.

Você pode implementar a alteração de estado por, setar um evento de "change", por
exemplo, e a cada vez que esse evento é acionado, o estado da aplicação muda,
alterando assim a props value de seu componente controlado.

## Checkbox

Em checkboxs e radios o que define se ele será controlado ou não, é a existencia
da props `checked`. Se a prop checked estiver setada no elemento ele é controlado.
E como todo elemento controlado, deve implementar uma forma de alterar o estado por
meio de um evento de mudança. Nesse caso usamos também o evento `onChange` para
alterar o estado do componente checkbox e radios.

A prop `checked` deve receber um `boolean`.

### Exemplo

- Use o evento `onChage` para controlar o estado
- Resgate o valor do checkbox por meio da expressão `e.target.checked`

```js
class App extends React.Component {
  constructor () {
    super()
    this.state = { rememberPassword: false }
    this.handleChangeRememberPassword = this.handleChangeRememberPassword.bind(this)
  }

  handleChangeRememberPassword (e) {
    const { checked: rememberPassword } = e.target
    this.setState({ rememberPassword })
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <form>
          <label>
            <input
              type='checkbox'
              checked={this.state.rememberPassword}
              onChange={this.handleChangeRememberPassword}
            />
            <span>Lembrar senha</span>
          </label>
        </form>
      </div>
    )
  }
}
```

## Radio

Exemplo de como manipular estado dos elementos radio.

### Exemplo

```js
// jsx element
<label>
  <input
    type='radio'
    name='sex'
    value='male'
    checked={this.state.sex === 'male'}
    onChange={this.handleChangeSex}
  />
  <span>Masculino</span>
</label>
<label>
  <input
    type='radio'
    name='sex'
    value='female'
    checked={this.state.sex === 'female'}
    onChange={this.handleChangeSex}
  />
  <span>Feminino</span>
</label>

// handler
handleChangeSex (e) {
  const { value: sex } = e.target
  this.setState({ sex })
}
```

