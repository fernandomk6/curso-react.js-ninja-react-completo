'use strict'

import React, { Component } from 'react'
import LikeButton from './likeButton'
import SearchButton from './searchButton'

class App extends Component {
  render () {
    return (
      <div>
        <h1>React App</h1>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App
