'use strict'

import Title from './app'

const React = require('react')
const ReactDOM = require('react-dom')

ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)

