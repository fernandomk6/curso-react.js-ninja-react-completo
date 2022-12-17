'use strict'

import React from 'react'
import Title from './title'

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Title
          name='Fernando'
          lastname='Henrique'
        />
      </div>
    )
  }
})

export default App
