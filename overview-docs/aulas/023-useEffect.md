# useEffect hook

Os effects existam para que você possa se conectar a algum sistema fora do
react. O hook useEffect permite você executar algum código após a renderização.

## Antes de se aprofundar em useEffect

É preciso entender bem como os componentes react funcionam. E existem duas coisas
excenciais para entender o useEffect.

- O código de renderização: Seu JSX que renderizará as props e o estado. Deve ser puro.
- Manipuladores de eventos: Funções atreladas a eventos do navegador que são passadas
para seus elementos JSX. Podem ser impuros, podem fazer efeito colateral.

## Anote esse princípio

Qualquer ação que precise causar um efeito colateral, e não é acionada por um evento do navegador
como click, deve ser um efeito (useEffect).

Você deve usar o useEffect quando precisar causar um efeito colateral, e esse efeito colateral
não possa está atrelado a um evento. Se a sua ação causar efeito colateral, e não puder está em
um evento, crie um efeito para ela.

Os efeitos são efeitos colaterais causados pela renderização e não por um evento. Um efeito é
executado sempre após uma renderização.

## Definição

Os efeitos permitem especificar os efeitos colaterais causados ​​pela própria renderização, 
em vez de um evento específico. 

Os efeitos são executados no final do processo de renderização após a atualização da tela.

Este é um bom momento para sincronizar os componentes do React com algum sistema externo 
(como uma rede ou uma biblioteca de terceiros).

## Observação

No em todo esse texto a palavra "efeito" faz referência à **efeito colateral causado pela renderização**.

## Você pode não precisar de um efeito

Se o seu efeito não faz comunicação com nenhuma API externa. Se o seu efeito ajusta apenas
algum estado, muito provavelmente você não precisa de um efeito. Lembre-se que efeito é uma
saída de emergência.

## Como escrever um efeito?

Para escrever seu efeito siga três etapas:

1. Declare um efeito, por padrão o seu efeito será executado após a renderização
2. Especifique as dependência do efeito:

A maioria dos efeitos só deve ser executada novamente quando necessário, e não após cada renderização. 
Você aprenderá como controlar a execução do efeito especificando dependências.

3. Adicione limpeza, se necessário: 

Alguns efeitos precisam especificar como parar, desfazer ou limpar o que quer que estejam fazendo. 
Por exemplo, "conectar" precisa "desconectar", "inscrever" precisa "cancelar assinatura" e "buscar" 
precisa "cancelar" ou "ignorar". Você aprenderá como fazer isso retornando uma função de limpeza.

## Etapa 1: declarar um efeito

```js
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // O código aqui dentro irá ser executado após cada renderização
  });
  return <div />;
}
```

Toda vez que o react renderizar o componente, o callback passado para o useEffect, será executado.
Em outras palavras, o useEffect atrasa um código, para ser executado apenas apos a renderização.
Sendo a renderização a atualização do DOM com base no JSX retornado pelo componente. Sendo o componente
uma função que retorna uma marcação JSX. Sendo uma marcação JSX uma abstração de React.createElement.




