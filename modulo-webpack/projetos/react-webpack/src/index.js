'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const Title = require('./app')

ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)

