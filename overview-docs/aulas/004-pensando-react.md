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

