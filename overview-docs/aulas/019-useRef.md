# Conhecendo o useRef

É semelhante ao estate, tem seu valor preservado igual ao state,
porém, não força uma nova renderização. É util para preservar informações
entre renderizações, informações essas que não são necessárias visualmente,
como o interval de retorno de um setInterval. Você pode adicionar o interval
de retorno em uma ref, e quando executar o evento para parar o interval, você
tem acesso ao ref. Ref é semelhante a uma variavel que é persistida entre
renderizações, porém diferentemente do state, é mutavel e não força rerenderizações.

```js
const intervalRef = useRef(null);
```

Veja o retorno de `useRef` como uma variável `let` que é mutável. A diferença é que
seu valor é persistido dentre as renderizações. A alteração de um valor
useRef não gera uma nova renderização do componente.

O retorno de useRef é um objeto normal javascript.

```js
const intervalRef = useRef(null);
// interval é um objeto e seu valor é armazenado na propriedade current
{
  current: null
}
```

## Diferenças entre ref e state

Refs são uma “saída de escape” que você não precisará com frequência.

| Refs | State |
| --- | --- |
| `useRef(initialValue)retorna{ current: initialValue }` | `useState(initialValue)retorna o valor atual de uma variável de estado e uma função de definição de estado ( [value, setValue])` |
| Não aciona a nova renderização quando você a altera. | Aciona a renderização novamente quando você a altera. |
| Mutável — você pode modificar e atualizar currento valor de fora do processo de renderização. | “Imutável” — você deve usar a função de configuração de estado para modificar as variáveis ​​de estado para enfileirar uma nova renderização. |
| Você não deve ler (ou escrever) o currentvalor durante a renderização. | Você pode ler o estado a qualquer momento. No entanto, cada renderização tem seu próprio instantâneo de estado que não muda. |

## Importante sobre os Refs

Não leia ou altere o valor de Ref.current durante a renderização.

- Você não deve ler (ou escrever) o currentvalor durante a renderização
- useState para valores que são renderizados e useRefs para valores que devem ser
persistidos (guardados/lembrados/armazenados), porém, não renderizados

## Quando usar refs?

- Armazenando IDs de tempo limite
- Armazenar outros objetos que não são necessários para calcular o JSX
- Se seu componente precisa armazenar algum valor, mas não afeta a lógica de renderização, escolha refs

## Práticas recomendadas para referencias refs

- Trate refs como usa saída de emergência. Use-o apenas em ultimo caso, assim também como
useEffect, devem ser usados apenas em ultimos casos. Sempre prefira state, e apenas o que
for estritamente necessário.
- As refs são úteis quando você trabalha com referencias expernas como API do navegador
- Não leia ou escreva `ref.current` durante a renderização
- As referencias são complemtante siíncronas, diferentemente do state que é assincrono

O react não se importa com o que você faz com refs e com o seu conteúdo.

## Refs e DOM

Você pode apontar uma ref para qualquer valor.
Porém o uso mais comum de refs é apontar uma ref para a referencia de um objeto do DOM.
Isso é util quando você deseja focar uma elemento do DOM.

Quando você passa uma referência para um ref atributo em JSX, como `<div ref={myRef}>`, 
o React colocará o elemento DOM correspondente em `myRef.current`.

## Recapitular

- Você não precisa de refs com frequencia, eles são usados como uma saída de emergência para
armazenar valores que devem ser persistidos entre renderizações e não não renderizados
- Uma ref é um objeto simples javascript com uma propriedade current que pode ser
lida e escriva. Semelhante a uma let
- Você pode pedir ao react para lhe dar uma referencia usando o hook useRef
- Alterar um ref não força uma rerenderização
- Não leia ou escreva ref.current durante a renderização

Variáveis ​​regulares como let timeoutIDnão “sobrevivem” entre re-renderizações porque cada 
renderização executa seu componente (e inicializa suas variáveis) do zero. 
Você deve manter o ID de tempo limite em outro lugar?

Nesse caso usaremos o useRef para preservar o timeoutId dentre as renderizações.
