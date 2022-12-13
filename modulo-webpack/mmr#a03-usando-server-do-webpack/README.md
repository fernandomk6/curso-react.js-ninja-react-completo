# Usando server do webpack

## O que precisaremos

- Instalar a dependencia do servidor webpack `npm install --save-dev webpack-dev-server@1`
- Adicionar publicPath no webpack.config

puplicPath é o local aonde o webpack do webserve irá ficar assistindo o nosso arquivo de
desenvolvimento.

Quando executamos o webpack do web-server, ele não vai gerar um arquivo físico. Ele gera um arquivo 
virtual. E o publicPath diz aonde esse arquivo vai ficar. Da onde o webpack do web server deve servir
esse arquivo.

- Passar o caminho correto no index.js

```html
<script src="./static/bundle.js"></script>
```

*O diretorio ./static/ (publicjPath) fica salvo em mémoria. Não é fisivel nas estruturas de pasta*.

Quando precisarmos de um arquivo final fisico (não virtual). Usamos o comando webpack, que será gerado
o bundle na pasta configurada `dist`. E em produção usaremos esse arquivo.

O webpack do web server vai servir esse arquivo.

- Subir o servidor de desenvolvimento

Execute `webserve-dev-server`. Feito isso acontecerá o seguinte.

Servidor será levantado: http://localhost:8080/webpack-dev-server/

O resultado de webpack está sendo servido de `/static/` (publicPath)