# Hook useState por baixo dos panos.

O vídeo de referência para esse conteúdo foi tirado do canal
[queroser.ninja - Fernando Daciuk](https://www.youtube.com/@queroserninja)

[Vídeo de referência](https://www.youtube.com/watch?v=yb-fBApqWSw)

## Vamos criar nosso próprio useState

Setando valor inicial e primeira renderização:

```js
export default () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
} 

let internalState
function internalSetState (newState) {
  
}

function useState (initialState) {
  internalState = initialState
  return [internalState, internalSetState]
}
```

Aplicação completa:

```js
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
} 

let firstRender = false // forma que ferificaremos se é o primeiro render
let internalState // aonde será armazenada o valor do state

// função que iria alterar o internalState
function internalSetState (newState) {
  console.log('internal set state')
  internalState = newState // alterando o valor do state para o valor parassado para setState
  window.render() // simulando a renderização novamente do componente
}

function useState (initialState) {
  // O react tem como saber quando um componente renderiza a primeira vez
  // e fazer um comportamente diferente na primeira e na segunda vez que o componente
  // é renderizado

  console.log('use state')

  // Se não for o primeiro render, o initialValue será ignorado, e será usado
  // o valor do estado atual existente
  if (!firstRender) {
    firstRender = true
    internalState = initialState // seta o estado inicial apenas se for a primeira renderização
  }

  console.log({internalState})
  // retorna o internalState que armazena o valor do estado
  // é uma variavel de escopo léxico
  // internal set state é passada também para poder alterar o state dentro do componente
  // quando internal set state for executada, o valor do state muda e é feito uma rerenderização
  // porem o react sabera que não deve setar o valor inicial do state pois ele já foi setado
  return [internalState, internalSetState] 
}

export default App
```

## Resumindo alguns conceitos

- setState é assíncrono
- Se precisar alterar o state com base no state anterior passe uma função que retorne uma valor
- setState executa novamente o componente e faz uma nova renderização
- Sendo o segundo render o initialValue passado para setState é ingnorado e é usado
o valor armazenado "léxamente"
- Varios setStates juntos de forma síncrona terão apenas uma renderização
- Caso o setState acumulados estejam em uma função async aonde ela é pausada com await,
você pode ter mais de uma renderização pois o await pode separar a resolução dos setStates
