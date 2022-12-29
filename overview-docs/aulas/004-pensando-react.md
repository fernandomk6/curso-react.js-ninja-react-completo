# Pensando React

Quando você construi uma aplicação em React você vai dividir essa construção
em 5 etapas.

1. Etapa: 1, dividir a interface do usuário em uma hierarquia de componentes
2. Etapa: 2, crie uma versão estática no React
3. Etapa: 3, encontre a representação mínima, mas completa, do estado da interface do usuário
4. Etapa: 4, identifique onde seu estado deve ficar
5. Etapa: 5, adicionar fluxo de dados inverso

Nesse tutorial, usaremos essas etapas para criar uma aplicação. Uma tabela de 
produtos pesquisáveis com React.

## Comece com uma maquete

Essa maquete nos dará o que é necesário para passar por cada uma das etapas.
Você deve saber o que sua aplicação vai fazer, no nosso caso, iremos exibir 
uma tabela de produtos e filtra-los. Então precisamos de uma lista de produtos
para exibir em tela. Vamos supor que você tem uma API JSON, que retorne esses dados.

```js
[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
```

A outra parte da maquete, é um esboço do leiaute. Esse leiaute pode ser passado por um
designer. Essa maquete visual, nos dará o que é necessário para dividir nossa interface em 
componentes, que é a nossa etapa 1.

