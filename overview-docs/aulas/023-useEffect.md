# useEffect hook

Os effects existam para que você possa se conectar a algum sistema fora do
react. O hook useEffect permite você executar algum código após a renderização.

## Antes de se aprofundar em useEffect

É preciso entender bem como os componentes react funcionam. E existem duas coisas
excenciais para entender o useEffect.

- O código de renderização: Seu JSX que renderizará as props e o estado. Deve ser puro.
- Manipuladores de eventos: Funções atreladas a eventos do navegador que são passadas
para seus elementos JSX. Podem ser impuros, podem fazer efeito colateral.

## Anote esse princípio

Qualquer ação que precise causar um efeito colateral, e não é acionada por um evento do navegador
como click, deve ser um efeito (useEffect).

Você deve usar o useEffect quando precisar causar um efeito colateral, e esse efeito colateral
não possa está atrelado a um evento. Se a sua ação causar efeito colateral, e não puder está em
um evento, crie um efeito para ela.

Os efeitos são efeitos colaterais causados pela renderização e não por um evento. Um efeito é
executado sempre após uma renderização.

## Definição

Os efeitos permitem especificar os efeitos colaterais causados ​​pela própria renderização, 
em vez de um evento específico. 

Os efeitos são executados no final do processo de renderização após a atualização da tela.

Este é um bom momento para sincronizar os componentes do React com algum sistema externo 
(como uma rede ou uma biblioteca de terceiros).

## Observação

No em todo esse texto a palavra "efeito" faz referência à **efeito colateral causado pela renderização**.

## Você pode não precisar de um efeito

Se o seu efeito não faz comunicação com nenhuma API externa. Se o seu efeito ajusta apenas
algum estado, muito provavelmente você não precisa de um efeito. Lembre-se que efeito é uma
saída de emergência.

## Como escrever um efeito?

Para escrever seu efeito siga três etapas:

1. Declare um efeito, por padrão o seu efeito será executado após a renderização
2. Especifique as dependência do efeito:

A maioria dos efeitos só deve ser executada novamente quando necessário, e não após cada renderização. 
Você aprenderá como controlar a execução do efeito especificando dependências.

3. Adicione limpeza, se necessário: 

Alguns efeitos precisam especificar como parar, desfazer ou limpar o que quer que estejam fazendo. 
Por exemplo, "conectar" precisa "desconectar", "inscrever" precisa "cancelar assinatura" e "buscar" 
precisa "cancelar" ou "ignorar". Você aprenderá como fazer isso retornando uma função de limpeza.

## Etapa 1: declarar um efeito

```js
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // O código aqui dentro irá ser executado após cada renderização
  });
  return <div />;
}
```

Toda vez que o react renderizar o componente, o callback passado para o useEffect, será executado.
Em outras palavras, o useEffect atrasa um código, para ser executado apenas apos a renderização.
Sendo a renderização a atualização do DOM com base no JSX retornado pelo componente. Sendo o componente
uma função que retorna uma marcação JSX. Sendo uma marcação JSX uma abstração de React.createElement.

## Cuidado com loops infinitos

Por padrão. um efeito é executado a cada renderização. Um setState atualiza o estado asincronamente
e executa novamente o componente retornando um novo JSX, e com isso é feito uma nova renderização.
Apos essa renderização é executado o efeito. Se o efeito tiver uma atualização de estado, essa atualização
chamará um render, e após esse render seria executado o efeito novamente e assim você teria um
loop infinito.

Os efeitos apenas devem sincronizar seus componentes com sistemas externos. Se você quiser apenas
ajustar um estado com base em outro estado, você não precisa de um estado.

## Etapa 2: especifique as dependências do efeito

Por padrão, os efeitos são executados após cada renderização. Porém, em muitos casos isso não vai
ser o que você quer.

É possivel passar um segundo argumento para o seu useEffect hook. E seu efeito será executado
sempre que algum valor, dentro do array de dependencias, seja alterado. Caso a dependencia
atual seja igual a anterior, o callback não é executado. Geralmente as dependencia de um efeito
são estados. Para executar um efeito apenas apos a primeira renderização, passe um array
vazio como segundo argumento.

```js
useEffect(() => {
  // ...
}, []);
```

Caso o callback do useEffect use alguma variável de fora de seu escopo, essa variável deve ser
uma dependencia. Sempre que alguma dependencia, ou seja sempre que o valor externo do qual
o callback do useEffect depende é alterado, o callback é executado, apos a renderização.
Caso os valores nessa execução do componetne não altere os valores das dependecias, o
efeito não é executado.

Dependencia é todo o valor externo, que efeito precisa saber para executar algo.

Você pode ter váris dependencias, o efeito apenas será pulado, caso todas as
dependencias sejam iguais a renderização anterior. Caso alguma dependencia tenha
seu valor diferente, o efeito será executado.


## Exemplos de execução do efeito com e sem dependências

