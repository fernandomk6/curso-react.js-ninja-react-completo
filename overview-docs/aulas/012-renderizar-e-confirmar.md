# Renderizar e confirmar

A entrega da renderização do componente tem 3 etapas:

1. Acionar um render (entregar o pedido do hóspede na cozinha)
2. Renderizando o componente (preparando o pedido na cozinha)
3. Comprometer -se com o DOM (colocar o pedido na mesa)

Vamos ver cada um desses pontos

## Acionar um render

Existem apenas 2 motivos que fazem a renderização de um componente

1. Primeira renderização (load)
2. Alteração de seu state ou de um de seus ancestrais

## Atualizando a interface

A chamada da função setSomething agenda uma nova renderização com os dados de
estado atualizados. Todas as renderizações provenientes de funções set,
são enfileiradas. Caso exista mais de uma renderização enfileirada, apenas uma renderização
será feita.

- O React não toca no DOM se o resultado da renderização for o mesmo da última vez

