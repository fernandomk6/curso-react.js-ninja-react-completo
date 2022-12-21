# Sobre o react

## O que é react

É uma biblioteca javascript para criar interfaces de usuário.

Pode ser usado com frameworks.
Pode ser usado para criar trexos de interfaces dentro de sua aplicação.

Ele é basicamente o view do MVC.

## Onde o react deve ser usado?

Usamos react em aplicações dinâmicas, que tenham muita manipulação de DOM.

- WEB Apps
- Mobile Apps
- Sistema de administração de CMS

## Onde não devemos utilizar o react?

- Sistemas que só exibem conteúdo (Sites institucionais)
- Blogs

## Ideia do react

Além de criar interfaces, a principal ideia do react é facilitar a manipulação
de conteúdos na tela. Sites e aplicações que não precisam manipular conteúdos na tela,
ou que não possua muita interação com o usuário, não precisam ser desenvolvidos com react.
React foi feito para desenvolver interfaces interativas e dinâmicas.

## Quais problemas o react resolve?

- Modularização (separação de responsabiliade)
- Componentização (tudo que é feito em react é um componente)
- Performance (manipulação do DOM)

Ao invés de manipular o DOM diretamente, o react possui o seu proprio DOM. Esse DOM do react é
chamado de virtual DOM. Quando é necessário fazer alguma alteração no DOM real, é feito
uma comparação entre o DOM real e o virtual DOM, e as diferenças são aplicadas no DOM real.
