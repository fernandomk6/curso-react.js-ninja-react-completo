# Ciclo de vida dos efeitos



## Ciclo de vida dos efeitos

Todo componente react passa pelos mesmos ciclos de vida

- O componente é montado, quando adicionado a tela
- Um componente é atualizado quando recebe novas props ou novos estados
- Um componente desmonta, quando é removido da tela

Um efeito precisa sincronizar algum sistema externo, ao seus componentes react.
A medida que seu componente atualiza, o efeito precisa continuar sendo executado.

- O corpo de seu efeito, deve especificar como inicializar a sincronização
- A função retornada, deve especificar como parar a sincronização

## Regra de outro dos efeitos

- Cada efeito deve iniciar uma sincronização em seu corpo e deve parar essa sincronização
em sua função de limpeza. 
- Sempre, antes do corpo de um efeito ser executado, a sua função de limpeza será executada 
(com exceção do primeiro efeito, esse não é limpa, apenas o corpo é executado).
- Veja cada ciclo de efeito, individualmente, limpando e depois sincronizando.

*No desenvolvimento, o React sempre remonta cada componente uma vez*.

Em outras palavras, o React verifica se o seu Efeito pode ressincronizar, forçando-o 
a fazer isso imediatamente no desenvolvimento.

- Faça cada efeito fazer apenas uma coisa. Não importa se você repida as mesmas
dependencias em efeitos diferentes

*Cada efeito em seu código deve representar um processo de sincronização separado e independente*.

- O que nunca muda devido a uma renderização, não precisa ser uma dependencia.
- Procure sempre pensar na perspectiva do efeito e esqueça os ciclos de vida dos componentes.
- Props e state não são os únicos valores que devem ser dependencias. Os valores calculados a 
partir deles também devem ser dependencias.
- As dependencias devem ser valores primitivos. Não coloque objetos como dependencias.
Pois a cada renderização, eles serão valores diferentes (referencias).

