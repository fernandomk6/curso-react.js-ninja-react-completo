# Formulários: Textarea

Algumas diferenças entre o HTML e o JSX

## Textarea no react

- O `textarea` deve ser uma tag de auto fechamento `<textarea />`
- O value do `textarea` deve está na prop `value`: `<textarea value='Texto inicial' />`
- A existência da prop `value` torna o elemento controlado
- Deve ser implementado uma função para lidar com a alteração do estado a cada
interação do usuário.

Todos os campos de formulário que tiverem a prop `value`, devem ter setado o evento `onChange`
para lidar com as alterações de estado a cada interação do usuário.

## Exemplo

```js
// constructor 
this.state = {
  initialText: 'Olá eu me chamo...'
}

// render
<textarea
  value={this.state.initialText}
  onChange={(e) => this.setState({
    initialText: e.target.value
  })}
/>
```

