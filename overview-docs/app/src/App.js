import './App.css';

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
