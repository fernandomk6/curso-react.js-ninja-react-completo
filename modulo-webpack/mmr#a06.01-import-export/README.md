# Import e Export

Existe dois tipos de export. 

- export default
- export "nomeado"

Para cada tipo de export, um import deve ser usado.

## Export default

Apenas é permitido um exeport default por arquivo/modulo javascript.

A forma correta de importar um valor que veio de um export default é: 
`import QUALQUER_NOME from './file_ou_node_dependecia'`

## Export "nomeado"

São permitidos mais de um export nomeado por arquivo/modulo javascript.

A forma correta de importar um valor que veio de um export nomeado é: 
`import { nome_da_variavel_exportada } from '/file_ou_node_dependecia'`

## Exemplo

### Export default

```js
// user.js

export default const fernando = 'fernando'

// outro arquivo js

import pedro from './user'
console.log(pedro) // fernando
```

### Export nomeado

```js
// user.js

export const fernando = 'fernando'
export const pedro = 'pedro'

// outro arquivo js

import { fernando, pedro } from './user'
import fred from './user' // lança um erro pois não existe nenhum export default em user.js

console.log(fernando) // fernando
console.log(pedro) // pedro
```

### Ambos

```js
// user.js
export const fernando = 'fernando'
export const pedro = 'pedro'
export default const manoel = 'manoel'

// outro arquivo js

// não lança erro pois existe um export default em user.js
import fred, { fernando, pedro } from './user' 

console.log(fernando) // fernando
console.log(pedro) // pedro
console.log(fred) // manoel
```

## Resumindo

import sem chaves irá buscar o valor do export default.
import com chaves irá buscar por um export nomeado (export sem default), e o nome do import 
deve ser igual ao nome do arquivo no export.

## Extra

### Operador as

Também é possível renomear um export nomeado, para evitar colisões de nomeclatura.

- `import { export as alias } from "module-name"`

O que vier dpois do operador `as`, será o nome da variavel nesse arquivo. O nome antes do `as`,
é o nome exato da variavel que foi exportada.

### Operador *

Também é possível importar todos os export nomeados de uma vez, sem a necessidade de ficar,
especificando os nomes de cada variavel exportada.

`import * from 'module-name'`

O `*` irá importar todas as variaveis nomeadas que foram exportadas com o mesmo nome que 
foram exportadas.
