# Começando a trabalhar com o react

## Antes de começar instale um servidor para acompanhar sua página

Nesse exmplo usamos o http-serve

`npm install http-server`

Depois configure em seu package.json um script 

```json
"scripts": {
  "http-server": "http-server"
}
```

`npm run http-server`

Depois abra o "localhost" e veja sua página HTML.

## Links básicos para usar o react na WEB via CDN

Versão usada aqui será a de 15.1.0

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js" integrity="sha512-bPEAI/w5skhB3Kchsnt+R/e9Bvaije6PJhB5FBy6CRzUC9dB52NS9e7OK2LJQfdOUJdTkIMvA+ioWjEMYv37Jg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js" integrity="sha512-SYAv6yPI2ytwfZd1nrA0yA/HxtRk+jcIhjm0LIxPHFM7mkcCQo+/YFivrio49aHGOYKE0hYgwmRPZzoXQQmbQw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Ao inportar o cdn do react e do react dom. Você pode usar o objeto global `REACT`.

Embaixo dos imports do react e do react dom. Execute um console.log(React).

```html
<script>
  console.log(React)
</script>
```

## Propriedades mais utilizadas

- React.component
- React.createClass
- React.createElement

## Como criar um elemento usando ReactJs

Para criar um elemento React usamos o método createElement.
Esse método aceita 3 argumentos. O nome da tag (type), as propriedades desse elemento (props),
e o contúdo do elemento (children). ƒ (type, props, children).

```js
const h1 = React.createElement('h1', null, 'Hello World')
console.log(h1)
```

Um elemento React é parecido com um elemento do DOM. Esse elemento React futuramente será inserido no
DOM.

Um react element possui uma propriedade props, que são as propriedades desse elemento.
Existe uma propriedade de props que é a children. Essa propriedade pode ser outros elementos React
ou um texto. O conteudo da propriedade chidren de props, será o conteudo, ou filhos, do elemento react
criado.

Cada react element tem também uma propriedade type que é uma string e armazenará o tipo
do elemento. Esse tipo pode ser uma tag html como `h1` por exemplo.

React element também possui uma propriedade key, que em alguns momentos será necessário preenche-la.

## Como renderizar um elemento react na tela

Usamos o método `render` do objeto `ReactDom` para renderizar react elements na tela.

Ele espera receber 2 argumentos.

- O elemento react a ser renderizado
- Aonde esse elemento será renderizado

```js
ReactDOM(h1, document.getElementById('app'))
```

Nesse caso estamos renderizando no DOM, um react Element, dentro do elemento que tenha o ID app.

Depois que o reactElement é inserido no DOM, ele passa a ser um objeto do DOM, com todas as 
propriedades de um objeto DOM. Ele não é mais um react element. Enquanto ele não for adicionado no DOM,
ele é um reactElement.

## React.createElement VS document.createElement

O método do objeto document retorna um objeto do DOM, um DOM element.
O método do objeto React, retorna um objeto React, um react element.

O react element é inserido no reactDOM, que é o DOM virtual do react.
Esse DOM virtual do react é sempre comparado com o DOM real. Quando o DOM do react está,
diferente do DOM real, o DOM real é alterado para que fique igual ao reactDOM.

Ou seja o render insere o reactElement no DOM virtual do react.
Apos essa alteração é verificado se o reactdom está diferente do dom, se sim, o dom é atualizado
para que tenha os mesmo elementos do reactdom. As propriedades do reactelement são usadas
para definir como esse elemento sera renderizado no dom real. 

No react nunca manipulamos o dom diretamente, manipulamos o reactDOM, e o reactDOM, manipula o dom
real, para que o dom real sempre fique igual ao reactDOM ou DOM virutal.

Qualquer elemento HTML ou SVG pode ser criado usando o React.createElement.

## O que aprendemos

- Instalar servidor local (http-server)
- Instalar o React e ReactDOM via CDN
- Criar elemento react (React.creteElement)
- Renderizar elementos react na tela (ReactDOM.render)
- Vimos também que elementos react são diferentes de elementos DOM