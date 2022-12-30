# State: Memória do componente

- Váriaveis locais não persistem entre renderizações
- O valor de um estado é persistido entre as renderizações, por isso é 
chamado de mémoria
- Mesmo executando a função do componente novamente, o valor do estado anterior
será persistido, e não será substituído, por isso ele é chamado memória.

- Alterações em variáveis locais não acionarão uma nova renderização
- Alterar um estado, aciona uma nova renderização

Para atualizar um componente com novos **dados**, duas coisas precisam
acontecer:

1. Persistir os dados entre as renderizações
2. Uma função responsável por alterar o valor do estado e, acionar novamente
a renderização, mostrando os novos dados

O **useState** hook, fornece essas duas coisas.

1. Uma variável de estado, para persistir os dados entre as renderizações
2. Uma função para atualizar o valor do estado e acionar uma nova renderização
com os dados atualizados

- Todas as funções que começam com a palavra `use` é um hook do react
- Hooks são funções especiais fornecidas pelo react
- Os hooks devem sempre ser declarados em nível superior, ou seja, nas primeiras
linhas do bloco de sua função componente que usará os hooks
- Hooks não pode chamar hooks dentro de condições os loops
- Hooks são funções, mas pense neles como um `import` de recurso, que devem
sempre ser chamados no topo da sua função

- Quando você chama useState está dizendo ao react que ele deve se lembrar de algo 
(persistir esse valor dentre as renderizações).

- Sempre que seu componente é executado, useState é renderizado. E ele sempre vai
retornar o valor do estado atual, e uma função para alterar o valor desse estado
e chamar uma nova renderização

1. Seu componente renderiza na primeira vez. Como você passou 0 to useStatecomo 
valor inicial para index, ele retornará [0, setIndex]. React lembra 0 é o valor do estado mais recente.

2. Você atualiza o estado. Quando um usuário clica no botão, ele chama setIndex(index + 1). 
index é 0, então é setIndex(1). Isso diz ao React para lembrar que indexé 1 agora e aciona outra 
renderização.

3. A segunda renderização do seu componente. O React ainda vê useState(0), mas como o React 
lembra que você definiu indexcomo 1, ele retorna [1, setIndex].

E assim por diante!

## Múltiplas variáveis de estado em um mesmo componente

Você pode ter quantas variáveis de estado quiser em seus componentes.


- Use uma variável de estado quando um componente precisar “lembrar” 
algumas informações entre as renderizações
- As variáveis ​​de estado são declaradas chamando o useStatemétodo Hook
- Você pode ter mais de uma variável de estado. Internamente, o React os combina por ordem
- O estado é privado para o componente. Se você renderizar em dois lugares, cada 
cópia terá seu próprio estado.

