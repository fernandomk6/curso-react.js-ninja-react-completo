# Mantendo componentes puros

- Todos os seus componentes devem ser puros
- Para um componente ser puro ele deve:
  - Fazer apenas uma unica coisa principio da responsabilidade única
  - Retornar sempre o mesmo valor para as mesmas entradas
- A renderizzação pode ocorrer a qualquer momento, portanto, a renderização dos componentes
não podem depender de fatores externos
- Você não deve alterar nenhum dos parametros de seu componente
- Sempre expresse a sua lógica em seu componente
- Quando precisar alterar coisas, use os eventos
- Como ultimo recurso para efeitos colaterais, use o hook `useEffect`
