# Conhecendo a prop key

## Um pouco sobre props e a prop key

Em React, a palavra "prop" é um termo curto para "property", e refere-se a 
uma forma de passar dados de um componente pai para um componente filho. 

Neste caso, o termo "key" se refere a uma prop especial que é usada para 
identificar de forma única um elemento particular em uma **lista** de elementos. 
Não é incomum ver o termo "key" usado em conjunto com o termo "prop" em código React.

Por exemplo, veja o seguinte código, que define uma lista de elementos usando a função 
`map`:

```js
const listItems = items.map((item, index) => (
  <li key={item.id}>{item.name}</li>
))
```

Neste exemplo, a prop "key" está sendo usada para identificar de forma **única** cada 
elemento "li" na lista especificando um identificador único para cada item no array items. 
Isso é importante porque o React usa a prop "key" para otimizar o rendering de listas, 
mantendo o rastreamento de quais elementos foram alterados, adicionados ou removidos.

Vale a pena mencionar que a prop "key" não é passada para o próprio componente 
filho, mas sim é usada pelo React internamente para manter o rastreamento dos 
elementos na lista. Portanto, o componente filho não tem acesso à prop "key".

A prop key é usado pelo react para criar um identificador unico para aquele item em
uma lista de item. Geralmente, os react elements detro de um array devem der a prop key.

## Conhecendo a prop key do react

### propriedade style html no jsx

Em JSX o atributo style é passado como objeto. Style inline nesse caso.

```js
<div style={{ 
  backgroundColor: 'red',
  color: 'green'
}}>Olá</div>
```

### Elementos que não tenham filhos em JSX

Elementos JSX que não tenham filhos, podem ser simplificados para uma
tag de auto fechamento, mesmo que representem tags HTML que não tenham auto fechamando.
Por exemplo:

```js
<div style={{
  backgroundColor: 'red',
  width: '100px',
  height: '100px'
}} />
```

Perceba que a div acima fechou nela mesmo. Isso não é permitido em HTML mas em JSX sim.

## Exemplo usando a prop key

```js
class App extends React.Component {
  render () {
    return (
      <div>
        {['blue', 'red', 'yellow', 'green'].map((color, index) => (
          <Square color={color} key={index} />
        ))}
      </div>
    )
  }
}
```

*Caso tente renderizar um array e não passe a prop key para cada item, um erro será lançado no console*

Lembrando que arrays são renderizados. Cada item vai ser renderizado, sem separadores.

Apenas:

- string
- numbers
- arrays (seus itens sem separadores. Use a prop key)

São renderizados no DOM.

## Tipos dados e renderização React

- Null: Não é renderizado
- Undefined: Não é renderizado
- Booleans: Não são renderizados
- Strings: São renderizadas como esperado
- Numbers: São renderizados como string
- BigInt: Não renderizado
- Symbol: Não são renderizados
- Objetos: Lança um erro, objetos não são permitidos como childrens
- Arrays: Renderiza cada item de acordo com o tipo, sem semparadores
- Funções (referencias/declarações): Não são renderizadas

| São renderizados | Não são renderizados |
| --- | --- |
| Strings | Null |
| Numbers | Undefined |
| Array (Itens sem separador) | Booleans |
| | BigInt |
| | Symbol |
| | Objetos (Error) |
| | Funções (Referencias) |

## Por que a key existe

Ela existe por que o react ele vai renderizar apenas o que foi alterado em seu
componente. Ou seja se você tiver uma componente que renderiza 10 itens,
e você excluiu um desses itens, o react não vai renderizar todos os 9 itens
novamente. Ele vai comparar os itens existentes com os itens atuais, e vai fazer
apenas as mudanças necessarias, no caso, remover o item que foi removido.
E para que essa comparação ocorra é necessário um identificado unico para mapear
cada item. Esse identificado unico é a prop key. **Nunca duplique a prop key**.

Sempre tenha certeza que o dado passado como key é único.

**Nunca utilize/altere a prop key no componente filho**. Apenas o react deve usar
a prop key. Você apenas passa ela como prop para os items de uma lista e não lida
mais com ela em canto nenhum.
