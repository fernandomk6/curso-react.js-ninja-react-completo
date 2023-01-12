# Removendo dependência dos efeitos

Este guia irá ensinar você a remover dependências desnecessárias de 
seus efeitos.

## As dependências devem corresponder ao código

Ao escrever um código primeiro escreva o que o código efeito vai fazer e depois
como desfazer esse efeito.

EFeitos reagem a auterações dos valores reativos. Valores reativos são estados e props ou
variáveis criadas apartir de um desses. Valores reativos são valores que
podem mudar devido a uma nova renderização.

Valores não reativos (que não mudam dependendo da renderização) não precisam
ser dependências.

## Perguntas importantes

Antes de tudo, sempre que possível procure usar eventos ao invés de efeitos.
Isso da mais autonimia ao usuário.

- Esse código deve ser movido para um manipulador de eventos?
- Meu efeito está fazendo apenas uma coisa? está sincronizando apenas uma coisa?

Se o seu efeito estiver fazendo mais de uma coisa, separe-o e crie dois ou
mais efeitos.

Duas coisas diferentes são sincronizadas por dois efeitos separados.

