# Ciclo de vida: mounting e unmounting (montagem e desmontagem)

Vamos conhecer agora alguns métodos que são executados em certos momento
do ciclo de vida dos componentes react.

- mount significa, está no DOM/foi inserido no DOM/montado.
- unmount significa que esse elemento já não existe no DOM, foi removido/desmontado.

## componentWillMount

- É executado antes do componente ser montado

## componentDidMount (executa apenas uma vez)

- É executado depois do componente ser montado

## componentWillUnmount

- É executado antes do componente ser desmontado

Esse método deve ser usadado para evitar vazamento de memória,
como por exemplo limpar um interval. Qualquer processo
que ocorre em decorrencia da remoção desse componente, deve ser 
encerrado nesse método.