```js
useEffect(() => {
  // Executado apos cada renderização
});

useEffect(() => {
  // Renderizado apenas no mount
}, []);

useEffect(() => {
  // Executado sempre que a ou b tiverem o valor atual diferente do valor da execução anterior
}, [a, b]);
```

Tudo o que for externo e for usado em seu useEffect, deve ser passado no array de dependências,
mesmo que o react não lhe der um warning, informe a dependencia proativamente.

## Etapa 3: adicionar limpeza, se necessário

O efeito é executado a principio em dois momentos:

1. Após cada renderização, caso o efeito não tenha um array de dependências
2. Após a primeira renderização (mount), caso o efeito tenha um array de dependências vazio
3. Após o render quando uma dependência tiver seu valor alterado

Porém existe um quarto momento aonte o efeito é executado

4. Após o compoente ser destruído (unmount), a função retornada pelo callback do useEffect
será executada. Essa função é chamada de função de limpeza, pois a sua função e limpar
dados em memoria, criados pelo efeito. Exemplo: desconectar de uma APi, limpar um timer.

Exemplo efeito com função de limpeza:

```js
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, []);
```

Ao executar a função de limpeza ou a montar o componente novamente, o react pode testar a sua função de 
limpeza, isso é normal e pode ser visível no ambiente de desenvolvimento, porém não é visível para o
usuário. Esse comportamento é normal. Ao montar o componente o react testa a função de limpeza.
Ou seja ao montar ele executa o efeito, a limpeza e depois o efeito de novo. Isso é feito 
para buscar bugs.

## Como lidar com o efeito disparando duas vezes no desenvolvimento?

Sempre limpe os callbacks de eventos

```js
useEffect(() => {
  function handleScroll(e) {
    console.log(e.clientX, e.clientY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

No desenvolvimento, seu Effect chamará addEventListener(), imediatamente removeEventListener() e 
addEventListener() novamente com o mesmo manipulador. Portanto, haveria apenas uma assinatura 
ativa por vez. Isso tem o mesmo comportamento visível ao usuário que chamar addEventListener() 
uma vez, como você veria na produção.

## adicionando animações

```js
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // Ativa the animation
  return () => {
    node.style.opacity = 0; // Reseta para o valor inicial
  };
}, []);
```

No desenvolvimento, a opacidade será definida para 1, depois para 0, e depois para 1 novamente. 
Isso deve ter o mesmo comportamento visível ao usuário que defini-lo 1diretamente, que é o que 
aconteceria na produção. Se você usar uma biblioteca de animação de terceiros com suporte para 
interpolação, sua função de limpeza deverá redefinir a linha do tempo da interpolação para seu 
estado inicial.

## Obtendo dados com efeitos

```js
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

Você não pode “desfazer” uma solicitação de rede que já aconteceu, mas sua função de limpeza deve 
garantir que a busca que não é mais relevante não continue afetando seu aplicativo. Por exemplo, 
se userIdmudar de 'Alice'para 'Bob', a limpeza garante que a 'Alice'resposta seja ignorada mesmo 
que chegue depois de 'Bob'.

No desenvolvimento, você verá duas buscas na guia Rede. Não há nada de errado com isso. Com a 
abordagem acima, o primeiro Efeito será imediatamente limpo para que sua cópia da ignorevariável 
seja definida como true. Portanto, mesmo que haja uma solicitação extra, ela não afetará o estado 
graças ao if (!ignore)cheque.

Na produção, haverá apenas um pedido. Se a segunda solicitação em desenvolvimento estiver 
incomodando você, a melhor abordagem é usar uma solução que desduplica as solicitações e 
armazena em cache suas respostas entre os componentes:

```js
function TodoList() {
  const todos = useSomeDataLibrary(`/api/user/${userId}/todos`);
  // ...
```

Isso não apenas melhorará a experiência de desenvolvimento, mas também fará com que seu aplicativo 
pareça mais rápido. Por exemplo, o usuário pressionando o botão Voltar não terá que esperar que 
alguns dados sejam carregados novamente porque eles serão armazenados em cache. Você mesmo pode 
construir tal cache ou usar uma das muitas alternativas existentes para busca manual em Effects.

Em resumo, em ambiente de desenvolvimento, seu efeito será executado a primeira vez,
depois executado a função de limpeza se existir, depois o efeito será executado novamente
e isso é normal. Lide com o react dessa forma em ambiente de desenvolvimento, em ambiente
de desenvolviemnto isso não ocorrerá. Isso apenas ocorre para que o react consiga detectar bugs.

## Não é um efeito: inicializando o aplicativo

Algumas lógicas devem ser executadas apenas uma vez quando o aplicativo é iniciado. 
Você pode colocá-lo fora de seus componentes:

```js
if (typeof window !== 'undefined') { // Check if we're running in the browser.
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

Isso garante que essa lógica seja executada apenas uma vez após o navegador carregar a página.

## Juntando tudo

