# Ciclo de vida dos componentes

## Fluxos

- mounting (montagem) e unmounting (desmontagem)
- updating (atualização)

Cada fluxo, tem um método que pode ser executado, quando o componente atinge,
tal ciclo de vida.

## mounting e unmounting métodos

Mounting pode ser entendido como renderizado e unmounting como removido da tela.

- componentWillMount: Antes do componente ser montado
- componentDidMount: Depois do componente ser montado
- componentWillUnmounting: Antes do componente ser desmontado
- componentDidUnmounting: Depois do componente ser desmontado

## updating métodos

- componentWillReceiveProps(nextProps): Antes de receber novas propriedades
- shouldComponentUpdate(nextProps, nextState) => bool: Esse método deve dizer se o componente deve
ou não, ser atualizado
- componentWillUpdate(nextProps, nextState): Antes do componente ser atualizado
- componentDidUpdate(prevProps, prevState): Depois do componente ser atualizado
