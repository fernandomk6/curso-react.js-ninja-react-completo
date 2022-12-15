# React no front-end

O que do react roda no frontend e o que roda no backend?

## Node JS

Quando falamos de nodeJS existe uma certa duvida do que é processado no frontend 
e o que é processado no backend. Para explicar vamos levar em conta um ambiente
react, com node, webpack, babel, lint etc...

## Package.js

De forma resulmida podemos dizer que, tudo o que está setado como `devDependencies` no seu
package.js roda no backend (node). O que está em `dependencies`, roda no frontend.

## React

O react é um objeto que é processado no backend, quando a página é carregada. 
Tanto que é possivel usar react com um CDN sem a necessidade de node.

Porem no ambiente node, geralmente, antes do seu código ser carregado no frontend, uma
serie de coisas é feita, por exemplo, o babel transpila seu codigo, o list verifica
seu codigo, o webpack gera um bundle. Tudo isso é feito no backend. 

O que roda no frontend, é o seu simples arquivo index.html e os links contidos nele. 
Apenas isso. Frontend é o arquivo index.html e os links contidos nele.

Quando o frontend se comunica com o back, geralmente isso é feito por chamadas assincronas (requests),
ou, algo é processado no backend antes de ser lido no front pelo browser.

## Resumindo

Frontend é o que roda no navegador (htmls e seus links).

wenpack, babel, list etc... (devDependecies), são processadas no backend (node) e geram 
um bundle. 

O bundle gerado pelo backend, é linkado ao html.

O frontend é o seu html e seu bundle.