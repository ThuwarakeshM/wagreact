import React, { Component } from 'react'
import ReactDOM from 'react-dom'
require('./style.scss')

export class Base extends Component {
  render() {
    return (
      <div className="title">Base</div>
    )
  }
}

ReactDOM.render(<Base/>, document.getElementById('base'));
