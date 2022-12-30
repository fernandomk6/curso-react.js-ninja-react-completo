# Manipulando Eventos

- Os manipuladores de eventos são os locais ideias para fazer efeitos colaterias
- Os eventos não precisam ser puros
- Apenas a renderização precisa ser pura
- Geralmente os manipuladores de eventos alterarão algum estado para poder 
forçar uma nova renderização

- Você pode passar uma função de manipulação de evento para um componente por meio
de props, e receber essa função no componetente e atribui-la a um evento onClick
por exemplo
- Você pode declarar um manipulador de evento no pai e passa-lo para um filho
- use `e.stopPropagation()` par ainterromper a propagação de eventos entre os
elementos ancestrais
- use `e.preventDefault()` para previnir o comportamente padrão do navegador pra
esse evento, comum em evento submit de form

