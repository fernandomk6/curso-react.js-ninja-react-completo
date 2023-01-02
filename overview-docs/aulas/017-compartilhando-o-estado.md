# Compartilhando o estado entre componentes

- Quando desejar compartilhar um estado entre componentes (sincroniza-los),
você deve elevar o estado para um ancestral comum, e passar esse estado para
cada um dos componentes, junto das funções de manipulação de estado.
- Componentes controlados são os componentes que são controlados por props
- Componentes não controlados são os controlados pelo estado