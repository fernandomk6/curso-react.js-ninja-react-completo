# Eventos

O javascript roda em uma unica tread, e para não bloquear o
acesso do usuário, temos que trabalhar com javascript assíncrono.

Os eventos em javascript são assíncronos.

Iremos aprender agora como o react trabalha com eventos javascript.

## Como criar eventos em nossos componentes

O evento é passado como uma priproedade (props).
Os eventos em react são usados de forma inline.

Exemplo de evento sendo passado para componente:

```js
<button onClick={() => console.log('clicou')}>click</button>
```

Perceba que a propriedade foi passada diretamente para o elemento que
será renderizado na tela. O mesmo não funciona com componentes de função
ou de class. Veja o exemplo.

```js
<MainButton onClick={() => console.log('clicou')} />
```

Nesse caso como a propriedade `onClick` está sendo passada para um componente "custom",
ele deve ser tratado na função ou classe de implementação do componente.

O evento sempre deve ser atrellado ao elemento de nivel mais baixo (uma tag HTML).
Os componentes custom, receberão a prop `onClick` como prop, e atribuirão,
a algum elemento HTML válido, para vincular esse evento.

O ciclo completo de vinculação de eventos a elementos custom seria o seguinte:

```js
// render
<MainButton onClick={() => console.log('clicou')} />

// definição do componente MainButton
const MainButton = (props) => {
  return(
    <button onClick={props.onClick}>Click em mim</button>
  )
}
```

Resumindo, os eventos devem ser atrelados a elementos de nivel mais baixo (tags HTML).

- Eventos passado como props para componentes custom, devem ser atrelados a uma tag HTML em sua 
implementação.

- Eventos atrelados a tag HTML não precisam ser trados.

## O que precisamos saber

- Os eventos são passados inline
- Podemos usar arrow functions
- Os nomes dos eventos sempre será `onNomeDoEvento`, sendo a primeira letra do evento maiúscula.
- Mesmo que os eventos sejam passados como se fossem inline no JSX, mas quando o JSX é transpilado
para javascript, o evento inline é atribuído a um listener
