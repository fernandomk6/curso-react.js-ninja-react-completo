# Problemas ao duplicar a prop key

## Resumo sobre a propriedade key

Em resumo, você deve usar a propriedade key quando estiver trabalhando com 
listas de elementos dinâmicos no React, para ajudar o React a identificar 
de maneira única cada elemento da lista. Isso é especialmente importante 
quando você adiciona, remove ou modifica elementos da lista, pois a 
propriedade key ajuda o React a determinar qual elemento foi alterado e 
como atualizar o componente de maneira eficiente.

## Problemas ao duplicar a prop key

CAso você duplique uma key, o react renderizará apenas um elemento. O react 
renderiza um elemento por key. Para o react se dois elementos tem a mesma 
key, eles são o mesmo elemento, logo o react renderiza apenas um deles.

Em suma: **nunca duplique suas prop key**. Sempre tenha certeza de usar um 
valor unico como key para cada elemento de uma lista (array).
