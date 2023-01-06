# forwardRef

`forwardRef` permite que seu componente exponha um nó DOM ao componente pai com uma referência.
Basicamente ele permite você passar a refêrencia de um componente.

Usando useRef e a prop ref ele ementos JSX correspondentes a tags HTML, é simples
setar a referência aos nós DOM. Porém isso vale apenas para **tags HTML**. Para
ter acesso a referências a nós DOM de **componentes** você precisa do forwardRef.

```js
const SomeComponent = forwardRef(render)
```

Chame `forwardRef()` para permitir que seu componente receba uma referência e a encaminhe para um 
componente filho:

```js
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  // ...
});
```

## Parâmetros

render: a função de renderização do seu componente. O React chama essa função com as props e ref que seu 
componente recebeu de seu pai. O JSX que você retornar será a saída do seu componente.

## Return

`forwardRef` retorna um componente React que você pode renderizar em JSX. Ao contrário dos componentes 
do React definidos como funções simples, um componente retornado por `forwardRef` também pode receber 
um ref prop.

## Exemplos de uso

```js
const MyInput = forwardRef(function MyInput(props, ref) {
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
});
```

- props: as props passadas pelo componente pai.
- ref: O ref atributo passado pelo componente pai. O ref pode ser um objeto ou uma função. 
Se o componente pai não tiver passado por uma ref erência, será null. Você deve passar o ref 
que você recebe para outro componente ou passá-lo para useImperativeHandle.

Veja um exemplo mais complexo:

- Componente filho

```js
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});
```

- Componente pai

```js
function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
```
