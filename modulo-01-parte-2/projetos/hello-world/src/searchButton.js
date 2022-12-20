'use strict'

import React from 'react'
import Button from './button'

const SearchButton = (props) => {
  return (
    <Button handleClick={() => alert('pesquisou')}>Pesquisar</Button>
  )
}

export default SearchButton
