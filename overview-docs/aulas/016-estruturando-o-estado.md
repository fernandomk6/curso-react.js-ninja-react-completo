# Estruturando o estado

## Princípios para estruturar o estado

1. Estado relacionado ao Grupo

Se você sempre atualizará duas variáveis de estado juntas, considere mesclá-las
em uma única variável de estado.

```js
// ao invés disso
const [x, setX] = useState(0);
const [y, setY] = useState(0);

// faça isso
const [position, setPosition] = useState({ x: 0, y: 0 });
```

2. Evite contradições no estado

Quando o estado é estruturado com várias variáveis de estado que podem se contradizer,
você tem um ambiente muito favorável a bugs.

```js
const [text, setText] = useState('');
const [isSending, setIsSending] = useState(false);
const [isSent, setIsSent] = useState(false);
```

Aqui está um formulário de feedback do hotel com variáveis ​​de estado isSending:isSent.

Embora esse código funcione, ele deixa a porta aberta para estados “impossíveis”. 
Por exemplo, se você esquecer de chamar setIsSente setIsSendingjuntos, você pode 
acabar em uma situação em que ambos isSendingestão isSentao truemesmo tempo.

Como isSendinge isSentnunca devem ser trueao mesmo tempo, é melhor substituí-los 
por uma statusvariável de estado que pode assumir um dos três estados válidos: 
'typing' (inicial), 'sending', e 'sent':

```js
const [text, setText] = useState('');
const [status, setStatus] = useState('typing');
```

3. Evite estado redundante

Se você pode obter as informações necessárias apartir de props, ou de estados existêntes,
não torne essas informações variáveis de estado.

Se você pode calcular algumas informações dos props do componente ou de suas variáveis 
​​de estado existentes durante a renderização, não deve colocar essas informações 
no estado desse componente.

```js
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState(''); // redundante
```

4. Evite duplicidade de estado

Quando os mesmos dados são duplicados entre várias variáveis de estado, ou em objetos aninhados,
é difícil mante-los sincronizados. Reduza duplicação sempre que puder.

```js
const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  ); // duplicidade

// ... pode ser substituído por

const [items, setItems] = useState(initialItems);
const [selectedId, setSelectedId] = useState(0) // seta o id com base
// na key, renderizada pela lista dos items e assim,
// obteremos o id necessário
```

5. Evite estado profundamente aninhado

Dados profundamente aninhados são complicados de aninhar. Sempre prefira estados completamente
planos.

O objetivo por trás desses princípios, é reduzir erros e facilitar a manutenção das variáveis
de estado.

```js
export const initialTravelPlan = {
  id: 0,
  title: '(Root)',
  childPlaces: [{
    id: 1,
    title: 'Earth',
    childPlaces: [{
      id: 2,
      title: 'Africa',
      childPlaces: [{
        id: 3,
        title: 'Botswana',
        childPlaces: []
      }, {
        id: 4,
        title: 'Egypt',
        childPlaces: []
      }, {
        id: 5,
        title: 'Kenya',
        childPlaces: []
      }, {
        id: 6,
        title: 'Madagascar',
        childPlaces: []
      }, {
        id: 7,
        title: 'Morocco',
        childPlaces: []
      }, {
        id: 8,
        title: 'Nigeria',
        childPlaces: []
      }, {
        id: 9,
        title: 'South Africa',
        childPlaces: []
      }]
    }, {
      id: 10,
      title: 'Americas',
      childPlaces: [{
        id: 11,
        title: 'Argentina',
        childPlaces: []
      }, {
        id: 12,
        title: 'Brazil',
        childPlaces: []
      }, {
        id: 13,
        title: 'Barbados',
        childPlaces: []
      }, {
        id: 14,
        title: 'Canada',
        childPlaces: []
      }, {
        id: 15,
        title: 'Jamaica',
        childPlaces: []
      }, {
        id: 16,
        title: 'Mexico',
        childPlaces: []
      }, {
        id: 17,
        title: 'Trinidad and Tobago',
        childPlaces: []
      }, {
        id: 18,
        title: 'Venezuela',
        childPlaces: []
      }]
    }, {
      id: 19,
      title: 'Asia',
      childPlaces: [{
        id: 20,
        title: 'China',
        childPlaces: []
      }, {
        id: 21,
        title: 'Hong Kong',
        childPlaces: []
      }, {
        id: 22,
        title: 'India',
        childPlaces: []
      }, {
        id: 23,
        title: 'Singapore',
        childPlaces: []
      }, {
        id: 24,
        title: 'South Korea',
        childPlaces: []
      }, {
        id: 25,
        title: 'Thailand',
        childPlaces: []
      }, {
        id: 26,
        title: 'Vietnam',
        childPlaces: []
      }]
    }, {
      id: 27,
      title: 'Europe',
      childPlaces: [{
        id: 28,
        title: 'Croatia',
        childPlaces: [],
      }, {
        id: 29,
        title: 'France',
        childPlaces: [],
      }, {
        id: 30,
        title: 'Germany',
        childPlaces: [],
      }, {
        id: 31,
        title: 'Italy',
        childPlaces: [],
      }, {
        id: 32,
        title: 'Portugal',
        childPlaces: [],
      }, {
        id: 33,
        title: 'Spain',
        childPlaces: [],
      }, {
        id: 34,
        title: 'Turkey',
        childPlaces: [],
      }]
    }, {
      id: 35,
      title: 'Oceania',
      childPlaces: [{
        id: 36,
        title: 'Australia',
        childPlaces: [],
      }, {
        id: 37,
        title: 'Bora Bora (French Polynesia)',
        childPlaces: [],
      }, {
        id: 38,
        title: 'Easter Island (Chile)',
        childPlaces: [],
      }, {
        id: 39,
        title: 'Fiji',
        childPlaces: [],
      }, {
        id: 40,
        title: 'Hawaii (the USA)',
        childPlaces: [],
      }, {
        id: 41,
        title: 'New Zealand',
        childPlaces: [],
      }, {
        id: 42,
        title: 'Vanuatu',
        childPlaces: [],
      }]
    }]
  }, {
    id: 43,
    title: 'Moon',
    childPlaces: [{
      id: 44,
      title: 'Rheita',
      childPlaces: []
    }, {
      id: 45,
      title: 'Piccolomini',
      childPlaces: []
    }, {
      id: 46,
      title: 'Tycho',
      childPlaces: []
    }]
  }, {
    id: 47,
    title: 'Mars',
    childPlaces: [{
      id: 48,
      title: 'Corn Town',
      childPlaces: []
    }, {
      id: 49,
      title: 'Green Hill',
      childPlaces: []      
    }]
  }]
};

// preciso nem dizer né? escuta a pancada!
```

## Recapitular

1. Se duas variáveis ​​de estado sempre são atualizadas juntas, considere mesclá-las em uma.
2. Escolha suas variáveis ​​de estado com cuidado para evitar a criação de estados “impossíveis”.
3. Estruture seu estado de forma a reduzir as chances de cometer um erro ao atualizá-lo.
4. Evite o estado redundante e duplicado para que você não precise mantê-lo sincronizado.
5. Para padrões de interface do usuário, como seleção, mantenha o ID ou o índice no estado em 
vez do próprio objeto.
6. Se atualizar o estado profundamente aninhado for complicado, tente nivelá-lo.
