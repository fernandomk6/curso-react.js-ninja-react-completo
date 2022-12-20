# Entendendo a prop children

## Descrição 

A prop children, diferente das outras props, ela é passada dentro do
bloco de abertura e fechamento do componente. Dessa forma:

```js
<Button>Texto</Button>

// A children deve ser tratada no componente
const Button = (props) => {
  return (
    <button>{props.children}</button>
  )
}
```

A string `text` é o valor da `prop.children`.
O valor da `prop.children` é o que estiver dentro da abertura e fechamento
da tag.

Sempre que for infocado um componente custom (primeira letra maiúscula), todas 
suas props devem ser tradas o `render` do componente.
Para componentes simples (tags HTML, primeira letra minuscula), as props não precisam
ser tratadas, elas serão renderizadas diretamente na tag em seu HTML, usando o comportamente
normal esperado para tags HTML.

Exemplo componente custom:

```js
<Button isMain>Click</Button>
```

Como se trata de um componente custom, para saber o que será renderizado como elementos do dom,
temos que analisar, e tratar o método `render` do componente button. No método `render`, é
aonde os componentes custom, terão a sua renderização definida.

Exemplo componente simples:

```js
<h1 color='red'>Olá Fernando</h1>
```

Como se trata de um elemento simples, as props não serão tratadas em nenhum local, e o elemento
será renderizado exatamente como está declarado na sintaxe JSX (inclusive com essa tag color que
não existe no HTML). 

## Composição em react

As props são usadas para customizar o componente de acordo com o contexto.
Já as `props.children` são usadas para compor o compoente. Qualquer componente
que possua tags, ou componentes filhos, são componentes compostos. 
Pode se traduzir componentes compostos por "componentes aninhados".
A `prop.children` é o meio como podemos deixar nossas composições dinamicas.

```js
// app.js
class App extends Component {
  render () {
    return (
      <div>
        <h1>React App</h1>
        <Button>Botão</Button>
      </div>
    )
  }
}

// button.js
const Button = (props) => {
  console.log(props) // { children: 'botão' }
  return (
    <button>{props.children}</button>
  )
}
```

## Outra sintaxe par uso da prop children

Também é possivel setar o valor da propriedade `prop.children` usando
a sintaxe de propriedade HTML ao invés de passar os valores dentro das tag
de abertura e fechamendo. Veja o exemplo:

```js
// isso
<Button>Olá</Button>

// É igual a isso
<Button children='Olá' />

// É possivel passar qualquer dado como valor da children
// inclusive elementos jsx
<div>
  <h1>React App</h1>
  <Button children={<span>Olá</span>} />
</div>
```

Apesar de ser possivel **não é recomendado** passar valores para a propriedade `children`
do objeto `props` dessa forma. **Use sempre a sintaxe de valores entre as tagas**.

## Uso adequado da props.children

A propriedade `children` do objeto `props` deve ser usado para fazer composição de componente.
Componentes compostos.

Vejamos um exemplo:

```js
<Container>
  <header>
    <h1>React App</h1>
  </header>
</Container>
```

Todos os componentes (dados) dentro da abertura e fechamanto das tags, serão atribuidos
a propriedade children do objet props, que será passado como argumento para o 
construtor/componente `Container`.
