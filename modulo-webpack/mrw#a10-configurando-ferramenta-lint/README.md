# Configurando ferramenta lint

## Adicionar dependencias `standard` e `standard-loader`

```
npm install --save-dev standard standard-loader@4
```

## Editar o webpack.config para usar o `standard`

Pre loaders são executado antes dos loaders. Os loaders são executados
antes do webpack.

