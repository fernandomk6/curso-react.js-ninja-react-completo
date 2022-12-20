# Composição

**Sempre use componentes puros, inclusive para composição**

Componentes/funções puras: Sempre retorna o mesmo valor dado os mesmos
parametros. Não altera, nem depende, de valores externos ao escopo da função.

## Analogia de composição de funções à composição de componentes

Compondo funções

```js
// declaração
const sum = (a, b) => a + b

// uso simples
sum(1, 2) // 3
sum(1, 3) // 4
sum(1, 4) // 5

// compondo
sum(sum(1, 1), 1) // 3
sum(sum(1, 2), 1) // 4
sum(sum(2, 3), 0) // 5
sum(sum(8, 3), 4) // 15
```

Perceba que no exemplo de composição, as funções internas são executadas
primeiros, seguindo a ordem de precedencia normal do javascript. 
Mas toda essa expressão resultarar apenas um um valor da função `sum` que foi executada
por último.

Assim também funciona para composição de componentes

```js
// declaração
const Button = (props) => (<button>{props.children}</button>)

// uso simples
<Button>salvar</Button>

// Compondo
<Button>
  <i>add-icon</i>
  <span>Adicionar 
    <strong>produto</strong>
  </span>
</Button>

// Apenas por didática, o código acima traduzido de JSX para JS
// fica dessa forma:

React.createElement(Button, null, 
  React.createElement("i", null, "add"), 
  React.createElement("span", null, "Adicionar",
    React.createElement("strong",null,"produto")
  )
);
```

Perceba que agora temos elementos aninhados como `children` do componente
`Button`. Assim como no exemplo de funções, a ordem de precedência permanesse,
as funções internas serão executadas primeiro. Mas toda essa expressão resultarar
apenas um um valor que é o componente `Button` que foi executado por último.

A composição de componente se caracteriza pelo uso de elementos ou componentes, como valor
da propriedade `children` do objeto `props`.

## Resumo

A ideia de composição é usar uma função, para formar outros valores. Usar uma função
como argumento de outras funções para assim, ter um valor diferente, dependendo de quais
funções sejam usadas.

## Exemplo de componentes composto

```js
// likeButton
import Button from './button'

const LikeButton = () => {
  return (
    <Button>Curtir</Button>
  )
}

// button
const Button = (props) => {
  return (
    <button>{props.children}</button>
  )
}

// uso
<LikeButton />
```

Esse é um objeto composto, pois ele é composto de outros componentes. O componente
`LikeButton` é composto pelo componente `Button`.
Nesse caso temos um cmponente que é composto por apenas um outro componente, mas poderemos
ter vários elementos aninhados fazendo composição. 

Cada componente react deve ser componível, ou seja, deve poder ser usado para composições
de outros componentes. Imagine que cada componente deve ser uma peça, e essa peça deve ser
encaixar em outras peças, para formar algo grande depois.

Um componente que se encaixa em outros componentes, é um componente componível.
Pode se dizer de forma simplificada que composição é o aninhamento de componentes react.

- Crie componentes genéricos
- Que possam ser usados em outros componentes
- Que possam ser usados para composição
- Para que apartir dele você possa compor outros componentes
- Para que outros componentes possam ser criados com base nele

## Exemplo de componente totalmente genérico

```js
const Button = (props) => {
  return (
    <button onClick={props.handleClick} className='button'>
      {props.children}
    </button>
  )
}
```

Perceba que esse botão pode ser usado de diferentes maneiras, basicamente quem chamar esse botão,
que irá setar o que ele vai fazer ao ser clicado, suas class, e seu conteúdo (children).

Tente sempre fazer componentes genéricos, que possam ser reaproveitados em diferentes contextos,
como esse botão.
