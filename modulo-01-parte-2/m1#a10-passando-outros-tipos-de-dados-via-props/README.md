# Passando outros tipos de dados via props

Até o momento passamos apenas strings via props. Porém é possível
passar qualquer tipo de dado javascript como prop.

## Como passar outros tipos de dados via props

### Relembrando os tipos de dados em javascript

Primitivos: 

- String: valores de texto, como "hello" ou "goodbye".
- Number: valores numéricos, como 42 ou 3.14.
- Boolean: valores lógicos verdadeiro ou falso.
- Null: um valor que representa a ausência de um valor.
- Undefined: um valor que é atribuído a uma variável que ainda não foi inicializada.
- Symbol: um tipo único que pode ser usado como uma chave de propriedade de um objeto.

Não primitivos:

- Object: um conjunto de pares chave-valor que podem armazenar qualquer tipo de dado.
- Function: uma função é um bloco de código que pode ser chamado repetidamente.

### Passando os dados via props

Strings podem ser passadas diretamente usando aspas simples ou duplas. Da seguinte
maneira: 

```js
<Title name='Fernando'>
```

Já os demais tipos de dados (todos com exceção da string), devem ser passados
dentro de um par de chaves. Da seguinte maneira:

```js
<MyComponent 
  name='Fernando' 
  age={24} 
  // or isDev apenas para atribuir o valor true a essa prop
  isDev={true} // para atribuir false faça isDev={false}
  aNullData={null}
  aUndefinedData={undefined}
  aObjectData={{
    name: 'Fernando',
    age: 24,
    hibbies: [...]
  }}
  aFunction={() => console.log('Você executou uma função')}
  aArray={[1, 2, 3]}
/>
```

O par de chaves interpreta a expressão javascript contida dentro dele.
Strings literais não precisam ser englobadas pelo par de chaves.

Mas para interpretar uma string que esteja armazenada em uma variavel,
precisaremos do par de chaves. Veja:

```js
const name = 'Fernando'

<Title name={name}/>
```

## Avançado

As props sempre fazem referencia a dados do contexto atual. Caso o dado passado não esteja relacionado
necessáriamente ao escopo atual aonde o componente é chamado, ao inves de passar um valor como prop,
sete esse valor diretamente no componente dentro da função `render`.

Props são dados do componente pai que são passados para o filho, caso o filho não precise,
receber esses dados do pai, não é necessario o uso de props.

Use props apenas para passar dados dinamicos, referente ao pai. O pai vai dizer como o componente deve
ser renderizado, apenas quando os dados dependerem do pai. Ou, for usado por outros componentes filhos.

Caso seja um dado especifico do componente, declare-o dentro do componente e não passe-o como props.
