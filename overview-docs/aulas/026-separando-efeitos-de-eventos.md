# Separando eventos de efeitos

Sempre que ficar na dúvida entre efeitos e eventos, se pergunte por que essa
ação deve ser executada.

## Princípio para declarar manipuladores de eventos 

- Manipuladores de eventos são executados em resposta a interação do usuário.
- O que acontecer, pelo motivo do usuário ter feito algo, deve ser um manipulador
de evento.
- Manipuladores de evento, é aquilo que está sobre o controle do usuário.

## Princípios para declarar efeitos

- Efeitos devem ser executados sempre que uma sincronização é necessária
- O usuário não tem controle sobre os efeitos

## Valores reativos

Os valores reativos são, estados, props e variáveis geradas apartir de estado ou props.
Valores reativos podem mudar devido a uma nova renderização.

### Eventos

Não são reativos, ou seja, mesmo que os valores reativos mudem e o componente renderize 
novamente, os eventos não são acionados. Eventos estão sobre o controle do usuário.

### Efeitos

São reativos. Sempre que os valores reativos mudam (suas dependências), ele será 
executado. Efeitos devem está sincronizados com um valores reativo.

