# Talvez você não precise de um efeito

Os efeitos são uma saída de emergência do paradigma react.
Ele permite você sair do react e sincronizar com algum sistema
externo.

Se não existe nenhum sistema externo, você não precisa de um efeito.
A remoção de efeitos desnecessários tornará seu código mais facil de 
dar manutenção e de ler.

## Como remover efeitos desnecessários?

Existem dois casos comuns aonde você não precisa de um efeito.

1. Você não precisa de um efeito para transformar dados para a renderização.

**Transforme todos os dados no nível superior de seus componentes**.

Por exemplo, digamos que você queira filtrar uma lista antes de exibi-la. 
Você pode se sentir tentado a escrever um Effect que atualiza uma variável 
de estado quando a lista muda. No entanto, isso é ineficiente. Quando você 
atualiza o estado do seu componente, o React primeiro chama as funções do 
seu componente para calcular o que deve aparecer na tela. Então o React irá 
comitar essas alterações no DOM, atualizando a tela. Então o React executará 
seus efeitos. Se o seu Efeito também atualizar imediatamente o estado, isso 
reiniciará todo o processo do zero! Para evitar passagens de renderização 
desnecessárias: transforme todos os dados no nível superior de seus componentes.
Esse código será executado automaticamente sempre que seus props ou estado 
mudarem.

2. Você não precisa de Effects para lidar com eventos do usuário.

**Eventos do usuário sempre devem ser tratados nos manipuladores de evento**.

Por exemplo, digamos que você queira enviar uma /api/buysolicitação POST e mostrar 
uma notificação quando o usuário comprar um produto. No manipulador de eventos de 
clique do botão Comprar, você sabe exatamente o que aconteceu. No momento em que 
um efeito é executado, você não sabe o que o usuário fez (por exemplo, qual 
botão foi clicado). É por isso que você normalmente lidará com eventos de 
usuário nos manipuladores de eventos correspondentes.

Resumo:

- Se precisa transformar dados: tranforme-os no nível superior do componente
e não em um efeito.
- Se precisa lidar com evento: use manipuladores de eventos.

E lembre-se: **você precisa de eventos para sincronizar com sistemas externos**.
Se está lidando apenas com o paradigma react, você não precisa de efeitos.

## Alternativas ao useEffect

- Resetando um estado:

Você pode resetar um estado usando uma key. Lembre-se que, quando a key é alterada,
o componente vai ser desmontado. O react entende que aquele componente não existe mais. E
criará um novo com a nova key, com os estados padrões. Então vocÊ não precisa limpar um
estado com um efeito.

- Ajustando algum estado quando uma prop muda

Use simples condicionais para fazer algo quando algo mudar

```js
// items é recebido como prop
const [prevItems, setPrevItems] = useState(items);
if (items !== prevItems) {
  setPrevItems(items);
  setSelection(null);
}
```

Armazenar informações de renderizações anteriores como essa pode ser difícil de 
entender, mas é melhor do que atualizar o mesmo estado em um efeito.

**Importante**:

Quando você atualiza um componente durante a renderização, o 
React descarta o JSX retornado e tenta renderizar novamente 
imediatamente. Por isso, esse exemplo acima, não causará duas renderizações.
Pois antes do return ser executado, as atualizações de estado serão aplicadas,
atualizando assim o retorno.

## Cadeias de efeitos

Troque efeitos encadeados por lógica simples.

Ao invés disso:

```js
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount(c => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound(r => r + 1)
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    alert('Good game!');
  }, [isGameOver]);

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.');
    } else {
      setCard(nextCard);
    }
  }
// ...
```

Faça isso:

```js
function Game() {
  const [card, setCard] = useState(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);

  // ✅ Calculate what you can during rendering
  const isGameOver = round > 5;

  function handlePlaceCard(nextCard) {
    if (isGameOver) {
      throw Error('Game already ended.');
    }

    // ✅ Calculate all the next state in the event handler
    setCard(nextCard);
    if (nextCard.gold) {
      if (goldCardCount <= 3) {
        setGoldCardCount(goldCardCount + 1);
      } else {
        setGoldCardCount(0);
        setRound(round + 1);
        if (round === 5) {
          alert('Good game!');
        }
      }
    }
  }

  // ...
```

## Executando um efeito quando o app iniciar

Não faça isso pois, em desenvolvimento, o seu codigo executará duas vezes.
Lembre-se que o componente após a montagem, ele é remontado.

```js
function App() {
  // Roda sempre que o componente for montado, e apos a primeira renderização
  useEffect(() => {
    loadDataFromLocalStorage();
    checkAuthToken();
  }, []);
  // ...
}
```

Prefira usar uma let global para forçar o componente a executar apenas
uma vez a lógica desejada.

```js
let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Roda apenas uma ver por inicialização
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);
  // ...
}
```

Você também pode deixar essa lógica dentro de seu módulo javascript.
Antes da renderização do aplicativo:

```js
// logica executada antes do aplicativo iniciar
if (typeof window !== 'undefined') { // Verifica se está rodando no browser
   // ✅ Roda apenas uma ver por inicialização
  checkAuthToken();
  loadDataFromLocalStorage();
}

// componente principal
function App() {
  // ...
}
```

Quanto menos chamadas brutas useEffectvocê tiver em seus componentes, 
mais fácil será manter seu aplicativo.

Sempre que possível use hooks custom para lidar com useEffects comuns
e reaproveitar lógicas.

## Recapitular

- Se você pode calcular algo durante a renderização, não precisa de um efeito.
- Para armazenar dados caros use `useMemo` ao invés de effect
- Para redefinir um estado, passe uma key prop
- O código que precisa ser executado porque um componente foi exibido deve estar 
em Efeitos, o restante deve estar em eventos.
- Se você deseja alterar o estado de vários componentes, faça-o em um
único evento.
- Sempre que precisar sincronizar variáveis de estado entre componentes, eleve o estado.
- Você pode buscar dados com efeitos, mas precisa de uma função de limpeza
para evitar "condições de corrida".

## Importante

- Use key para resetar estado em componentes e não em elementos. Sendo elementos
as tags HTML e componentes as suas funções que retornam marcações JSX.
  