# Ciclo de vida: Fluxo de atualização

Vamos falar sobre os métodos de `updating` do ciclo de vida 
dos componentes react.

## componentWillReceiveProps(nextProps)

Esse método é executado quando o componente recebe alguma propriedade.

componentWillReceiveProps é um método de ciclo de vida do React que é chamado 
quando um componente está prestes a receber novas props. Ele é chamado antes 
do componente receber as novas props e recebe as novas props como argumento.

Esse método pode ser usado para atualizar o estado de um componente com base 
nas novas props que ele receberá. É também um bom lugar para realizar qualquer 
cálculo ou preparação necessária que dependa das props que estão chegando.