![](https://beta.reactjs.org/images/docs/s_thinking-in-react_ui.png)

A partir daqui, vamos passar por cada etapa, desenvolvendo nossa aplicação tabela de produtos.
Veja o diretório "filterable-product-table".

## Etapa 1: dividir a interface do usuário em uma hierarquia de componentes

Começe desenhando quadrados e nomeando-os sobre sua maquete de design.

Use a seguinte técnica para identificar o que deve ser um componente: 
**princípio da responsabilidade única**

Use as mesmas técnicas para decidir se deve criar uma nova função ou objeto. 
Uma dessas técnicas é o **princípio da responsabilidade única**, ou seja, um componente 
idealmente deve fazer apenas uma coisa. Se acabar crescendo, deve ser decomposto 
em subcomponentes menores.

Utilize também de seu modelo de dados, para decidir o que deve ser um componente.
Separe seus componentes de forma que cada um, corresponda a uma parte de sua estrutura
de dados base, no nosso caso, aquele JSON de produtos.

Vejamos um exemplo:

![](https://beta.reactjs.org/images/docs/s_thinking-in-react_ui_outline.png)

1. `FilterableProductTable (cinza)`, contém o aplicativo inteiro
2. `SearchBar (azul)`, recebe a entrada do usuário
3. `ProductTable (lavanda)`, exibe e filtra a lista de acordo com a entrada do usuário
4. `ProductCategoryRow (verde)`, exibe um título para cada categoria
5. `ProductRow (amarelo)`, exibe uma linha para cada produto

Agora, organize a hierarquia dos componentes

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

## Etapa 2: Crie uma versão estática no React

Primeiro crie toda a sua estrutura visual dos componentes decididos na etapa anterior de 
forma estática, ou seja, sem adicionar nenhuma interatividade, sem nenhum estado.

Para criar a sua versão estáticas, crie seus componentes, e passe as props de forma
estática para eles. Otimizando a composição, e sempre isolando os componentes com a
técnica de **princípio da responsabilidade única**.

Você pode começar a construir de cima para baixo, ou de baixo para cima,
ou seja, começando com o componente, pai de todos depois escrevendo os
decendentes, ou, pode também começar pelo ultimo decentente, e depois ir 
escrevendo os pais, até o ultimo ancestral.

Nesse exemplo vamos começar de cima para baixo. Mas para aplicações grandes recomendamos
começar de baixo para cima.

## Etapa 3: Encontre a representação mínima, mas completa, do estado da interface do usuário

Para tornar a interface do usuário, precisaremos usar o estado `state`.
Pense no estado como um conjunto de dados alteráveis, que seu componente precisa
se lembrar. 

O mais importate para estruturar o estado da aplicação é manter o **DRY** Don't Repeat
Yourself. Descubra a representação **mínima** do estado de sua aplicação, e os demais
estados, sejam tirados dos estádos mínimos. Por exemplo, se estiver criando uma
lista de compras, poderá criar um estado e armazenar a lista. Mas não precisa criar
outro estado para armazenar o número de itens, você pode saber o número de itens
usando o estado da lista e verificando o length.

Agora pense em todos os dados dessa aplicação.

1. A lista original de produtos
2. O texto que seu usuário digitou 
3. O valor do checkbox
4. A lista filtrada de produtos

Agora vamos descobrir quais desses devem mesmo ser um estado. Primeiro
identifique os que não são estado, de acordo com essas técnicas.

- Ele permanece inalterado ao longo do tempo? se sim, não é um estado
- É recebido do pai como prop? se sim não é estado
- Você pode calculalo com base em estados existente ou com props do componente? se
sim, definitivamente nao é estado

O que restar, provavelmente é estado.

Vamos analisar um por um novamente.

- A lista original de produtos, não é estado por que permanece inalterada com o longo
do tempo
- O texto que seu usuário digitou é estado por que muda com o tempo e não pode ser
calculado de nada
- O valor do checkbox, é um estado por que não pode ser calculado de nada e 
muda com o tempo
- A lista filtrada de produtos, não é estado por que pode ser calculada apartir da
lista original de produtos que é passada como prop do pai

Isso significa que teremos apenas dois estados: O valor digitado e o valor do checkbox

### Diferença entre props e estado

- Props são como argumentos passados para funções
- Estado é como a memória do componente

Geralmente um ancestral comum mantem um estado, e compartilha-o com os descendentes,
jutamente com as funções de manipulação de estado.

Sempre que um estado é alterado, o componente que possui o estado é renderizado novamente
juntamente dos seus decendêntes, lembrando-se de seu estado atual conforme alterado
anteriormente.

## Etapa 4: identifique onde seu estado deve ficar

Para cada parte do estado em seu aplicativo:

1. Identifique cada componente que renderiza algo com base nesse estado.
2. Encontre o componente pai comum mais próximo - um componente acima de 
todos eles na hierarquia.
3. Decida onde o estado deve morar:
  1. Muitas vezes, você pode colocar o estado diretamente em seu pai comum.
  2. Você também pode colocar o estado em algum componente acima de seu pai comum.
  3. Se você não conseguir encontrar um componente onde faça sentido possuir o 
  estado, crie um novo componente apenas para manter o estado e adicione-o em 
  algum lugar na hierarquia acima do componente pai comum.

Na etapa anterior, identificamos que nosso aplicativo deve ter 2 estados, e nesse
caso especifico, eles sempre andam juntos, então é mais facil identificar em qual 
componente o estado deve ficar.

Agora vamos executar nossa estratégia para estado.

1. Identifique os componentes que usam estado:
  - ProductTAble precisa filtrar a lista de produtos com base no estado (o que foi digitado e checkbox)
  - SearchBar precisa exibir o estado (o que foi pesquisado e o checkbox)
2. Encontre um pai comum: O primeiro componente pai que ambos os componentes compartilham é
FilterableProductTable.
3. Decida aonde o estado deve ficar: Manteremos o estado em FilterableProductTable

Portanto, o estado ficaram em FilterableProductTable.

Adicione estado ao componente usando o hook useState, Os hooks lhe permitem se conectar com o
ciclo de renderização dos componentes.

## Etapa 5: Adicionar fluxo de dados inverso

Atualmente, seu aplicativo é renderizado corretamente com props e estado fluindo para baixo na 
hierarquia.

Porém agora você precisa alterar o estado, e para isso vamos fazer o fluxo inverso.
O componente filho, deve alterar o estado do seu pai comum, aonde o estado
está inserido.

Por convenção as funções de alteração de estado quando passadas como props devem usar o
`onSomethingChange={setSomething}`. Essa é uma convenção para nomeclaturas de funções
que alterarão estado, principalmente por meio de eventos do usuário.

```js
const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form>
      <input 
        type='text' 
        placeholder='Search...' 
        value={filterText} 
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input 
          type='checkbox' 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}
```

Agora o aplicativo funciona totalmente!

