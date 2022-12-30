## Props

- Props são argumentos para um componente react
- Um componente react é uma função que retorna uma marcação JSX
- As props serão usadas para alterar a saida do componente
- Você pode especificar um valor padrão para uma prop usando default parameters
`function Component ({ color, isActive = true })`
- Sempre use defult parameters como último parametro recebido
- JSX elementos filhos serão recebidos como a prop children no componente pai
- Props são readOnly, nunca altere o valor de uma prop
- Se precisa de interatividade adicione um estado
