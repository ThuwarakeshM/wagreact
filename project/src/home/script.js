require('./style.scss');
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Home extends Component {
  render() {
    return (
      <p className="subtitle">Home</p>
    )
  }
}

ReactDOM.render(<Home/>, document.getElementById('home'));