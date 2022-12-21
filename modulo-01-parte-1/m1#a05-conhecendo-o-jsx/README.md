# Conhecendo o JSX

JSX significa Javascript + XML, esse nome foi dado pelo facebook.

**React foi craido pelo facebook**.

JSX é uma sintaxe, uma forma de escrever código. É uma abstração ao `React.createElement`.
Ou seja, com uma sintaxe JSX você pode criar um ReactElement.

Isso:

```js
const h1 = React.createElement('h1', null, 'Hello World React')

ReactDOM.render(h1, app)
```

É equivalente a isso:

```js
ReactDOM.render(<h1>Hello World React</h1>, app)
```

Perceba que o reactElement foi criado usando uma sintaxe parecida com a HTML.
A tag é o argumento type, o conteúdo dentro da tag é o objeto chidren, as propriedades da
tag, são as props propriedade do reactelement.

JSX é uma forma simplificada e legível de escrever o React.createElement.

O javascript normal não intende a sintaxe JSX. Então primeiro precisamos "complilar"
o nosso codigo javascript que usa a sintaxe JSX, essa compilação irá converter todas
as sintaxes de JSX para sintaxes válidas javascript como o React.createElemet.

## Compilando JSX para Javascript

Para compilar o codigo JSX em javascript válido, devemos adicionar o script do babel-core.
O babel-core é um compilador moderno de javascript. Ele entende o JSX e retorna um javascript válido,
para o browser, transformando o JSX em javascript normal (React.createElement).

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js" integrity="sha512-48/31uDtnmMX9RFC1g295vKWwNHG6zDM24c0LBopZTe1HsuoV5HUhtMXKAuDLxmeoFYiWc7tlHkheLtdV6w0Tw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Além de adionar o babel, devemos também adicionar a propriedade `type="text/babel"` em nossa
tag script. Para que todo o conteúdo dela seja transpilado pelo babel, e o resultado dessa transpilação
seja lido pelo browser.

O babel-core possui um interpretador JSX, alem de vários outros interpretadores. É comum
usar o babel para transpilar codigo javascript moderno (ES7) para versões mais antigas
do javascript.

```html
<script type="text/babel">
  const app = document.querySelector('#app')
  ReactDOM.render(<h1>Hello World React</h1>, app)
</script>
```

Ou

```html
<script type="text/babel">
  const app = document.querySelector('#app')
  const h1 = <h1>Hello World React</h1>
  ReactDOM.render(h1, app)
</script>
```