# Renderização condicional

- Você controla a lógica de suas ramificações com operadores javascript `ifs, &&, ||, ? :`
- Lembre que JSX é uma expressão então pode ter seu valor retornado em um 
operador ternário
- Você pode armazenar uma marcação JSX em uma variável e, depois usa-la dentro de outro
JSX, dentro de parenteses `<Comp>{componenteArmazenado}</Comp>`
- Geralmente use ternário ou curto circuítos para atribuições dinâmicas
- Para ramificações simples use if tradicional

## Exemplos

```js
// se usuario for truthy, a1 conterá o nome dele, se não apenas olá
const Title = user ? <h1>{use.name}</h1> : <h1>Olá</h1>

// se user for truthy, navBar será retornado
// ao usar curto circuito sempre se certifique que a expressão
// a esquerda é um boolean para evitar renderizações inesperada
{user && <NavBar />}

// se user for falsy, FormLogin será retornado.
// se user for truthy, o valor de user será retornado 
// ao usar curto circuito sempre se certifique que a expressão
// a esquerda é um boolean para evitar renderizações inesperada
{user || <FormLogin>}
```

