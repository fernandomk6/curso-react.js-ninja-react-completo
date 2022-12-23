# Eventos para componentes de formulários

Basicamente abordaremos 3 príncipais eventos.

- onChange (padrão para uso em react)
- onInput (padrão para uso em HTML5 e não recomendado para uso em react)
- onSubmit (padrão em react e em HTML5)

De forma resumida, para react use `onChange` e `onSubmit`. Em HTML5
use `onInput` ao invés de `onChange`. Mas iremos focar no uso de react aqui.

## Inputs (value props)

Para todos os casos. para elementos de formulário sempre use o evento
`onChange` para lidar com as interações do usuário e consequentemente
com as manipulações de estado.

## Form tag

E para o elemento form, use o evento `onSubmit` juntamente com `e.preventDefault()`
pois react é uma lib de SPA (single page application) e não queremos que a página
sejá recarregada.

O formulário também pode ter o evento `onChange`. Ele será disparado sempre que,
qualquer alteração for feita em um dos elementos do formulário.

```js
<form onChange={handleChangeForm}>
  {/* campos de formulário */}
</form>
```
