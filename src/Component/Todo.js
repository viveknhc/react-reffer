import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h1>todo</h1>
        <h3>{this.props.greet}</h3>
      </div>
    )
  }
}
