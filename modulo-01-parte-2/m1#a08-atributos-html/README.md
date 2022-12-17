# Atributos HTML

Alguns atributos HTML no jsx devem ser escritos de forma diferente para não
causar conflitos com as palavras chaves javascript.

Veja alguns exemplos:

| Att HTML | Att JSX |
| --- | --- |
| class | className |
| for | htmlFor |
| onchange | onChange (para todos os eventos a letra seguinte do on, vem maiúscula) |

```js
import React from 'react';

function FormInput(props) {
  return (
    <label className="form-label" htmlFor={props.id}>
      {props.label}
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
}
```

Perceba que no elemento `label` na expressão JSX, foi usado a propriedade `className` e não class.
Pois JSX é javascript e class é uma palavra reservada em javascript. Perceba também o uso
da propriedade `htmlFor`.

