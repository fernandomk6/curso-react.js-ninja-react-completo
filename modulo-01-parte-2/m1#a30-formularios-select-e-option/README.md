# Formulários: Select e option

Um select controlado se caracteriza pela existência da prop `value`,
existente na tag `select`, desta maneira:

## Controlled component (select-one)

```js
<select value={0}>
  <option value={0}>Patinho de borracha</option>
  <option value={1}>Juninho</option>
  <option value={2}>Iniciante</option>
  <option value={3}>Intermediário</option>
  <option value={4}>Avançado</option>
  <option value={5}>Toguro</option>
</select>
```

A `option` selecionada por padrão, será aquela que tiver o `value` idêntico
ao `value` do `select`.

Como temos um componênte controlado, precisamos implementar uma função de atualização
de estado, para que a cada interação do usuário, a interface reaja de acordo.

## Alterando o estado

Para isso, valor implementar uma função que vai lidar com o evento de mudança. 
A `handleLevelChange`:

```js
class App extends React.Component {
  constructor () {
    super()
    this.state = { level: 0 }

    this.handleLevelChange = this.handleLevelChange.bind(this)
  }

  handleLevelChange (e) {
    const { value: level } = e.target
    this.setState({ level })
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <form>
          <select value={this.state.level} onChange={this.handleLevelChange}>
            <option value={0}>Patinho de borracha</option>
            <option value={1}>Juninho</option>
            <option value={2}>Iniciante</option>
            <option value={3}>Intermediário</option>
            <option value={4}>Avançado</option>
            <option value={5}>Toguro</option>
          </select>
        </form>
      </div>
    )
  }
}
```

## Multiple (select-multiple)

É possivel habilitar a seleção de múltiplos options. Vejamos um exemplo:

```js
<select multiple value={[1, 2]} onChange={this.handleLevelChange}>
  <option value={0}>Patinho de borracha</option>
  <option value={1}>Juninho</option>
  <option value={2}>Iniciante</option>
  <option value={3}>Intermediário</option>
  <option value={4}>Avançado</option>
  <option value={5}>Toguro</option>
</select>
```

- Observe a prop `multiple` do `select`
- Observe a prop `value` do `select`

A existência da prop multiple faz com que, seu select agora possa ter mais de uma opção
selecionada. E por conta disso, o `value` deve ser um array contendo os values
correspondente aos options que devem ser, por padrão selecionado.

Valos implementar agora, a mudança de estado.

```js
handleLevelChange (e) {
  const newLevels = Array.from(e.target.selectedOptions, option => option.value)
  this.setState({ level: newLevels })
}
```

Explicando o que ocorre aqui.

- Primeiro, para selecionar múltiplos options segure ctrl e click
- `Array.from(e.target.selectedOptions, option => option.value)`: A função `Array.from`
cria um novo array com os itens passado como primeiro argumento. O segundo argumento é uma
função `array.proprotype.map`, o valor retornado pela `Array.from` será o valor retornado
pela função map, que foi passada como segundo argumento (quando existir). Quando não
existir, o valor de retorno será com base apenas no primeiro argumento.

Basicamente está sendo iterado sobre todos os options do select, por meio da propriedade
`selectedOptions` que é um "array like". E por conta da função map, cada iteração retorna
o `value` do option. Sendo assim, no final teremos um array com todos os values que estão
selecionados. Depois é so fazer um `setState` para renderizar as alterações.
